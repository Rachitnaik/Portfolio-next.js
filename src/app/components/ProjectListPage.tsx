import React from "react";
import "./ProjectList.css";

const projects = [
    {
        title: "AniView",
        description:
            "Luxe Jewels, a high-end jewelry retailer, desired a brand identity that exuded luxury and sophistication. We developed an elegant logo with a custom typeface and a refined color palette, capturing the essence of timeless beauty.",
        link: "#",
    },
    {
        title: "AniView",
        description:
            "Luxe Jewels, a high-end jewelry retailer, desired a brand identity that exuded luxury and sophistication. We developed an elegant logo with a custom typeface and a refined color palette, capturing the essence of timeless beauty, hasdsalbcjsacjsabchdbchdbchdcbhdbchdbchdbchdbchdcbdhcbdhcbhdbchdbcsi am gonna hold you just for a while and die witha a smile , if the world was ending i am gonna be next to you , i am ginna be next to you, lost in thre words that we soeak i dont wanan di thuis anymore , you alread, wherever you go thast weer i follow , nobody promised tmrewwif the world was falling i am gonna next to you oooojhhhhh, if the arty was over and iur time in eath was thriugh , i am ginna hod wa;ahfldsahfkjdsahflkjdsahfsalkfjsaj;nljnv;renjewnfkjenfbin",
        link: "#",
    },
    {
        title: "AniView",
        description:
            "Luxe Jewels, a high-end jewelry retailer, desired a brand identity that exuded luxury and sophistication. We developed an elegant logo with a custom typeface and a refined color palette, capturing the essence of timeless beauty, hasdsalbcjsacjsabchdbchdbchdcbhdbchdbchdbchdbchdcbdhcbdhcbhdbchdbcsi am gonna hold you just for a while and die witha a smile , if the world was ending i am gonna be next to you , i am ginna be next to you, lost in thre words that we soeak i dont wanan di thuis anymore , you alread, wherever you go thast weer i follow , nobody promised tmrewwif the world was falling i am gonna next to you oooojhhhhh, if the arty was over and iur time in eath was thriugh , i am ginna hod wa;ahfldsahfkjdsahflkjdsahfsalkfjsaj;nljnv;renjewnfkjenfbin",
        link: "https://www.google.com",
    },
];

const ProjectListPage: React.FC = () => {
    return (
        <div className="projects-section">
            <div className="section-header">
                <h2 className="section-number">02</h2>
                <h2 className="section-title">Projects</h2>
            </div>
            <div className="project-cards-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-header">
                            <h3 className="project-title">{project.title}</h3>
                            <a href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link">
                                ➚
                            </a>
                        </div>
                        <p className="project-description">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectListPage;
