import React from "react";
import Image from "next/image";
import "../globals.css";
import "./LandingPage.css"; // Import the external CSS file

const LandingPage: React.FC = () => {
    return (
        <div className="mainDiv">
            {/* Text Section */}
            <div className="nameSection">
                <h1 className="satisfy">
                    Rachit <br /> Naik <br /> Gaunkar
                </h1>
            </div>

            {/* Illustration Section */}
            <div className="imageCss">
                <Image
                    src="/illustration.png"
                    alt="Illustration"
                    width={533.22}
                    height={504.57}
                />
            </div>
        </div>
    );
};

export default LandingPage;
