export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "포트폴리오 등록",
      description: "포트폴리오 파일을 업로드해주세요.",
    },
    {
      number: "02",
      title: "AI 포트폴리오 분석",
      description: "AI가 프로젝트 경험과 기술을 분석해요.",
    },
    {
      number: "03",
      title: "채용공고 분석",
      description: "지원하고 싶은 채용공고를 분석해요.",
    },
    {
      number: "04",
      title: "매칭 결과 확인",
      description: "지원 적합도와 개선 방향을 확인해요.",
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        {/* Title */}
        <div>
          <h2 className="text-2xl font-bold text-primary">HOW IT WORKS</h2>
          <p className="mt-2 text-base font-medium text-gray-500">
            Matchfolio로 나에게 맞는 채용공고를 찾아보세요.
          </p>
        </div>
        {/* steps */}
        <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-4 md:px-0">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* card */}
              <div
                className="
                relative px-6 py-8 h-full min-h-64 rounded-xl
                border border-primary-light bg-primary-extra-light shadow-sm
                ">
                {/* number badge */}
                <span
                  className="
                    absolute -left-2 -top-2
                    flex h-9 w-9 rounded-full items-center justify-center
                    bg-primary text-white text-sm font-semibold
                  ">
                  {step.number}
                </span>
                {/* content */}
                <div className="flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center">
                    icon
                  </div>
                </div>
                <h3 className="mt-4 min-h-14 text-lg text-center font-semibold text-primary break-keep">
                  {step.title}
                </h3>
                <p className="mt-2 min-h-10 text-center md:text-left text-sm text-gray-500 break-keep">
                  {step.description}
                </p>
              </div>

              {/* 화살표 */}
              {index < steps.length - 1 && (
                <span className="absolute -right-7 top-1/2 hidden -translate-y-1/2 text-primary md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
