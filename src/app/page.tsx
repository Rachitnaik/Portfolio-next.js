"use client";
import React, { useEffect, useRef, useState } from "react";
import "./components/Sidebar.css"; // Import the CSS for styling
import LandingPage from './components/LandingPage'
import AboutMePage from './components/AboutMePage'
import ImagegalleryPage from "./components/ImagegalleryPage";
import ProjectListPage from "./components/ProjectListPage";
import FooterPage from "./components/FooterPage";
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
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null, // Observe within the viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id); // Update the active section
        }
      });
    }, options);

    const sections = [
      firstRef.current,
      secondRef.current,
      imageGalleryRef.current,
      projectListRef.current,
      footerRef.current,
    ].filter(Boolean); // Filter out null values

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

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
          className={`icon ${activeSection === "landingPage" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(firstRef);
          }}
        >
          <HomeIcon />
        </a>
        <a
          className={`icon ${activeSection === "aboutMePage" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(secondRef);
          }}
        >
          <AccountCircleIcon />
        </a>
        <a
          className={`icon ${activeSection === "projectListPage" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(projectListRef);
          }}
        >
          <AssignmentIcon />
        </a>
        <a
          className={`icon ${activeSection === "imageGalleryPage" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(imageGalleryRef);
          }}
        >
          <PaletteIcon />
        </a>
        <a
          className={`icon ${activeSection === "footerPage" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(footerRef);
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
      <div id="imageGalleryPage" ref={imageGalleryRef}>
        <ImagegalleryPage />
      </div>
      <div id="footerPage" ref={footerRef}>
        <FooterPage />
      </div>
    </div>
  );
}

export default Pages;
