export default function Home() {
  return (
    <main className="container mx-auto">
      {Array.from({ length: 200 }, (_, i) => i + 1 + " 번째 row").map((v, i) => (
        <h2 key={i}>{v}</h2>
      ))}
    </main>
  );
}
