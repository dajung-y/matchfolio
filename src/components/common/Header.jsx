import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  // TODO: firebase auth 연동 후 실제 로그인 상태로 변경
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // TODO: firestore 연동 후 실제 포트폴리오 존재 여부로 교체
  const [hasPortfolio, setHasPortfolio] = useState(false);

  const profilePath = hasPortfolio ? "/portfolio" : "/portfolio/upload";

  return (
    <header
      className={`fixed left-0 top-0 z-50 h-16 w-full ${
        isLoggedIn
          ? "bg-primary text-white"
          : "bg-white border-b border-gray-100 text-primary"
      }`}>
      <div className="mx-auto flex h-full max-w-7xl items-center px-8">
        {/* TODO: 로고 이미지로 대체 */}
        <Link
          to={"/"}
          className={`text-xl font-bold ${
            isLoggedIn ? "text-white" : "text-primary"
          }`}>
          Matchfolio
        </Link>

        {isLoggedIn ? (
          // 로그인 상태인 경우
          <>
            <nav className="ml-14 flex gap-10 font-normal">
              <Link to={"/job-analysis"}>채용공고 분석</Link>
              <Link to={profilePath}>내 프로필</Link>
            </nav>
            {/* TODO: 로그아웃 기능 추가 */}
            <button
              type="button"
              className="ml-auto text-sm font-normal cursor-pointer"
              onClick={() => setIsLoggedIn(false)}>
              로그아웃
            </button>
          </>
        ) : (
          // 비로그인 상태인 경우
          <nav className="ml-auto flex items-center gap-4">
            <Link
              to={"/login"}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-primary hover:bg-primary-light">
              로그인
            </Link>
            <Link
              to={"/signup"}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-primary text-white hover:bg-primary-dark">
              회원가입
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
