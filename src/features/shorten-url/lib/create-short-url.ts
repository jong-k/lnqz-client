export async function createShortUrl(targetUrl: string): Promise<string> {
  const response = await fetch("/api/urls", {
    body: JSON.stringify({ targetUrl }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to create short URL");
  }

  const { shortUrl } = (await response.json()) as { shortUrl: string };
  return shortUrl;
}
