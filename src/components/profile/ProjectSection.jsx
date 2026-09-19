import { FaFolder } from "react-icons/fa";

export default function ProjectSection({ projects }) {
  return (
    <section className="w-full px-6 pt-4 pb-8 rounded-xl border border-primary-light">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-6 h-6 mr-2">
            <FaFolder className="w-full text-primary" />
          </div>
          <h2 className="text-lg font-semibold text-primary">프로젝트</h2>
        </div>
        <button
          type="button"
          className="text-sm text-primary-medium underline cursor-pointer">
          수정
        </button>
      </div>
      {/* content */}
      <div className="mt-4 flex flex-col gap-4">
        {projects.map((project) => (
          // project card
          <article
            key={project.id}
            className="px-6 py-4 rounded-lg border border-gray-200">
            {/* header */}
            <div className="flex justify-between">
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-bold text-gray-900">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {project.description}
                </p>
              </div>
              <p className="shrink-0 text-sm text-gray-400">{`${project.period.start} - ${project.period.end}`}</p>
            </div>

            {/* divider */}
            <div className="my-5 border-t border-gray-100" />

            {/* role */}
            <div>
              <h4 className="text-sm text-gray-500">담당 역할</h4>
              <p className="mt-1 text-sm text-gray-800">{project.role}</p>
            </div>

            {/* tech stack */}
            <div>
              <h4 className="mt-4 text-sm text-gray-500">사용 기술</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-primary-extra-light px-2.5 py-1 text-sm text-primary-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* feature */}
            <div className="mt-4">
              <h4 className="text-sm text-gray-500">주요 작업</h4>
              <ul className="mt-2 space-y-2 list-disc pl-4">
                {project.features.map((feat) => (
                  <li key={feat} className="text-sm text-gray-800">
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* achievement */}
            <div className="mt-4">
              {project.achievements.length > 0 && (
                <>
                  <h4 className="text-sm text-gray-500">주요 성과</h4>
                  <ul className="mt-2 space-y-2 list-disc pl-4">
                    {project.achievements.map((achieve) => (
                      <li key={achieve} className="text-sm text-gray-800">
                        {achieve}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
