import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import FAQ from "./pages/FAQ";

import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpg";

function BannerWrapper() {
  const { pathname } = useLocation();
  const map = {
    "/": { title: "Naslovnica", image: image1 },
    "/about": { title: "O nama", image: image2 },
    "/contact": { title: "Kontakt", image: image3 },
    "/categories": { title: "Kategorije", image: image4 },
    "/tours": { title: "Izleti", image: image5 },
    "/faq": { title: "F.A.Q.", image: image2 },
  };
  const isDetails = pathname.startsWith("/tours/");
  const conf = isDetails
    ? {
        title: "Detalji izleta",
        image: "https://placehold.co/1600x320?text=Detalji+izleta",
      }
    : map[pathname] || map["/"];
  return <Banner title={conf.title} image={conf.image} />;
}

function App() {
  return (
    <div className="app">
      <Header />
      <BannerWrapper />
      <main className="main container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<TourDetails />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
