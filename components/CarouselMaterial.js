import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import img1 from "../public/img1.jpg";
import img3 from "../public/img3.jpg";
import img5 from "../public/img5.jpg";
import img6 from "../public/img6.jpg";
import img7 from "../public/img7.jpg";
import img8 from "../public/img8.jpg";
import img9 from "../public/img9.jpg";
import img10 from "../public/img10.jpg";
import img11a from "../public/img11a.jpg";
import img12 from "../public/img12.jpg";
import img13 from "../public/img13.jpg";
import img14 from "../public/img14.jpg";
import img15 from "../public/img15.jpg";

export default function CarouselMaterial() {
  return (
    <Carousel loop autoplay autoplayDelay={4000} className="rounded-xl">
      <Image src={img8} alt="#" />
      <Image src={img11a} alt="#" />
      <Image src={img9} alt="#" />
      <Image src={img10} alt="#" />
      <Image src={img12} alt="#" />
      <Image src={img13} alt="#" />
      <Image src={img14} alt="#" />
      <Image src={img15} alt="#" />
      <Image src={img1} alt="#" />
      <Image src={img3} alt="#" />
      <Image src={img5} alt="#" />
      <Image src={img6} alt="#" />
      <Image src={img7} alt="#" />
    </Carousel>
  );
}
