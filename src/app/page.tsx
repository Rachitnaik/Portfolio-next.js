"use client";
import React, { useEffect, useRef, useState } from "react";
import "./components/Sidebar.css"; // Import the CSS for styling
import LandingPage from './components/LandingPage'
import AboutMePage from './components/AboutMePage'
import ImagegalleryPage from "./components/ImagegalleryPage";
import ProjectListPage from "./components/ProjectListPage";

function Pages() {
  const [activeSection, setActiveSection] = useState("first");
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const imageGalleryRef = useRef<HTMLDivElement>(null);
  const projectListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Update active section
        }
      });
    };

    const observerOptions = {
      root: null, // Observe viewport
      threshold: 0.5, // Trigger when 50% is visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (firstRef.current) observer.observe(firstRef.current);
    if (secondRef.current) observer.observe(secondRef.current);
    if (imageGalleryRef.current) observer.observe(imageGalleryRef.current);
    if (projectListRef.current) observer.observe(projectListRef.current);

    return () => {
      if (firstRef.current) observer.unobserve(firstRef.current);
      if (secondRef.current) observer.unobserve(secondRef.current);
      if (imageGalleryRef.current) observer.unobserve(imageGalleryRef.current);
      if (projectListRef.current) observer.unobserve(projectListRef.current);
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
          className={`icon ${activeSection === "first" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(firstRef);
          }}
        >
          🏠
        </a>
        <a
          className={`icon ${activeSection === "second" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(secondRef);
          }}
        >
          👤
        </a>
        <a
          href="#imageGallaryPage"
          className={`icon ${activeSection === "third" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(imageGalleryRef);
          }}
        >
          📷
        </a>
        <a
          className={`icon ${activeSection === "fourth" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(projectListRef);
          }}
        >
          🎨
        </a>
      </div>

      <div id="landingPage" ref={firstRef}>
        <LandingPage />
      </div>

      <div id="aboutMePage" ref={secondRef}>
        <AboutMePage />
      </div>

      <div id="imageGallaryPage" ref={imageGalleryRef}>
        <ImagegalleryPage />
      </div>

      <div id="projectListPage" ref={projectListRef}>
        <ProjectListPage />
      </div>
    </div>
  );
}

export default Pages;
