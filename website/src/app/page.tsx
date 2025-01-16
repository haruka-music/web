"use client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "@/app/pages/HomePage/home";
import Header from "./components/layouts/header/header";
import Footer from "./components/layouts/footer/footer";

export default function Home() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Sidebar /> */}

        <Routes>
          <Route path="/Home" element={<HomePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
