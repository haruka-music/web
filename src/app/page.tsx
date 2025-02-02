"use client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "@/app/pages/HomePage/home";
import AboutPage from "@/app/pages/AboutPage/about";
import MenuPage from "@/app/pages/MenuPage/menu";
import ContactPage from "@/app/pages/ContactPage/contact";
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
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Menu" element={<MenuPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
