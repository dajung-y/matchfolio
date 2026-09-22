import { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import deleteIcon from "../../assets/icons/delete64.png";

export default function SKillSection({
  skills,
  isEditing,
  onEdit,
  onCancel,
  onSave,
}) {
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

  // state
  const [draftSkills, setDraftSkills] = useState(skills);
  const [newSkill, setNewSkill] = useState("");

  // 수정 후 저장
  const handleSave = () => {
    onSave({
      skills: draftSkills,
    });
  };

  // 취소
  const handleCancel = () => {
    setDraftSkills(skills);
    setNewSkill("");
    onCancel();
  };

  // 삭제 함수
  const handleDeleteSkill = (skillToDelete) => {
    setDraftSkills((prev) => prev.filter((skill) => skill !== skillToDelete));
  };

  // 추가 함수
  const handleAddSkill = () => {
    const trimmedSkill = newSkill.trim();

    if (!trimmedSkill) return;

    if (draftSkills.includes(trimmedSkill)) return;

    setDraftSkills((prev) => [...prev, trimmedSkill]);

    setNewSkill("");
  };

  return (
    <section className="rounded-xl border border-primary-light w-full px-6 py-4">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-6 h-6 mr-1">
            <IoSettingsSharp className="w-full text-primary" />
          </div>
          <h2 className="text-lg font-semibold text-primary">기술 스택</h2>
        </div>

        {isEditing ? (
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="text-sm text-gray-500 cursor-pointer">
              취소
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="text-sm text-primary-medium cursor-pointer">
              저장
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onEdit}
            className="text-sm underline text-primary-medium cursor-pointer">
            수정
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {draftSkills.map((skill) => {
              const iconClass = skillIcons[skill];

              return (
                <div
                  key={skill}
                  className="flex items-center gap-2 rounded-lg bg-primary-extra-light px-2 py-2">
                  {iconClass && <i className={`${iconClass} text-lg`} />}
                  <span className="text-sm font-semibold text-gray-900">
                    {skill}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleDeleteSkill(skill)}
                    className="cursor-pointer"
                    aria-label={`${skill} 삭제`}>
                    <img src={deleteIcon} className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
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
      )}
    </section>
  );
}
