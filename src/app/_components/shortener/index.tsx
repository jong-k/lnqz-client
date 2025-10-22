import ShortenerContainer from "./shortener-container";

export default function Shortener() {
  return (
    <div>
      <h3 className="text-center text-3xl font-semibold">링크를 줄이세요, 당신의 시간은 소중하니까</h3>
      <p className="my-4 text-center text-xl">긴 URL을 짧게 줄일 수 있습니다</p>
      <ShortenerContainer />
    </div>
  );
}
