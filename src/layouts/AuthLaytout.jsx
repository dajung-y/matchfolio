import { Outlet } from "react-router-dom";
import AuthBranding from "../components/auth/AuthBranding";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen">
      <AuthBranding />
      <main className="flex flex-1 items-center justify-center px-6 bg-primary-extra-light">
        <Outlet />
      </main>
    </div>
  );
}
