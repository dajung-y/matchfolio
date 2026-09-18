export default function PortfolioGuide() {
  return (
    // TODO: 디자인 변경하기
    <section className="w-full max-w-3xl rounded bg-primary-extra-light px-8 py-6">
      <div>
        <p className="text-lg font-bold text-primary-medium">
          이런 내용이 포함되어 있으면 좋아요
        </p>
        <ul className="mt-2 space-y-1 text-gray-500">
          <li>프로젝트 경험 (개발한 서비스, 역할, 사용 기술 등)</li>
          <li>기술 스택 및 사용 도구</li>
          <li>경력 및 활동 내역 (인턴, 공모전 등)</li>
        </ul>
      </div>
    </section>
  );
}
