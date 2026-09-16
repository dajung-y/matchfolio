import { useState } from "react";
import PortfolioUploader from "../components/portfolio/PortfolioUploader";
import PortfolioGuide from "../components/portfolio/PortfolioGuide";

export default function PortfolioPage() {
  // portfolio file
  const [file, setFile] = useState(null);

  // 파일 선택
  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
  };

  // 파일 삭제
  const handleFileRemove = (selectedFile) => {
    setFile(null);
  };

  const handleClick = () => {
    alert("분석하기");
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      {/* title */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-primary">
          포트폴리오를 등록해주세요
        </h1>
        <p className="mt-2 text-sm text-gray-500 leading-tight">
          AI가 당신의 포트폴리오의 프로젝트 경험과 기술을 분석해요.
        </p>
      </div>

      {/* portfolio upload */}
      <div className="flex mt-8 justify-center">
        <PortfolioUploader
          file={file}
          onFileSelect={handleFileSelect}
          onFileRemove={handleFileRemove}
        />
      </div>

      {/* 분석하기 */}
      {/* TODO: API 추가 */}
      <div className="mt-4 mx-auto max-w-md flex flex-col">
        <button
          onClick={handleClick}
          className="mb-2 rounded-lg px-20 py-3 bg-primary font-semibold text-white cursor-pointer">
          분석 시작하기
        </button>
        <p className="text-center text-sm text-gray-500">
          업로드한 포트폴리오는 안전하게 분석되며 AI 분석 후 결과 화면으로
          이동합니다.
        </p>
      </div>

      {/* guide */}
      <div className="flex mt-4 justify-center">
        <PortfolioGuide />
      </div>
    </main>
  );
}
