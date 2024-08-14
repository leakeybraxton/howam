import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "../components/pages/Portfolio/Portfolio";
import { Contact } from "../components/pages/Contact/Contact";
import Home from "../components/pages/HomePage/Home";
import Service from "../components/pages/Service/Service";
import FAQ from "../components/pages/FAQ/FAQ";
import Planing from "../components/pages/Planing/Planing";
import AboutUsMenu from "../components/pages/AboutUs/AboutUsMenu";
import SignUp from "../components/SignUp/SignUp";
import Blog from  "../components/pages/Blog/Blog";
import BlogPage  from "../components/pages/Blog/BlogPage";

export default function Index() {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />        
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/planing" element={<Planing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/aboutus" element={<AboutUsMenu />} />   
        <Route path="/signin" element={<SignUp/>} />     
  
      </Routes>
     </div>
  );
}
