export async function createShortUrl(targetUrl: string): Promise<string> {
  const response = await fetch("/api/urls", {
    body: JSON.stringify({ targetUrl }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("단축 URL 생성에 실패했습니다.");
  }

  const { shortUrl } = (await response.json()) as { shortUrl: string };
  return shortUrl;
}
