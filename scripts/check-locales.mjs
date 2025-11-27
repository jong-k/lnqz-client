/* eslint-disable no-console */
import { readFile } from "node:fs/promises";

const files = ["src/shared/i18n/config/messages/ko.json", "src/shared/i18n/config/messages/en.json"];

const loadJson = async path => {
  try {
    const jsonContent = await readFile(path, "utf8");
    return JSON.parse(jsonContent);
  } catch (error) {
    console.error(`다음 경로의 JSON 파일을 읽어들이거나 파싱하는데 오류가 발생했습니다: ${path}`, error);
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
  console.log("ko.json과 en.json 간의 누락된 키를 확인하는 중...");

  if (missingInKo.length > 0) {
    hasError = true;
    console.error("ko.json에 누락된 키:", missingInKo);
  } else {
    console.log("ko.json에 누락된 키가 없습니다");
  }

  if (missingInEn.length > 0) {
    hasError = true;
    console.error("en.json에 누락된 키:", missingInEn);
  } else {
    console.log("en.json에 누락된 키가 없습니다");
  }
  if (hasError) globalThis.process.exit(1);
};

try {
  await checkKeys();
  console.log("Locales 체크가 성공적으로 완료되었습니다");
} catch (error) {
  console.error("Locales 체크 중 오류가 발생했습니다:", error);
  globalThis.process.exit(1);
}
