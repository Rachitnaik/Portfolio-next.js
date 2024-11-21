import { Image } from "@nextui-org/react";
import "./ImagegalleryPage.css"
import Marquee from "react-fast-marquee";

const ImagegalleryPage: React.FC = () => {
    return (
        <div style={{ width: "100vw", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '75vw', fontSize: '2rem' }} >
                <h1>Illustration gallery</h1>
                <h1>03</h1>
            </div>
            <div style={{
                // backgroundColor: "red",
                width: '75vw'
            }} >
                <Marquee speed={100} autoFill={true} >
                    <Image
                        alt="Gallery image 1"
                        className="marquee-image"
                        src="/rachrose.png"

                    />
                    <Image
                        alt="Gallery image 4"
                        className="marquee-image"
                        src="gallery3.png"
                    />

                    <Image
                        alt="Gallery image 2"
                        className="marquee-image"
                        src="gallery1.png"
                    />
                    <Image
                        alt="Gallery image 3"
                        className="marquee-image"
                        src="gallery2.png"
                    />
                    <Image
                        alt="Gallery image 5"
                        className="marquee-image"
                        src="gallery4.jpg"
                    />
                </Marquee>
            </div>
        </div>

    );
};

export default ImagegalleryPage;
