import { Link } from "react-router-dom";
import profileIcon from "../../assets/icons/profile64.png";
export default function EmptyProfile() {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] mx-auto max-w-5xl px-6 py-12">
      {/* container */}
      <div className="w-full max-w-3xl px-8 py-12 rounded bg-primary-extra-light">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-center justify-center w-24 h-24 rounded-full bg-primary-light">
            <img src={profileIcon} alt="profileIcon" className="w-20 h-20" />
          </div>
          <h3 className="text-2xl font-bold text-primary">
            등록된 프로필이 없습니다.
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            포트폴리오를 등록하면 AI가 분석해서
            <br />
            프로필을 생성해드려요.
          </p>
          <Link
            to={"/portfolio/upload"}
            className="mt-6 rounded-lg bg-primary font-semibold text-white px-16 py-3 cursor-pointer">
            프로필 등록하러 가기
          </Link>
        </div>
      </div>
    </main>
  );
}
