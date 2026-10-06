import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import checkIcon from "../../assets/icons/check64.png";
import minusIcon from "../../assets/icons/minus64.png";

export default function MatchSummary({
  job,
  summary,
  strengthCount,
  gapCount,
  matchScore,
}) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const radius = 90;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (animatedScore / 100) * circumference;

  // 애니메이션 효과
  useEffect(() => {
    setAnimatedScore(matchScore);
  }, [matchScore]);

  return (
    <section className="rounded-lg px-8 py-6 border border-primary-light bg-primary-extra-light">
      <div className="flex flex-col gap-8 md:flex-row md: items-center">
        {/* score */}
        <div className="flex items-center justify-center">
          <div className="relative w-50 h-50">
            <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
              {/* back ground */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="14"
              />
              {/* score */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="#3D4CEE"
                strokeWidth="14"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                className="transition-all duration-500 ease-out"
              />
            </svg>

            {/* text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-medium">
                {matchScore}%
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-300 md:h-auto md:self-stretch md:w-px " />

        {/* 요약 정보 */}
        <div className="min-w-0 flex-1">
          {/* summary */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary tracking-tight">
              {summary.title}
            </h3>
            <p className="text-sm text-gray-500">{summary.description}</p>
          </div>

          {/* company */}
          <div className="mt-4 rounded-lg bg-white px-6 py-4">
            <div className="mb-2 flex justify-between">
              <p className="text-sm text-gray-500">{job.company}</p>
              <Link
                to={job.sourceUrl}
                className="text-sm font-semibold text-primary">
                원본 채용공고 보기
              </Link>
            </div>
            <p className="text-primary font-semibold">{job.position}</p>
          </div>

          {/* s/w */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center rounded-lg border border-green-300 bg-green-50 px-6 py-4">
              <div className="flex items-center justify-center mr-4 w-12 h-12 shrink-0 rounded-full bg-green-200">
                <img src={checkIcon} alt="checkIcon" className="w-8 h-8" />
              </div>
              <div className="flex flex-col space-y-1">
                <p className="font-semibold text-primary">
                  강점 {strengthCount}개
                </p>
                <p className="text-sm text-gray-500">잘 맞는 역량</p>
              </div>
            </div>
            <div className="flex items-center rounded-lg border border-orange-300 bg-orange-50 px-6 py-4">
              <div className="flex items-center justify-center mr-4 w-12 h-12 shrink-0 rounded-full bg-orange-200">
                <img src={minusIcon} alt="minusIcon" className="w-8 h-8" />
              </div>
              <div className="flex flex-col space-y-1">
                <p className="font-semibold text-primary">
                  보완 필요 {gapCount}개
                </p>
                <p className="text-sm text-gray-500">추가로 보완하면 좋아요</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
