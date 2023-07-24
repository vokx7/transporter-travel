"use client";
import Image from "next/image";
// import bus from "../public/img2.jpg";
// import adv from "../public/adventure.svg";
import kadra from "../public/onas.jpeg";
// import eif from "../public/eiffel.svg";
import { Button, Typography } from "@material-tailwind/react";

// import { Document, Page } from "react-pdf";
// import file from "../public/AKTUALNY_KATALOG_SZKOLY.pdf";

export default function Offer() {
  return (
    <div id="offer" className="flex flex-col items-center  ">
      <div className=" flex flex-col max-w-7xl w-full md:flex-row items-center  gap-4 lg:gap-14 my-8 lg:mb-20 ">
        <div className=" flex-1 prose prose-base lg:prose-xl mx-8 lg:mx-0">
          <h2 className=" text-left text-first-blue leading-9 tracking-wider">
            Oferta
          </h2>
          <h5 className="text-light-blue text-justify mb-4">
            Zapraszamy do zapoznania się z przykładowymi ofertami wycieczek
            szkolnych, wiele ofert przygotowujemy indywidualnie pod preferencje
            klienta. Zadzwoń, a my zajmiemy się resztą! Zaproponujemy program
            wycieczki idealnie dobrany do specyfikacji grupy!
          </h5>
          <a target="_blank" href="../public/AKTUALNY_KATALOG_SZKOLY.pdf">
            <Button
              variant="filled"
              size="lg"
              color="orange"
              className="bg-light-orange"
            >
              Katalog wycieczek
            </Button>
          </a>
        </div>
        <div className="flex-1 w-full flex justify-center">
          <Image src={kadra} alt="#" className="w-full rounded-md" />
        </div>
      </div>
    </div>
  );
}
