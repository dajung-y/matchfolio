import { useState } from "react";
import { FaUser } from "react-icons/fa";

export default function ProfileInfo({
  profile,
  education,
  certificates,
  awards,
  isEditing,
  onEdit,
  onCancel,
  onSave,
}) {
  // 변경 전 states
  const [draftProfile, setDraftProfile] = useState(profile);
  const [draftEducation, setDraftEducation] = useState(education);
  const [draftCertificates, setDraftCertificates] = useState(certificates);
  const [draftAwards, setDraftAwards] = useState(awards);

  // 수정 후 저장
  const handleSave = () => {
    onSave({
      profile: draftProfile,
      education: draftEducation,
      certificates: draftCertificates,
      awards: draftAwards,
    });
  };

  // 취소 버튼
  const handleCancel = () => {
    setDraftProfile(profile);
    setDraftEducation(education);
    setDraftCertificates(certificates);
    setDraftAwards(awards);

    onCancel();
  };

  // 학력 칸 추가
  const handleAddEducation = () => {
    const newEducation = {
      id: crypto.randomUUID(),
      school: "",
      major: "",
      period: {
        start: "",
        end: "",
      },
    };
    setDraftEducation((prev) => [...prev, newEducation]);
  };

  // 학력 칸 삭제
  const handleDeleteEducation = (id) => {
    setDraftEducation((prev) => prev.filter((edu) => edu.id !== id));
  };

  // 학력 수정 함수
  const handleEducationChange = (id, field, value) => {
    setDraftEducation((prev) =>
      prev.map((edu) =>
        edu.id === id
          ? {
              ...edu,
              [field]: value,
            }
          : edu,
      ),
    );
  };

  // 기간 수정 함수
  const handleEducationPeriodChange = (id, field, value) => {
    setDraftEducation((prev) =>
      prev.map((edu) =>
        edu.id === id
          ? {
              ...edu,
              period: {
                ...edu.period,
                [field]: value,
              },
            }
          : edu,
      ),
    );
  };

  // 자격증 칸 추가
  const handleAddCertificate = () => {
    const newCertificate = {
      id: crypto.randomUUID(),
      name: "",
      date: "",
    };
    setDraftCertificates((prev) => [...prev, newCertificate]);
  };

  // 자격증 수정
  const handleCertificateChange = (id, field, value) => {
    setDraftCertificates((prev) =>
      prev.map((cert) =>
        cert.id === id
          ? {
              ...cert,
              [field]: value,
            }
          : cert,
      ),
    );
  };

  // 자격증 삭제
  const handleDeleteCertificate = (id) => {
    setDraftCertificates((prev) => prev.filter((cert) => cert.id !== id));
  };

  // 수상 칸 추가
  const handleAddAward = () => {
    const newAward = {
      id: crypto.randomUUID(),
      name: "",
      date: "",
      description: "",
    };

    setDraftAwards((prev) => [...prev, newAward]);
  };

  // 수상 수정
  const handleAwardChange = (id, field, value) => {
    setDraftAwards((prev) =>
      prev.map((award) =>
        award.id === id
          ? {
              ...award,
              [field]: value,
            }
          : award,
      ),
    );
  };

  // 수상 삭제
  const handleDeleteAward = (id) => {
    setDraftAwards((prev) => prev.filter((award) => award.id !== id));
  };

  return (
    <section className="w-full rounded-xl border border-primary-light px-6 py-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-2 flex h-6 w-6 items-center justify-center">
            <FaUser className="w-full text-primary" />
          </div>

          <h2 className="text-lg font-semibold text-primary">기본 프로필</h2>
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
            className="text-sm text-primary-medium cursor-pointer underline">
            수정
          </button>
        )}
      </div>

      {/* profile */}
      {isEditing ? (
        // editing
        <div className="mt-5">
          <h3 className="text-sm font-semibold text-gray-800">기본 정보</h3>
          <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm text-gray-500">이름</label>
              <input
                type="text"
                value={draftProfile.name}
                onChange={(e) =>
                  setDraftProfile({
                    ...draftProfile,
                    name: e.target.value,
                  })
                }
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm text-gray-500">직무</label>
              <input
                type="text"
                value={draftProfile.position}
                onChange={(e) =>
                  setDraftProfile({
                    ...draftProfile,
                    position: e.target.value,
                  })
                }
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5">
          <p className="text-lg font-bold text-gray-900">{profile.name}</p>
          <p className="mt-1 text-sm text-gray-500">{profile.position}</p>
        </div>
      )}

      {/* Divider */}
      <div className="my-5 border-t border-gray-100" />

      {/* sub profile */}
      {isEditing ? (
        <div className="space-y-8">
          {/* education */}
          <div className="">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-800">학력</h3>
              <button
                type="button"
                onClick={handleAddEducation}
                className="text-sm text-primary-medium cursor-pointer">
                + 추가
              </button>
            </div>

            <div className="mt-3 space-y-4">
              {draftEducation.map((edu) => (
                <div key={edu.id} className="rounded-lg bg-gray-50 p-4">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleDeleteEducation(edu.id)}
                      className="cursor-pointer text-xs text-gray-500 hover:text-primary">
                      삭제
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm text-gray-500">학교명</label>
                      <input
                        type="text"
                        value={edu.school}
                        onChange={(e) =>
                          handleEducationChange(
                            edu.id,
                            "school",
                            e.target.value,
                          )
                        }
                        className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">전공</label>
                      <input
                        type="text"
                        value={edu.major}
                        onChange={(e) =>
                          handleEducationChange(edu.id, "major", e.target.value)
                        }
                        className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                    </div>

                    {/* education period */}
                    <div>
                      <label className="text-sm text-gray-500">기간</label>
                      <div className="flex gap-4 mt-1">
                        <input
                          type="month"
                          value={edu.period.start}
                          onChange={(e) =>
                            handleEducationPeriodChange(
                              edu.id,
                              "start",
                              e.target.value,
                            )
                          }
                          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
                        />
                        <span className="text-gray-500"> ~ </span>
                        <input
                          type="month"
                          value={edu.period.end}
                          onChange={(e) =>
                            handleEducationPeriodChange(
                              edu.id,
                              "end",
                              e.target.value,
                            )
                          }
                          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* cerificate */}
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm font-semibold text-gray-800">자격증</h3>
              <button
                type="button"
                onClick={handleAddCertificate}
                className="text-sm text-primary-medium cursor-pointer">
                + 추가
              </button>
            </div>
            <div className="mt-3 space-y-4">
              {draftCertificates.map((cert) => (
                <div key={cert.id} className="rounded-lg bg-gray-50 p-4">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleDeleteCertificate(cert.id)}
                      className="cursor-pointer text-xs text-gray-500 hover:text-primary">
                      삭제
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm text-gray-500">자격증명</label>
                      <input
                        type="text"
                        value={cert.name}
                        onChange={(e) =>
                          handleCertificateChange(
                            cert.id,
                            "name",
                            e.target.value,
                          )
                        }
                        className="mt-1 w-full rounded-lg border border-gray-200 bg-white text-sm px-3 py-2 outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">취득일</label>
                      <input
                        type="month"
                        value={cert.date}
                        onChange={(e) =>
                          handleCertificateChange(
                            cert.id,
                            "date",
                            e.target.value,
                          )
                        }
                        className="mt-1 w-full rounded-lg border border-gray-200 bg-white text-sm px-3 py-2 outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* award */}
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm font-semibold text-gray-800">수상</h3>
              <button
                type="button"
                onClick={handleAddAward}
                className="text-sm text-primary-medium cursor-pointer">
                + 추가
              </button>
            </div>
            <div className="mt-3 space-y-4">
              {draftAwards.map((award) => (
                <div key={award.id} className="rounded-lg bg-gray-50 p-4">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleDeleteAward(award.id)}
                      className="cursor-pointer text-xs text-gray-500 hover:text-primary">
                      삭제
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm text-gray-500">수상명</label>
                      <input
                        type="text"
                        value={award.name}
                        onChange={(e) =>
                          handleAwardChange(award.id, "name", e.target.value)
                        }
                        className="mt-1 w-full rounded-lg border border-gray-200 bg-white text-sm px-3 py-2 outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">수상일</label>
                      <input
                        type="month"
                        value={award.date}
                        onChange={(e) =>
                          handleAwardChange(award.id, "date", e.target.value)
                        }
                        className="mt-1 w-full rounded-lg border border-gray-200 bg-white text-sm px-3 py-2 outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label className="text-sm text-gray-500">설명</label>
                    <input
                      type="text"
                      value={award.description}
                      onChange={(e) =>
                        handleAwardChange(
                          award.id,
                          "description",
                          e.target.value,
                        )
                      }
                      className="mt-1 w-full rounded-lg border border-gray-200 bg-white text-sm px-3 py-2 outline-none focus:border-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Education */}
          <div>
            <h3 className="text-sm font-medium text-gray-500">학력</h3>

            <div className="mt-2 space-y-3">
              {education.map((edu) => (
                <div key={edu.id}>
                  <p className="text-sm font-semibold text-gray-800">
                    {edu.school}
                  </p>

                  <p className="mt-1 text-sm text-gray-600">{edu.major}</p>

                  <p className="mt-1 text-xs text-gray-400">
                    {edu.period.start} - {edu.period.end}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="text-sm font-medium text-gray-500">자격증</h3>

            <div className="mt-2 space-y-3">
              {certificates.map((certificate) => (
                <div key={certificate.id}>
                  <p className="text-sm font-semibold text-gray-800">
                    {certificate.name}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    {certificate.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-sm font-medium text-gray-500">수상</h3>

            <div className="mt-2 space-y-3">
              {awards.map((award) => (
                <div key={award.id}>
                  <p className="text-sm font-semibold text-gray-800">
                    {award.name}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">{award.date}</p>

                  {award.description && (
                    <p className="mt-1 text-sm text-gray-600">
                      {award.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Additional Info */}
    </section>
  );
}
