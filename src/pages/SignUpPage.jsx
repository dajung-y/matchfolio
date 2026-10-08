import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

import AuthContainer from "../components/auth/AuthContainer";

import emailIcon from "../assets/icons/email64.png";
import lockIcon from "../assets/icons/lock64.png";
import AuthButton from "../components/auth/AuthButton";
import { useState } from "react";
export default function SignUpPage() {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // 비밀번호 유효성 검사
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  // TODO: 회원가입 폼 제출 구현
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!validatePassword(password)) {
      setError("비밀번호는 영문과 숫자를 포함한 8자리 이상이어야 합니다.");
      return;
    }

    if (password !== confirmPassword) {
      console.log("비밀번호가 일치하지 않습니다.");
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      console.log("회원가입 성공", userCredential.user.email);

      await sendEmailVerification(userCredential.user);

      console.log("인증 메일 발송 요청 성공");

      setSuccess("회원가입이 완료되었습니다. 이메일 인증을 해주세요.");
    } catch (error) {
      console.error("firebase오류: ", error.code, error.message);

      if (error.code === "auth/email-already-in-use") {
        setError("이미 가입된 이메일입니다.");
      } else {
        setError("회원가입 중 오류가 발생했습니다.");
      }
    }
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-2 pl-10 py-2 rounded border border-gray-200 text-sm placeholder:text-gray-500 placeholder:font-semibold outline-none focus:border-primary-medium"
              placeholder="비밀번호 확인"
            />
          </div>

          {/* signupBt */}
          <div className="mt-2">
            {error && (
              <p className="mb-2 text-sm text-red-500 text-center">{error}</p>
            )}
            {success && (
              <p className="mb-2 text-sm text-green-500 text-center">
                {success}
              </p>
            )}
            {!success && <AuthButton title={"회원가입"} />}
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
