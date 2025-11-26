/* eslint-disable no-console */
import { readFile } from "node:fs/promises";

const files = ["src/shared/i18n/config/messages/ko.json", "src/shared/i18n/config/messages/en.json"];

const loadJson = async path => {
  try {
    const jsonContent = await readFile(path, "utf8");
    return JSON.parse(jsonContent);
  } catch (error) {
    console.error(`Error reading or parsing JSON file at ${path}:`, error);
    throw error;
  }
};

const getAllKeys = (obj, parentKey = "") => {
  let keys = [];
  for (const key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      keys = [...keys, ...getAllKeys(obj[key], newKey)];
    } else {
      keys.push(newKey);
    }
  }
  return keys;
};

const checkKeys = async () => {
  let hasError = false;
  const koJson = await loadJson(files[0]);
  const enJson = await loadJson(files[1]);

  const koKeys = getAllKeys(koJson);
  const enKeys = getAllKeys(enJson);

  const koKeysSet = new Set(koKeys);
  const enKeysSet = new Set(enKeys);

  const missingInKo = enKeys.filter(key => !koKeysSet.has(key));
  const missingInEn = koKeys.filter(key => !enKeysSet.has(key));
  console.log("Checking for missing keys between ko.json and en.json...");

  if (missingInKo.length > 0) {
    hasError = true;
    console.error("Missing keys in ko.json:", missingInKo);
  } else {
    console.log("No missing keys in ko.json");
  }

  if (missingInEn.length > 0) {
    hasError = true;
    console.error("Missing keys in en.json:", missingInEn);
  } else {
    console.log("No missing keys in en.json");
  }
  if (hasError) globalThis.process.exit(1);
};

try {
  await checkKeys();
  console.log("Locales check completed successfully");
} catch (error) {
  console.error("Error during locales check:", error);
  globalThis.process.exit(1);
}
