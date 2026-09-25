import { useState } from "react";
import { FaFolder } from "react-icons/fa";

import deleteIcon from "../../assets/icons/delete64.png";
export default function ProjectSection({
  projects,
  isEditing,
  onEdit,
  onCancel,
  onSave,
}) {
  // state
  const [draftProjects, setDraftProjects] = useState(projects);
  const [newTech, setNewTech] = useState({});
  const [projectTexts, setProjectTexts] = useState({});

  // text 배열 변환
  const textToList = (text) => {
    return text
      .split("\n")
      .map((line) => line.replace(/^-\s*/, "").trim())
      .filter(Boolean);
  };

  // 수정 버튼
  const handleEdit = () => {
    const initialTexts = Object.fromEntries(
      projects.map((project) => [
        project.id,
        {
          features: project.features
            .map((feature) => `- ${feature}`)
            .join("\n"),

          achievements: project.achievements
            .map((achievement) => `- ${achievement}`)
            .join("\n"),
        },
      ]),
    );

    setDraftProjects(projects);
    setProjectTexts(initialTexts);

    onEdit();
  };

  // 취소 버튼
  const handleCancel = () => {
    setDraftProjects(projects);
    setProjectTexts({});
    setNewTech({});
    onCancel();
  };

  // 저장 버튼
  const handleSave = () => {
    const updatedProject = draftProjects.map((project) => ({
      ...project,

      features: textToList(projectTexts[project.id]?.features ?? ""),
      achievements: textToList(projectTexts[project.id]?.achievements ?? ""),
    }));
    onSave({ projects: updatedProject });
  };

  // 삭제 버튼
  const handleDeleteProject = (id) => {
    setDraftProjects((prev) => prev.filter((project) => project.id !== id));
  };

  // 프로젝트 추가
  const handleAddProject = () => {
    const newProject = {
      id: crypto.randomUUID(),
      name: "",
      description: "",
      period: {
        start: "",
        end: "",
      },
      role: "",
      techStack: [],
      features: [],
      achievements: [],
    };

    setDraftProjects((prev) => [...prev, newProject]);

    setProjectTexts((prev) => ({
      ...prev,
      [newProject.id]: {
        features: "",
        achievements: "",
      },
    }));
  };

  // 기술 삭제
  const handleDeleteTech = (projectId, techToDelete) => {
    setDraftProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? {
              ...project,
              techStack: project.techStack.filter(
                (tech) => tech !== techToDelete,
              ),
            }
          : project,
      ),
    );
  };

  // 기술 추가
  const handleAddTech = (projectId) => {
    const tech = newTech[projectId]?.trim();

    if (!tech) return;

    setDraftProjects((prev) =>
      prev.map((project) => {
        if (project.id !== projectId) return project;

        const isDuplicate = project.techStack.some(
          (item) => item.toLowerCase() === tech.toLowerCase(),
        );

        if (isDuplicate) return project;
        return {
          ...project,
          techStack: [...project.techStack, tech],
        };
      }),
    );

    setNewTech((prev) => ({
      ...prev,
      [projectId]: "",
    }));
  };

  // 프로젝트 수정
  const handleProjectChange = (projectId, field, value) => {
    setDraftProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? {
              ...project,
              [field]: value,
            }
          : project,
      ),
    );
  };

  // 프로젝트 기간 수정
  const handlePeriodChange = (projectId, field, value) => {
    setDraftProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? {
              ...project,
              period: {
                ...project.period,
                [field]: value,
              },
            }
          : project,
      ),
    );
  };

  return (
    <section className="w-full px-6 pt-4 pb-8 rounded-xl border border-primary-light">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center">
            <FaFolder className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-lg font-semibold text-primary">프로젝트</h2>
        </div>

        {isEditing ? (
          <div className="flex items-center gap-3">
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
            className="text-sm text-primary-medium underline cursor-pointer">
            수정
          </button>
        )}
      </div>

      {isEditing ? (
        <>
          <div className="flex flex-col space-y-6">
            <div className="mt-2 flex justify-end">
              <button
                type="button"
                onClick={handleAddProject}
                className="text-sm text-primary-medium cursor-pointer">
                + 추가
              </button>
            </div>
          </div>
          {draftProjects.map((project) => (
            <article
              key={project.id}
              className="mt-4 rounded-lg border border-gray-200 px-6 py-5">
              {/* 삭제 */}
              <div className="mb-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => handleDeleteProject(project.id)}
                  className="cursor-pointer text-sm text-red-500">
                  삭제
                </button>
              </div>
              {/* 프로젝트 기본정보 */}
              <div className="mt-2 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="mb-1.5 block text-sm text-gray-700">
                      프로젝트 명
                    </label>
                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) =>
                        handleProjectChange(project.id, "name", e.target.value)
                      }
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-gray-700">
                      기간
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="month"
                        value={project.period.start}
                        onChange={(e) =>
                          handlePeriodChange(
                            project.id,
                            "start",
                            e.target.value,
                          )
                        }
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                      <span className="shrink-0 text-sm text-gray-500">~</span>
                      <input
                        type="month"
                        value={project.period.end}
                        onChange={(e) =>
                          handlePeriodChange(project.id, "end", e.target.value)
                        }
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-gray-700">
                    설명
                  </label>
                  <input
                    type="text"
                    value={project.description}
                    onChange={(e) =>
                      handleProjectChange(
                        project.id,
                        "description",
                        e.target.value,
                      )
                    }
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-gray-700">
                    담당 역할
                  </label>
                  <input
                    type="text"
                    value={project.role}
                    onChange={(e) =>
                      handleProjectChange(project.id, "role", e.target.value)
                    }
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* tech */}
              <div className="mt-6">
                <label className="mb-1.5 block text-sm text-gray-700">
                  사용 기술
                </label>
                {/* tech list */}
                <div className="mt-3 flex gap-2">
                  {project.techStack.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 rounded-md bg-primary-extra-light px-2.5 py-1">
                      <span className="text-sm text-primary-medium">
                        {tech}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleDeleteTech(project.id, tech)}
                        className="cursor-pointer">
                        <img src={deleteIcon} alt="" className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
                {/* add tech */}
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    value={newTech[project.id] || ""}
                    onChange={(e) =>
                      setNewTech((prev) => ({
                        ...prev,
                        [project.id]: e.target.value,
                      }))
                    }
                    placeholder="추가할 기술을 입력하세요"
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                  <button
                    type="button"
                    onClick={() => handleAddTech(project.id)}
                    className="shrink-0 bg-primary rounded-lg px-4 py-2 text-sm font-semibold text-white">
                    추가
                  </button>
                </div>
              </div>
              {/* feature */}
              <div className="mt-6">
                <label className="mb-1.5 block text-sm text-gray-700">
                  주요 작업
                </label>
                <textarea
                  rows={5}
                  value={projectTexts[project.id]?.features ?? ""}
                  onChange={(e) =>
                    setProjectTexts((prev) => ({
                      ...prev,
                      [project.id]: {
                        ...prev[project.id],
                        features: e.target.value,
                      },
                    }))
                  }
                  placeholder="- 프로젝트에서 수행한 주요 작업을 입력하세요"
                  className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm leading-6 outline-none focus:border-primary"
                />
              </div>
              {/* achievement */}
              <div className="mt-6">
                <label className="mb-1.5 block text-sm text-gray-700">
                  주요 성과
                </label>
                <textarea
                  rows={4}
                  value={projectTexts[project.id]?.achievements ?? ""}
                  onChange={(e) =>
                    setProjectTexts((prev) => ({
                      ...prev,
                      [project.id]: {
                        ...prev[project.id],
                        achievements: e.target.value,
                      },
                    }))
                  }
                  placeholder="- 프로젝트에서 수행한 주요 성과를 입력하세요"
                  className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm leading-6 outline-none focus:border-primary"
                />
              </div>
            </article>
          ))}
        </>
      ) : (
        <>
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
        </>
      )}
    </section>
  );
}
