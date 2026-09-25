import { MdWork } from "react-icons/md";

export default function ExperienceSection({ experiences }) {
  return (
    <section className="w-full px-6 pt-4 pb-8 rounded-xl border border-primary-light">
      {/* header */}
      <div className="flex items-center justify-between">
        {/* 왼쪽: 아이콘 + 제목 */}
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center">
            <MdWork className="h-5 w-5 text-primary" />
          </div>

          <h2 className="text-lg font-semibold text-primary">경험 및 활동</h2>
        </div>

        {/* 오른쪽: 수정 */}
        <button
          type="button"
          className="cursor-pointer text-sm text-primary-medium underline">
          수정
        </button>
      </div>

      {/* content */}
      <div className="mt-4 divide-y divide-gray-100">
        {experiences.map((experience) => (
          <div key={experience.id} className="mt-2 flex flex-col">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-semibold text-gray-800">
                {experience.name}
              </h4>
              <p className="text-sm text-gray-500">
                {experience.period.start} - {experience.period.end}
              </p>
            </div>
            <p className="mt-1 pb-4 text-sm text-gray-700">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
