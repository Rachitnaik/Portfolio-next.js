import Image from "next/image";
import React from "react";
import "../globals.css";
import "./AboutMePage.css"; // Import the external CSS file

const AboutMePage: React.FC = () => {
    return (
        <div className="secondPage">
            {/* Image Section */}
            <div className="imageSection">
                <Image
                    src="/img19.png" // Replace with your actual image path
                    alt="Profile Picture"
                    width={250}
                    height={250}
                    className="profileImage"
                />
            </div>

            {/* Text Section */}
            <div className="textSection">
                <div className="pageNumber poppins">01</div>
                <h1 className="heading poppins">Me?</h1>
                <p className="description poppins">
                    I'm a passionate web developer with a keen focus on front-end technologies. When I'm not coding, I dive into the world of illustrations, turning images into vibrant visuals. My journey blends creativity and technical expertise, allowing me to bring both functional and artistic elements to life.
                </p>
            </div>
        </div>
    );
};

export default AboutMePage;
