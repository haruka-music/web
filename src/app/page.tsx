"use client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "@/app/pages/HomePage/home";
import LoginPage from "@/app/pages/LoginPage/login";
import Header from "@/app/components/layouts/header/header";
import Footer from "@/app/components/layouts/footer/footer";
import Sidebar from "@/app/components/layouts/sidebar/sidbar";

export default function Home() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Home" element={<HomePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
