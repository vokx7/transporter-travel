"use client";
import Image from "next/image";
import certyfikat from "../public/certyfikat.png";
import autokar from "../public/autokar.png";
import logo3 from "../public/logo3.png";
import CarouselMaterial from "./CarouselMaterial";
import AboutBottom from "./AboutBottom";

export default function About() {
  return (
    <div id="about" className="relative flex flex-col items-center">
      {" "}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-bg-second to-bg-light"></div>
      <div className="relative z-10 flex flex-col md:flex-row max-w-7xl w-full   md:py-14 items-center gap-4">
        <div className="flex-1 prose prose-base lg:prose-xl p-10 md:p-0">
          {" "}
          <h2 className="text-first-blue leading-9 tracking-wide">
            {" "}
            Jesteśmy biurem podróży zajmującym się kompleksową organizacją
            wyjazdów
          </h2>
          <h4 className="text-light-blue tracking-wide pr-2">
            Na naszych wycieczkach korzystamy <br /> z nowoczesnych zestawów
            Tour Guide
          </h4>
          <div className="not-prose flex flex-row gap-10 w-1/2">
            <Image
              src={certyfikat}
              alt="#"
              className="flex-1 w-1/2 flex-shrink-0"
            />
            <Image
              src={autokar}
              alt="#"
              className="flex-1 w-1/2 flex-shrink-0"
            />
            <Image src={logo3} alt="#" className="flex-1 w-1/2 flex-shrink-0" />
          </div>
        </div>
        <div className="flex-1">
          <CarouselMaterial />
        </div>
      </div>
      <AboutBottom />
    </div>
  );
}
