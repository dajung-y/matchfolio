import { useState } from "react";
import ExperienceSection from "../components/profile/ExperienceSection";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProjectSection from "../components/profile/ProjectSection";
import SKillSection from "../components/profile/SkillSection";

import mockPortfolio from "../data/mockPortfolio";
import useAuth from "../hook/useAuth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function PortfolioProfilePage() {
  const { user } = useAuth();

  const [editingSection, setEditingSection] = useState(null);
  const [portfolio, setPortfolio] = useState(mockPortfolio);

  console.log("회원정보: ", user.email);

  // 프로필 firestore 저장 함수
  const handleFirestoreSave = async () => {
    if (!user) return;

    try {
      const userRef = doc(db, "users", user.uid);

      console.log("저장위치: ", userRef);

      await setDoc(userRef, {
        email: user.email,
        portfolio: portfolio,
      });
      console.log("포트폴리오 저장 성공");
    } catch (error) {
      console.error("포트폴리오 저장 실패");
    }
  };

  // portfolio firestore db 조회 함수
  const handleFirestoreGet = async () => {
    if (!user) return;

    try {
      const userRef = doc(db, "users", user.uid);

      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const data = userSnap.data();

        setPortfolio(data.portfolio);

        console.log("포트폴리오 데이터 조회 성공", data.portfolio);
      } else {
        console.log("저장된 포트폴리오가 없습니다.");
      }
    } catch (error) {
      console.error("포트폴리오 데이터 조회 실패", error);
    }
  };

  // 프로필 업데이트 함수
  const handleProfileSave = (updatedData) => {
    setPortfolio((prev) => ({
      ...prev,
      profile: updatedData.profile,
      education: updatedData.education,
      certificates: updatedData.certificates,
      awards: updatedData.awards,
    }));
    setEditingSection(null);
  };

  // 스킬 업데이트 함수
  const handleSkillSave = (updatedData) => {
    setPortfolio((prev) => ({
      ...prev,
      skills: updatedData.skills,
    }));
    setEditingSection(null);
  };

  // 프로젝트 업데이트 함수
  const handleProjectSave = (updatedData) => {
    setPortfolio((prev) => ({
      ...prev,
      projects: updatedData.projects,
    }));
    setEditingSection(null);
  };

  // 경험 및 활동 업데이트 함수
  const handleExperienceSave = (updatedData) => {
    setPortfolio((prev) => ({
      ...prev,
      experiences: updatedData.experiences,
    }));
    setEditingSection(null);
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      {/* page header */}
      <header>
        <h1 className="text-2xl font-bold text-primary">
          내 포트폴리오 프로필
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          AI가 분석한 포트폴리오 정보를 확인하고 관리할 수 있어요.
        </p>
      </header>

      {/* firestore 저장 확인 임시 버튼 */}
      <div className="flex gap-4 my-2">
        <button
          onClick={handleFirestoreSave}
          className="rounded px-4 py-2 bg-green-500 text-white">
          포트폴리오 임시 저장버튼
        </button>
        <button
          onClick={handleFirestoreGet}
          className="rounded px-4 py-2 bg-orange-500 text-white">
          포트폴리오 임시 조회버튼
        </button>
      </div>

      {/* 기본정보 */}
      <div className="mt-4">
        <ProfileInfo
          profile={portfolio.profile}
          education={portfolio.education}
          certificates={portfolio.certificates}
          awards={portfolio.awards}
          isEditing={editingSection === "profile"}
          onEdit={() => setEditingSection("profile")}
          onCancel={() => setEditingSection(null)}
          onSave={handleProfileSave}
        />
      </div>

      {/* 기술 스택 */}
      <div className="mt-4">
        <SKillSection
          skills={portfolio.skills}
          isEditing={editingSection === "skills"}
          onEdit={() => setEditingSection("skills")}
          onCancel={() => setEditingSection(null)}
          onSave={handleSkillSave}
        />
      </div>

      {/* 프로젝트 */}
      <div className="mt-4">
        <ProjectSection
          projects={portfolio.projects}
          isEditing={editingSection === "projects"}
          onEdit={() => setEditingSection("projects")}
          onCancel={() => setEditingSection(null)}
          onSave={handleProjectSave}
        />
      </div>

      {/* 경험 */}
      {portfolio.experiences.length > 0 && (
        <div className="mt-4">
          <ExperienceSection
            experiences={portfolio.experiences}
            isEditing={editingSection === "experiences"}
            onEdit={() => setEditingSection("experiences")}
            onCancel={() => setEditingSection(null)}
            onSave={handleExperienceSave}
          />
        </div>
      )}
    </main>
  );
}
