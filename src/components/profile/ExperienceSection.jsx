import { useState } from "react";
import { MdWork } from "react-icons/md";

export default function ExperienceSection({
  experiences,
  isEditing,
  onEdit,
  onCancel,
  onSave,
}) {
  // states
  const [draftExperiences, setDraftExperiences] = useState(experiences);

  // 수정 함수
  const handleEdit = () => {
    setDraftExperiences(experiences);
    onEdit();
  };
  // 저장 함수
  const handleSave = () => {
    onSave({
      experiences: draftExperiences,
    });
  };

  // 취소 함수
  const handleCancel = () => {
    setDraftExperiences(experiences);
    onCancel();
  };

  // 경험 추가 함수
  const handleAddExperience = () => {
    const newExperience = {
      id: crypto.randomUUID(),
      name: "",
      period: {
        start: "",
        end: "",
      },
      description: "",
    };
    setDraftExperiences((prev) => [...prev, newExperience]);
  };

  // 경험 삭제 함수
  const handleDeleteExperience = (id) => {
    setDraftExperiences((prev) =>
      prev.filter((experience) => experience.id !== id),
    );
  };

  // 경험 수정 함수
  const handleExperienceChange = (experienceId, field, value) => {
    setDraftExperiences((prev) =>
      prev.map((experience) =>
        experience.id === experienceId
          ? {
              ...experience,
              [field]: value,
            }
          : experience,
      ),
    );
  };

  // 경험 기간 수정 함수
  const handlePeriodChange = (experienceId, field, value) => {
    setDraftExperiences((prev) =>
      prev.map((experience) =>
        experience.id === experienceId
          ? {
              ...experience,
              period: {
                ...experience.period,
                [field]: value,
              },
            }
          : experience,
      ),
    );
  };

  return (
    <section className="w-full px-6 py-4 rounded-xl border border-primary-light">
      {/* header */}
      <div className="flex items-center justify-between">
        {/* 왼쪽: 아이콘 + 제목 */}
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center">
            <MdWork className="h-5 w-5 text-primary" />
          </div>

          <h2 className="text-lg font-semibold text-primary">경험 및 활동</h2>
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
            onClick={handleEdit}
            className="cursor-pointer text-sm text-primary-medium underline">
            수정
          </button>
        )}
      </div>

      {/* 수정 */}
      {isEditing ? (
        <div className="mt-4">
          {/* 추가 */}
          <div className="mt-2 flex justify-end">
            <button
              type="button"
              onClick={handleAddExperience}
              className="text-sm text-primary-medium cursor-pointer">
              + 추가
            </button>
          </div>
          {draftExperiences.map((experience) => (
            <div key={experience.id}>
              <article className="mt-4 rounded-lg bg-gray-50 p-4">
                <div className="mb-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleDeleteExperience(experience.id)}
                    className="cursor-pointer text-sm text-red-500">
                    삭제
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-sm text-gray-700">
                      활동명
                    </label>
                    <input
                      type="text"
                      value={experience.name}
                      onChange={(e) =>
                        handleExperienceChange(
                          experience.id,
                          "name",
                          e.target.value,
                        )
                      }
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-gray-700">
                      기간
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="month"
                        value={experience.period.start}
                        onChange={(e) =>
                          handlePeriodChange(
                            experience.id,
                            "start",
                            e.target.value,
                          )
                        }
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                      <span className="shrink-0 text-gray-500">~</span>
                      <input
                        type="month"
                        value={experience.period.end}
                        onChange={(e) =>
                          handlePeriodChange(
                            experience.id,
                            "end",
                            e.target.value,
                          )
                        }
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-1.5 block text-sm text-gray-700">
                    설명
                  </label>
                  <input
                    type="text"
                    value={experience.description}
                    onChange={(e) =>
                      handleExperienceChange(
                        experience.id,
                        "description",
                        e.target.value,
                      )
                    }
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
              </article>
            </div>
          ))}
        </div>
      ) : (
        // 기존 내용
        <div className="mt-4 divide-y divide-gray-100">
          {experiences.map((experience) => (
            <div key={experience.id} className="mt-2 flex flex-col">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-gray-800">
                  {experience.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {experience.period.start.replace("-", ".")} -{" "}
                  {experience.period.end.replace("-", ".")}
                </p>
              </div>
              <p className="mt-1 pb-4 text-sm text-gray-700">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
