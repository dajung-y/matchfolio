import { Link } from "react-router-dom";

export default function FinalCTASection() {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-8">
        <p className="text-sm font-light text-white ">
          내 포트폴리오와 어떤 채용공고가
        </p>
        <h3 className="mt-1 text-2xl font-semibold text-white tracking-tight">
          잘 맞는지 지금 확인해보세요
        </h3>
        <Link
          to={"/portfolio/upload"}
          className="
              mt-6 inline-flex w-full items-center justify-center
              px-10 py-4 rounded-4xl
              font-medium bg-white text-primary
              md:w-auto">
          내 포트폴리오 분석하기
          <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}
