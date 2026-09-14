// MainLayout.jsx
// 회원가입/로그인 페이지를 제외한 페이지의 레이아웃

import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
