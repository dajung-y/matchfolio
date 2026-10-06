import minusIcon from "../../assets/icons/minus64.png";

export default function GapSection({ gapCount, gaps }) {
  return (
    <section className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      {/* header */}
      <div className="px-6 py-4 bg-orange-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8">
              <img src={minusIcon} alt="minusIcon" className="w-full" />
            </div>
            <h3 className="text-xl font-semibold">보완이 필요한 부분</h3>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-200 text-sm font-semibold text-gray-800">
              {gapCount}
            </div>
          </div>
          <p className="text-sm text-gray-500">
            이런 부분을 보완하면 더 좋은 결과를 얻을 수 있어요
          </p>
        </div>
      </div>

      {/* content */}
      <div className="px-6 py-4">
        <div className="space-y-2">
          {/* items */}
          {gaps.map((item) => (
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
