"use client";
import React, { useEffect, useRef, useState } from "react";
import "./components/Sidebar.css"; // Import the CSS for styling
import LandingPage from './components/LandingPage'
import AboutMePage from './components/AboutMePage'
import ImagegalleryPage from "./components/ImagegalleryPage";
import ProjectListPage from "./components/ProjectListPage";
import FooterPage from "./components/FooterPage";
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaletteIcon from '@mui/icons-material/Palette';
import ContactPageIcon from '@mui/icons-material/ContactPage';


function Pages() {
  const [activeSection, setActiveSection] = useState("first");
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const imageGalleryRef = useRef<HTMLDivElement>(null);
  const projectListRef = useRef<HTMLDivElement>(null);
  const footerPage = useRef<HTMLDivElement>(null);


  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <div className="sidebar">
        <a
          className={`icon ${activeSection === "first" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(firstRef);
          }}
        >
          <HomeIcon />
        </a>
        <a
          className={`icon ${activeSection === "second" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(secondRef);
          }}
        >
          <AccountCircleIcon />
        </a>

        <a
          className={`icon ${activeSection === "fourth" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(projectListRef);
          }}
        >
          <AssignmentIcon />
        </a>
        <a
          href="#imageGallaryPage"
          className={`icon ${activeSection === "third" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(imageGalleryRef);
          }}
        >
          <PaletteIcon />
        </a>
        <a
          href="#footerPage"
          className={`icon ${activeSection === "third" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(footerPage);
          }}
        >
          <ContactPageIcon />
        </a>
      </div>

      <div id="landingPage" ref={firstRef}>
        <LandingPage />
      </div>

      <div id="aboutMePage" ref={secondRef}>
        <AboutMePage />
      </div>
      <div id="projectListPage" ref={projectListRef}>
        <ProjectListPage />
      </div>
      <div id="imageGallaryPage" ref={imageGalleryRef}>
        <ImagegalleryPage />
      </div>
      <div id="footerPage" ref={footerPage}>
        <FooterPage />
      </div>
    </div>
  );
}

export default Pages;
