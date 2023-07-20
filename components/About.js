"use client";
import Image from "next/image";
import certyfikat from "../public/certyfikat.png";
import autokar from "../public/autokar.png";
import CarouselMaterial from "./CarouselMaterial";
import AboutBottom from "./AboutBottom";

export default function About() {
  return (
    <div id="about" className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row max-w-7xl w-full p-10 md:p-0 md:py-14 items-center gap-4">
        <div className="flex-1 prose prose-base lg:prose-xl">
          {" "}
          <h2 className="text-first-blue leading-9 tracking-wide">
            {" "}
            Jesteśmy biurem podróży zajmującym się kompleksową organizacją
            wyjazdów
          </h2>
          <div className="not-prose flex flex-col md:flex-row gap-10 w-1/2">
            <Image src={certyfikat} alt="#" className="flex-1 w-1/2" />
            <Image src={autokar} alt="#" className="flex-1 w-1/2" />
          </div>
        </div>
        <div className="flex-1">
          <CarouselMaterial />
        </div>
        <AboutBottom />
      </div>
    </div>
  );
}
