import checkIcon from "../../assets/icons/check64.png";
export default function StrengthSection({ strengthCount, strengths }) {
  return (
    <section className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      {/* header */}
      <div className="px-6 py-4 bg-green-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8">
              <img src={checkIcon} alt="checkIcon" className="w-full" />
            </div>
            <h3 className="text-xl font-semibold">잘 맞는 부분</h3>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-200 text-sm font-semibold text-gray-800">
              {strengthCount}
            </div>
          </div>
          <p className="text-sm text-gray-500">
            당신의 포트폴리오와 이 공고의 잘 맞는 부분이에요
          </p>
        </div>
      </div>

      {/* content */}
      <div className="px-6 py-4">
        {/* items */}
        <div className="space-y-2">
          {strengths.map((item) => (
            <div
              key={item.id}
              className="flex items-center px-5 py-3 rounded-lg border border-gray-200">
              <p className="min-w-1/3 text-sm font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
