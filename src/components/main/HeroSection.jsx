import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-64px)] bg-linear-to-r from-white to-primary-light">
      <div
        className="
        mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl 
        grid-cols-1 items-center gap-10 px-6 py-12
        md:grid-cols-2 md:gap-8 md:px-16 md:py-0">
        {/* Left - 텍스트 */}
        <div className="text-center md:text-left">
          <p className="mb-4 text-base font-bold text-primary-medium opacity-70">
            AI POWERED JOB MATCHING
          </p>

          <h1 className="text-[40px] font-bold leading-tight tracking-tight text-primary md:text-5xl">
            이 채용공고와
            <br />
            얼마나 잘 맞을까?
          </h1>

          <p className="mt-4 text-base leading-8 text-gray-500 md:text-lg md:max-w-xl">
            AI가 당신의 포트폴리오와 채용공고를 분석해
            <br />
            지원 적합도와 개선방향을 알려드려요.
          </p>

          <Link
            to={"/portfolio/upload"}
            className="
              mt-8 inline-flex w-full items-center justify-center
              px-20 py-4 rounded-4xl
              font-medium bg-primary text-white
              md:w-auto">
            내 포트폴리오 분석하기
            <span className="ml-2">→</span>
          </Link>
        </div>
        {/* Right - 이미지 */}
        {/* TODO: 프리뷰 이미지로 대체 */}
        <div className="flex justify-center md:justify-end">
          <div className="flex h-80 w-full max-w-xl items-center justify-center rounded-2xl bg-gray-50 shadow">
            <p className="text-gray-400">분석 결과 프리뷰</p>
          </div>
        </div>
      </div>
    </section>
  );
}
