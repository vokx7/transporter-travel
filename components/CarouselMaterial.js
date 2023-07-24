import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import img1 from "../public/img1.jpg";
import img2 from "../public/img2.jpeg";
import img3 from "../public/img3.jpg";
import img4 from "../public/img4.jpg";
import img5 from "../public/img5.jpg";
import img6 from "../public/img6.jpeg";
import img7 from "../public/img7.jpg";
import img8 from "../public/img8.jpg";
import img9 from "../public/img9.jpg";
import img10 from "../public/img10.jpg";
import img11 from "../public/img11.jpg";
import img12 from "../public/img12.jpg";
import img13 from "../public/img13.jpeg";
import img14 from "../public/img14.jpeg";
import img15 from "../public/img15.jpeg";
import img16 from "../public/img16.jpeg";
import img17 from "../public/img17.jpeg";
import img18 from "../public/img18.jpeg";
import onas from "../public/onas.jpeg";

export default function CarouselMaterial() {
  return (
    <Carousel loop autoplay autoplayDelay={4000} className="rounded-xl">
      <Image src={onas} alt="#" />
      {/* <Image src={img8} alt="#" />
      <Image src={img4} alt="#" /> */}
      <Image src={img16} alt="#" />
      <Image src={img2} alt="#" />
      <Image src={img11} alt="#" />
      <Image src={img9} alt="#" />
      <Image src={img10} alt="#" />
      <Image src={img18} alt="#" />
      <Image src={img12} alt="#" />
      <Image src={img13} alt="#" />
      <Image src={img14} alt="#" />
      <Image src={img15} alt="#" />
      <Image src={img1} alt="#" />
      <Image src={img3} alt="#" />
      <Image src={img5} alt="#" />
      <Image src={img6} alt="#" />
      <Image src={img7} alt="#" />
      <Image src={img17} alt="#" />
    </Carousel>
  );
}
