import React from "react";
import { useMediaQuery } from "@mui/material";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./FooterPage.css";

const FooterPage: React.FC = () => {
    // Use media queries to determine screen size
    const isMobileOrTablet = useMediaQuery("(max-width: 1024px)");

    return (
        <>
            <div className="footer-container poppins">
                <div className="footer-text">
                    <p className="footer-number poppins">4</p>
                    <p className="footer-title poppins">
                        Get in touch{" "}
                        {isMobileOrTablet ? (
                            <CallReceivedIcon className="arrow" />
                        ) : (
                            <CallMadeIcon className="arrow" />
                        )}
                    </p>
                </div>

                <div className="footer-icons-wrapper">
                    <div>
                        <a href="https://github.com/Rachitnaik" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon className="footer-icon" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rachitnaikgaunkar/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon className="footer-icon" />
                        </a>
                    </div>
                    <div className="poppins footer-mail">
                        <p>Mail to : rachitgaunkar@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="poppins devtext">
                <p>Developed By :</p>
                <p>Rachit Naik Gaunkar</p>
            </div>
        </>
    );
};

export default FooterPage;
