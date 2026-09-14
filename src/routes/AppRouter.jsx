import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import PortfolioPage from "../pages/PortfolioPage";
import PortfolioProfilePage from "../pages/PortfolioProfilePage";
import JobAnalysisPage from "../pages/JobAnalysisPage";
import MatchingResultPage from "../pages/MatchingResultPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLaytout";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio/upload" element={<PortfolioPage />} />
        <Route path="/portfolio" element={<PortfolioProfilePage />} />
        <Route path="/job-analysis" element={<JobAnalysisPage />} />
        <Route path="/match" element={<MatchingResultPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
