import ExperienceSection from "../components/profile/ExperienceSection";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProjectSection from "../components/profile/ProjectSection";
import SKillSection from "../components/profile/SkillSection";

import mockPortfolio from "../data/mockPortfolio";

export default function PortfolioProfilePage() {
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
          profile={mockPortfolio.profile}
          education={mockPortfolio.education}
          certificates={mockPortfolio.certificates}
          awards={mockPortfolio.awards}
        />
      </div>

      {/* 기술 스택 */}
      <div className="mt-4">
        <SKillSection skills={mockPortfolio.skills} />
      </div>

      {/* 프로젝트 */}
      <div className="mt-4">
        <ProjectSection projects={mockPortfolio.projects} />
      </div>

      {/* 경험 */}
      {mockPortfolio.experiences.length > 0 && (
        <div className="mt-4">
          <ExperienceSection experiences={mockPortfolio.experiences} />
        </div>
      )}
    </main>
  );
}
