import { Image } from "@nextui-org/react";
import "./FooterPage.css";
import "../globals.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterPage: React.FC = () => {
    return (
        <>
            <div className="footer-container poppins" >
                <div className="footer-text" >
                    <p className="footer-number poppins">4</p>
                    <p className="footer-title poppins">Get in touch    </p>

                </div>

                <div className="footer-icons-wrapper">
                    <div>
                        <a href="https://github.com/Rachitnaik" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon className="footer-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/rachitnaikgaunkar/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className="footer-icon" />
                        </a>
                    </div>
                    <div className="poppins footer-mail" > <p >Mail to : rachitgaunkar@gmail.com</p>

                    </div>


                </div>

            </div>
            <div className="poppins devtext">
                <p >Developed By :</p>
                <p>Rachit Naik Gaunkar</p>

            </div>

        </>

    );
};

export default FooterPage;
