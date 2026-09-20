import { MdWork } from "react-icons/md";

export default function ExperienceSection({ experiences }) {
  return (
    <section className="rounded-xl border border-primary-light w-full px-6 py-4">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <MdWork className="w-5 h-5 mr-2 text-primary" />
          <h2 className="text-lg font-semibold text-primary">경험 및 활동</h2>
        </div>
        {/* TODO: 수정 로직 구현 */}
        <button
          type="button"
          className="text-sm text-primary-medium cursor-pointer underline">
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
