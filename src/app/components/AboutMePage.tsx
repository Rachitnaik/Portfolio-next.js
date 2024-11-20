import Image from "next/image";
import React from "react";
import "./SecondPage.css"; // Import the external CSS file

const AboutMePage: React.FC = () => {
    return (
        <div className="secondPage">
            {/* Image Section */}
            <div className="imageSection">
                <Image
                    src="/proImage.jpg" // Replace with your actual image path
                    alt="Profile Picture"
                    width={250}
                    height={250}
                    className="profileImage"
                />
            </div>

            {/* Text Section */}
            <div className="textSection">
                <div className="pageNumber">01</div>
                <h1 className="heading">Me?</h1>
                <p className="description">
                    Nature's Finest, an organic skincare brand, sought an earthy and
                    natural brand identity. We crafted a logo with a leaf-inspired
                    design, utilizing soft and soothing colors that reflect the brand's
                    commitment to organic ingredients.
                </p>
            </div>
        </div>
    );
};

export default AboutMePage;
