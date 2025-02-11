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
            "Contributed to the development of a reviewing web application for Anime and Manga as part of a group mini project during university. The application was built using React, React-Bootstrap, and Firestore for the database. Responsibilities included designing and implementing user interface screens, performing basic testing, and collaborating in requirement analysis to ensure alignment with project goals.",
        link: "http://aniview.onrender.com",
    },
    {
        title: "Anime/MangaUI",
        description:
            "Developed a user interface as part of an internship project, following a design sourced from the internet, using React, TypeScript, and Material UI. Integrated data from a publicly available free API to dynamically display content.",
        link: "https://github.com/Rachitnaik/AnimeUI",
    },
    {
        title: "Movify-React App",
        description:
            "Developed a foundational React application during an internship to gain a comprehensive understanding of the flow in a full-stack application, utilizing the MERN stack (MongoDB, Express, React, Node.js).",
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
                <div className="see-more-container-desktop">
                    <a
                        href="https://github.com/Rachitnaik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="see-more-button"
                    >
                        See More   ➚
                    </a>
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
                <div className="see-more-container">
                    <a
                        href="https://github.com/Rachitnaik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="see-more-button"
                    >
                        See More   ➚
                    </a>
                </div>
            </div>



        </>
    );
};

export default ProjectListPage;
