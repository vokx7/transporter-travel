"use client";

import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Logo from "../public/logo.webp";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function LandingPage() {
  return (
    <>
      <div className=" p-10 md:p-0 flex flex-col items-center md:flex-row max-w-full h-screen prose lg:prose-xl">
        <div className="flex-1 md:mx-auto">
          <h1 className="text-dark-blue tracking-wide">
            Organizacja wycieczek autokarowych dla szkół i wycieczek
            zorganizowanych
          </h1>
          <div className="flex gap-10">
            <Button
              variant="gradient"
              color="orange"
              size="lg"
              className="flex items-center gap-4"
            >
              <BsFacebook className="text-base	" />
              Facebook
            </Button>
            <Button
              variant="outlined"
              color="orange"
              size="lg"
              className="flex items-center gap-4"
            >
              <BsInstagram />
              Instagram
            </Button>
          </div>
        </div>
        <div className="flex-1 md:w-1/2 w-full">
          <Image src={Logo} alt="#" />
        </div>
      </div>
    </>
  );
}
