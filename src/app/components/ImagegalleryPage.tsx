

import { BentoCard, BentoGrid } from "./ui/bento-grid";
import "./ImagegalleryPage.css"
import Image from "next/image";
const features = [
    {

        className: "col-span-3 lg:col-span-2",
        background: (
            <img src="proImage.jpg" className="imagecss" />
        ),
    },

    {

        className: "row-span-3 lg:row-span-2",
        background: (
            // <img src="gallery3.png" className="imagecss" />
            <Image src={"/gallery3.png"} alt={"gallery3"} className="imagecs" height={"600"} width={"300"} />
        ),
    },
    {

        className: "row-span-3 lg:row-span-2",
        background: (
            <Image src="/gallery1.png" className="imagecss" alt={"gallery1"} height={"200"} width={"600"} />

        ),
    },

    {

        className: "row-span-3 lg:row-span-2",
        background: (
            <img src="gallery4.jpg" className="imagecss" />

        ),
    },
    {

        className: "row-span-3 lg:row-span-2",
        background: (
            <img src="rachrose.png" className="imagecss" />

        ),
    },

];

export function ImagegalleryPage() {
    return (
        <div style={{
            padding: "10rem"
        }}>
            <BentoGrid >
                {features.map((feature, idx) => (
                    <BentoCard name={""} Icon={undefined} description={""} href={""} cta={""} key={idx} {...feature} />
                ))}

            </BentoGrid>
            <div className="pageNumber">02</div>
        </div>

    );
}
