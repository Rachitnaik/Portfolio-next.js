import { Image } from "@nextui-org/react";
import "./ImagegalleryPage.css";
import "../globals.css";
import Marquee from "react-fast-marquee";

const ImagegalleryPage: React.FC = () => {
    return (
        <div className="image-gallery-container">
            <div className="image-gallery-header poppins">
                <h1 className="imageTitle">Illustration gallery</h1>
                <h1 className="imagepagenumber">03</h1>
            </div>
            <div className="image-gallery-marquee">
                <Marquee speed={120} autoFill={true} pauseOnClick={true} pauseOnHover={true}>
                    <Image
                        alt="Gallery image 1"
                        className="marquee-image"
                        src="gallery6.png"
                    />
                    <Image
                        alt="Gallery image 4"
                        className="marquee-image"
                        src="gallery3.png"
                    />
                    <Image
                        alt="Gallery image 2"
                        className="marquee-image"
                        src="Asset 4.png"
                    />
                    <Image
                        alt="Gallery image 3"
                        className="marquee-image"
                        src="gallery2.png"
                    />
                    <Image
                        alt="Gallery image 5"
                        className="marquee-image"
                        src="gallery5.png"
                    />
                </Marquee>
            </div>
            <a className="poppins more"
                href="https://rachitgaunkar.wixsite.com/rgillustrations"
                target="_blank"
                rel="noopener noreferrer"> See More ➚</a>
        </div>
    );
};

export default ImagegalleryPage;
