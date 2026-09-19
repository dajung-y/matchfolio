export default function SKillSection({ skills }) {
  const skillIcons = {
    // language
    JavaScript: "devicon-javascript-plain colored",
    TypeScript: "devicon-typescript-plain colored",
    Java: "devicon-java-plain colored",
    Python: "devicon-python-plain colored",

    // front end
    React: "devicon-react-original colored",
    "Next.js": "devicon-nextjs-plain",
    Vue: "devicon-vuejs-plain colored",
    HTML: "devicon-html5-plain colored",
    CSS: "devicon-css3-plain colored",
    "Tailwind CSS": "devicon-tailwindcss-original colored",

    // back end
    "Node.js": "devicon-nodejs-plain colored",
    "Spring Boot": "devicon-spring-original colored",

    // database
    MongoDB: "devicon-mongodb-plain colored",
    Firebase: "devicon-firebase-plain colored",

    // tool
    Git: "devicon-git-plain colored",
    Figma: "devicon-figma-plain colored",
  };
  return (
    <section className="rounded-xl border border-primary-light w-full px-6 py-4">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="rounded-full w-4 h-4 mr-2 bg-primary-light"></div>
          <h2 className="text-lg font-semibold text-primary-medium">
            기술 스택
          </h2>
        </div>
        {/* TODO: 수정 기능 추가 */}
        <button
          type="button"
          className="text-sm underline text-primary-medium cursor-pointer">
          수정
        </button>
      </div>
      {/* content */}
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => {
          const iconClass = skillIcons[skill];

          return (
            <div
              key={skill}
              className="flex items-center gap-2 rounded-lg bg-primary-extra-light px-4 py-2">
              {iconClass && <i className={`${skillIcons[skill]} text-lg`} />}
              <span className="text-sm font-semibold text-gray-900">
                {skill}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
