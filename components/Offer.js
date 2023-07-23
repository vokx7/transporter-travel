"use client";
import Image from "next/image";
// import bus from "../public/img2.jpg";
// import adv from "../public/adventure.svg";
import adv2 from "../public/adventure2.svg";
// import eif from "../public/eiffel.svg";
import { Button, Typography } from "@material-tailwind/react";

// import { Document, Page } from "react-pdf";
// import file from "../public/AKTUALNY_KATALOG_SZKOLY.pdf";

export default function Offer() {
  return (
    <div id="offer" className="flex flex-col items-center  ">
      <div className=" flex flex-col max-w-7xl w-full md:flex-row items-center  gap-4 lg:gap-10 my-8 lg:mb-20">
        <div className="mx-8 lg:mx-0 flex-1 prose prose-base lg:prose-xl bg-bg-light lg:bg-blob bg-no-repeat bg-cover bg-center lg:p-40 ">
          <h2 className=" text-left text-first-blue leading-9 tracking-wider">
            Oferta
          </h2>
          <h5 className="text-light-blue text-justify mb-4">
            Zapraszamy do zapoznania się z przykładowymi ofertami wycieczek
            szkolnych, wiele ofert przygotowujemy indywidualnie pod preferencje
            klienta. Zadzwoń, a my zajmiemy się resztą! Zaproponujemy program
            wycieczki idealnie dobrany do specyfikacji grupy!
          </h5>
          <Button
            variant="filled"
            size="lg"
            color="orange"
            className="bg-light-orange"
          >
            Katalog wycieczek
          </Button>
        </div>
        <div className="flex-1 w-full flex justify-center">
          <Image src={adv2} alt="#" />
        </div>
      </div>
    </div>
  );
}
