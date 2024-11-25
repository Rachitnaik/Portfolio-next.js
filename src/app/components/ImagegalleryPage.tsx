import { Image } from "@nextui-org/react";
import "./ImagegalleryPage.css";
import "../globals.css";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import React, { useState, useEffect } from "react";

const ImagegalleryPage: React.FC = () => {
    const images = [
        "gallery6.png",
        "gallery3.png",
        "Asset 4.png",
        "gallery2.png",
        "gallery5.png",
    ];

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        // Set the state to true if the window width is <= 768px
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Check the screen width initially
        checkMobile();

        // Add a listener to check the width when the window is resized
        window.addEventListener("resize", checkMobile);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    return (
        <>
            <div className="image-gallery-container">
                <div className="image-gallery-header poppins">
                    {isMobile ? (
                        <>
                            <h1 className="imagepagenumber">03</h1>
                            <h1 className="imageTitle">Illustration gallery</h1>
                        </>
                    ) : (
                        <>
                            <h1 className="imageTitle">Illustration gallery</h1>
                            <h1 className="imagepagenumber">03</h1>
                        </>
                    )}
                </div>
                <div className="image-gallery-marquee">
                    {isMobile ? (
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            loop={true}
                            speed={1200}
                            slidesPerView={1}
                            spaceBetween={10}
                        >
                            {images.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        alt={`Gallery image ${index + 1}`}
                                        className="marquee-image"
                                        src={src}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <Marquee speed={180} autoFill pauseOnClick pauseOnHover>
                            {images.map((src, index) => (
                                <Image
                                    key={index}
                                    alt={`Gallery image ${index + 1}`}
                                    className="marquee-image"
                                    src={src}
                                />
                            ))}
                        </Marquee>
                    )}
                </div>
                <a
                    className="poppins more"
                    href="https://rachitgaunkar.wixsite.com/rgillustrations"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See More ➚
                </a>
            </div>
        </>
    );
};

export default ImagegalleryPage;
