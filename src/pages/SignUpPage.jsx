import { Link } from "react-router-dom";

import AuthContainer from "../components/auth/AuthContainer";

import emailIcon from "../assets/icons/email64.png";
import lockIcon from "../assets/icons/lock64.png";
import AuthButton from "../components/auth/AuthButton";
export default function SignUpPage() {
  // TODO: 회원가입 폼 제출 구현
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main>
      <AuthContainer>
        {/* title */}
        <div>
          <h2 className="text-xl font-semibold text-primary">회원가입</h2>
          <p className="mt-4 text-sm text-gray-500">지금 바로 시작해보세요.</p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {/* email */}
          <div className="relative">
            <img
              src={emailIcon}
              alt=""
              className="absolute left-2 top-1/2 -translate-y-1/2 h-6 w-6 object-contain"
            />
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-2 pl-10 py-2 rounded border border-gray-200 text-sm placeholder:text-gray-500 placeholder:font-semibold outline-none focus:border-primary-medium"
              placeholder="이메일"
            />
          </div>

          {/* password */}
          <div className="relative">
            <img
              src={lockIcon}
              alt=""
              className="absolute left-2 top-1/2 -translate-y-1/2 h-6 w-6 object-contain"
            />
            <input
              id="password"
              name="password"
              type="password"
              className="w-full px-2 pl-10 py-2 rounded border border-gray-200 text-sm placeholder:text-gray-500 placeholder:font-semibold outline-none focus:border-primary-medium"
              placeholder="비밀번호"
            />
          </div>

          {/* confirm */}
          <div className="relative">
            <img
              src={lockIcon}
              alt=""
              className="absolute left-2 top-1/2 -translate-y-1/2 h-6 w-6 object-contain"
            />
            <input
              id="confirm"
              name="confirm"
              type="password"
              className="w-full px-2 pl-10 py-2 rounded border border-gray-200 text-sm placeholder:text-gray-500 placeholder:font-semibold outline-none focus:border-primary-medium"
              placeholder="비밀번호 확인"
            />
          </div>

          {/* signupBt */}
          <div className="mt-2">
            <AuthButton title={"회원가입"} />
          </div>
        </form>

        {/* info */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <p className="text-sm text-gray-500">계정이 이미 있으신가요?</p>
          <Link to={"/login"} className="underline text-sm text-primary">
            로그인
          </Link>
        </div>
      </AuthContainer>
    </main>
  );
}
