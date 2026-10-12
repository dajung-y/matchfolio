import { useEffect, useState } from "react";
import ExperienceSection from "../components/profile/ExperienceSection";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProjectSection from "../components/profile/ProjectSection";
import SKillSection from "../components/profile/SkillSection";

import useAuth from "../hook/useAuth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import EmptyProfile from "../components/profile/EmptyProfile";

export default function PortfolioProfilePage() {
  const { user } = useAuth();

  const [editingSection, setEditingSection] = useState(null);
  const [portfolio, setPortfolio] = useState(null);
  const [isDBLoading, setIsDBLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    // portfolio fetch 함수
    const fetchPortfolio = async () => {
      try {
        const userRef = doc(db, "users", user.uid);

        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();

          setPortfolio(data.portfolio);
        } else {
          console.log("저장된 포트폴리오 데이터가 없습니다.");
        }
      } catch (error) {
        console.error("포트폴리오 조회중 오류가 발생했습니다.", error);
      } finally {
        setIsDBLoading(false);
      }
    };
    fetchPortfolio();
  }, [user]);

  // 공통 DB 저장 함수
  const savePortfolio = async (updatedPortfolio) => {
    if (!user) return;

    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, { portfolio: updatedPortfolio }, { merge: true });

      setPortfolio(updatedPortfolio);
      return true;
    } catch (error) {
      console.error("포트폴리오 수정 저장 실패: ", error);
      return false;
    }
  };

  // 프로필 업데이트 함수
  const handleProfileSave = async (updatedData) => {
    const updatedPortfolio = {
      ...portfolio,
      profile: updatedData.profile,
      education: updatedData.education,
      certificates: updatedData.certificates,
      awards: updatedData.awards,
    };

    const success = await savePortfolio(updatedPortfolio);

    if (success) {
      setEditingSection(null);
    }
  };

  // 스킬 업데이트 함수
  const handleSkillSave = async (updatedData) => {
    const updatedPortfolio = {
      ...portfolio,
      skills: updatedData.skills,
    };

    const success = await savePortfolio(updatedPortfolio);

    if (success) {
      setEditingSection(null);
    }
  };

  // 프로젝트 업데이트 함수
  const handleProjectSave = async (updatedData) => {
    const updatedPortfolio = {
      ...portfolio,
      projects: updatedData.projects,
    };

    const success = await savePortfolio(updatedPortfolio);

    if (success) {
      setEditingSection(null);
    }
  };

  // 경험 및 활동 업데이트 함수
  const handleExperienceSave = async (updatedData) => {
    const updatedPortfolio = {
      ...portfolio,
      experiences: updatedData.experiences,
    };

    const success = await savePortfolio(updatedPortfolio);

    if (success) {
      setEditingSection(null);
    }
  };

  // TODO: skeleton UI로 변경
  if (isDBLoading) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-12">
        <p className="text-center text-sm text-gray-500">
          포트폴리오 정보를 불러오는 중...
        </p>
      </main>
    );
  }

  // 잘못된 접근
  if (!portfolio) {
    return <EmptyProfile />;
  }

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
