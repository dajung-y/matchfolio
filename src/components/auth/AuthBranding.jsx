import { Link } from "react-router-dom";

export default function AuthBranding() {
  return (
    <aside
      className="
      relative hidden min-h-screen w-[32%]
      overflow-hidden bg-primary-light
      md:block">
      {/* link */}
      <Link to={"/"} className="absolute left-12 top-10">
        <h2 className="text-2xl font-bold text-primary">Matchfolio</h2>
      </Link>

      {/* text */}
      <div className="absolute left-12 top-1/2 -translate-y-10">
        <h1 className="text-3xl font-bold text-primary">Matchfolio</h1>
        <p className="mt-2 text-gray-500">
          포트폴리오와 채용공고를 연결하는
          <br />
          AI 취업 매칭 서비스
        </p>
      </div>

      {/* decoration */}
      <div
        className="
        absolute -bottom-32 -left-28
        h-72 w-72 rounded-full
        bg-primary"
      />

      <div
        className="
        absolute -bottom-30 left-14
        h-80 w-72 rounded-full
        bg-primary opacity-10"
      />
    </aside>
  );
}
