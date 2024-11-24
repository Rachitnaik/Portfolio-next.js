import React from "react";
import "./ProjectList.css";
import "../globals.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const ProjectCard: React.FC<{ project: { title: string; description: string; link: string } }> = ({ project }) => (
    <div className="project-card">
        <div className="project-header poppins">
            <h3 className="project-title">{project.title}</h3>
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
            >
                ➚
            </a>
        </div>
        <p className="project-description poppins">{project.description}</p>
    </div>
);

const projects = [
    {
        title: "AniView",
        description:
            "A reviewing web application for Anime and Manga, a group mini project done during my university days, using react, react-bootstrap, firestore for database. Was mainly involved in creating UI screens and basic testing, and also involved in requirement analysis",
        link: "http://aniview.onrender.com",
    },
    {
        title: "Anime/MangaUI",
        description:
            "A UI made by following a design from the Internet, during my internship as a part of my learning phase using react, typescript, material UI, used an online free API to display data.",
        link: "https://github.com/Rachitnaik/AnimeUI",
    },
    {
        title: "Movify-React App",
        description:
            "A basic react application done to understand the flow of a full-stack application, during my internship period using MERN stack.",
        link: "https://github.com/Rachitnaik/Moviefy",
    },
];

const ProjectListPage: React.FC = () => {
    return (
        <>
            <div className="projects-section">
                <div className="section-header poppins">
                    <h2 className="section-number">02</h2>
                    <h2 className="section-title">Projects</h2>
                </div>

                {/* Desktop View */}
                <div className="project-cards-container">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>

            {/* Mobile Section */}
            <div className="mobile-cards-container">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={1}
                    style={{ marginRight: "45px" }}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default ProjectListPage;
