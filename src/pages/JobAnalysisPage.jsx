import { useState } from "react";
import urlIcon from "../assets/icons/url64.png";

export default function JobAnalysisPage() {
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    e.preventDefault();
    // TODO: 분석 로직 구현
  };
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      {/* title */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold text-primary">
          채용공고 URL을 입력해주세요
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          AI가 채용공고의 주요 정보와 요구 스킬을 분석해
          <br />
          당신의 포트폴리오와 얼마나 잘 맞는지 알려드려요.
        </p>
      </div>

      {/* URL input */}
      <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col items-center justify-center rounded border border-dashed border-primary-light bg-primary-extra-light px-6 py-8">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary-light">
          <img src={urlIcon} alt="" className="h-10 w-10" />
        </div>

        <p className="text-center text-sm font-semibold text-primary-medium">
          채용공고 URL을 입력해주세요.
        </p>

        <p className="text-center text-sm text-gray-500">
          잡코리아의 채용공고 분석이 가능해요.
        </p>

        {/* form */}
        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-xl">
          {/* URL */}
          <div className="relative">
            <img
              src={urlIcon}
              alt=""
              className="absolute left-3 top-1/2 h-8 w-8 -translate-y-1/2 object-contain"
            />

            <input
              id="url"
              name="url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.jobkorea.co.kr/..."
              className="w-full rounded-lg border border-gray-200 bg-white py-3 pr-3 pl-12 text-sm outline-none placeholder:text-gray-400 focus:border-primary"
            />
          </div>

          {/* submit */}
          <button
            type="submit"
            disabled={!url.trim()}
            className={`mx-auto mt-4 block w-full max-w-md rounded-lg py-3 font-semibold text-white ${url ? "bg-primary hover:bg-primary-dark cursor-pointer" : "bg-gray-300"}`}>
            공고 분석하기
          </button>
        </form>
      </div>

      {/* Guide */}
      {/* TODO: 디자인 변경 */}
      <div className="mt-4 mx-auto max-w-3xl rounded bg-primary-extra-light px-6 py-8 ">
        <p className="mb-2 text-primary-medium font-semibold">
          채용공고에서 이런 내용을 분석해요
        </p>
        <ul className="text-sm text-gray-500">
          <li>담당업무 및 주요 요구사항</li>
          <li>필요한 기술 스택 및 경험</li>
          <li>우대사항 (선택)</li>
        </ul>
      </div>
    </main>
  );
}
