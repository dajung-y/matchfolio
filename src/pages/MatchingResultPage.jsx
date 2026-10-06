import { Link } from "react-router-dom";
import { mockJob } from "../data/mockJob.js";
import { mockMatchResult } from "../data/mockMatchResult.js";
import MatchSummary from "../components/matching/MatchSummary.jsx";
import StrengthSection from "../components/matching/StrengthSection.jsx";

export default function MatchingResultPage() {
  const handleDownload = () => {
    // TODO: PDF 다운로드 기능 추가
    console.log("PDF 다운로드");
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      {/* match title */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* title */}
        <div>
          <h1 className="text-2xl font-bold text-primary">
            분석이 완료되었습니다
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            당신의 포트폴리오와 채용공고를 분석한 결과에요.
          </p>
        </div>
        {/* button */}
        <div className="flex gap-2 md:items-end md:justify-end ">
          <button
            type="button"
            onClick={handleDownload}
            className="flex-1 md:flex-none rounded-lg border border-primary bg-white text-sm text-primary px-4 py-2">
            결과 다운로드
          </button>
          <Link
            to={"/job-analysis"}
            className="flex-1 md:flex-none rounded-lg border border-primary bg-primary text-center text-sm text-white px-4 py-2 ">
            다른 공고 분석하기
          </Link>
        </div>
      </div>

      {/* Match Summary */}
      <div className="mt-6">
        <MatchSummary
          job={mockJob}
          summary={mockMatchResult.summary}
          strengthCount={mockMatchResult.strengths.length}
          gapCount={mockMatchResult.gaps.length}
          matchScore={mockMatchResult.matchScore}
        />
      </div>

      {/* strength section */}
      <div className="mt-6">
        <StrengthSection
          strengthCount={mockMatchResult.strengths.length}
          strengths={mockMatchResult.strengths}
        />
      </div>
    </main>
  );
}
