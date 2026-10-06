import lightIcon from "../../assets/icons/light64.png";

export default function RecommendationSection({ recommendations }) {
  return (
    <section className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      {/* header */}
      <div className="px-6 py-4 bg-blue-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8">
              <img src={lightIcon} alt="lightIcon" className="w-full" />
            </div>
            <h3 className="text-xl font-semibold">AI가 제안하는 개선 방향</h3>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-200 text-sm font-semibold text-gray-800">
              {recommendations.length}
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
          {/* item */}
          {recommendations.map((item) => (
            <div
              key={item.id}
              className="flex items-center px-5 py-3 rounded-lg border border-gray-200">
              <div className="flex items-center min-w-1/3 gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-100 text-sm text-primary-medium font-semibold">
                  {item.id}
                </div>
                <p className="text-sm font-semibold">{item.title}</p>
              </div>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
