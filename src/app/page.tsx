"use client";
import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import LandingPage from './components/LandingPage'
import AboutMePage from './components/AboutMePage'
import { ImagegalleryPage } from "./components/ImagegalleryPage";
import ProjectListPage from "./components/ProjectListPage";

function pages() {
  const [activeSection, setActiveSection] = useState("first");
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

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

    return () => {
      if (firstRef.current) observer.unobserve(firstRef.current);
      if (secondRef.current) observer.unobserve(secondRef.current);
    };
  }, []);

  return (
    <div>
      <Sidebar activeSection={activeSection} />
      <div id="first" ref={firstRef}>
        <LandingPage />
      </div>
      <div id="second" ref={secondRef}>
        <AboutMePage />
      </div>
      <div>
        <ProjectListPage />
      </div>
      <ImagegalleryPage />
    </div>
  )
}

export default pages