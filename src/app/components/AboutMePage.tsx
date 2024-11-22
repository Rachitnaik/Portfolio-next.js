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
                    Nature's Finest, an organic skincare brand, sought an earthy and
                    natural brand identity. We crafted a logo with a leaf-inspired
                    design, utilizing soft and soothing colors that reflect the brand's
                    commitment to organic ingredients.jdfvjfdbvhfdbvfdlbvjxbvjcjxc;kkvdfvjfdkvjfhv;jvhfvljzfvdzfvbijfdbvi
                </p>
            </div>
        </div>
    );
};

export default AboutMePage;
