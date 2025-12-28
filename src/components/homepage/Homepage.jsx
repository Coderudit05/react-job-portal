import React from "react";
import Navbar from "./hero/Navbar";
import Middle_hero from "./hero/Middle_hero";
import Bottom_hero from "./hero/Bottom_hero";
import Jobs from "./homepage_jobs/Jobs_Homepage";
import Category from "./category/Category";
import Info from "./info_box/Info";
import Banner from "./banner/Banner";
import Testimonials from "./testimonials/Testimonials";

import Footer from "./footer/Footer";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      {/* Hero Section Wrapper */}
      <div className="relative min-h-[91vh] bg-gray-900">
        <Middle_hero />
        <Bottom_hero />
      </div>
      <Jobs />
      <Category />
      <Info />
      <Banner />
      <Testimonials />
      <Footer />
    </div>
  );
}
