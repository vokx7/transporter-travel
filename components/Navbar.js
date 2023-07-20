"use client";
import React from "react";
import Image from "next/image";
import LogoNav from "../public/logo-nav.png";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Menu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="pb-2 lg:pb-0 mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-10">
      <Typography as="li" className="p-1 font-bold text-base tracking-wider	">
        <Link
          href="/#about"
          className="flex items-center text-dark-blue hover:text-dark-orange hover-underline-animation"
          onClick={() => setOpenNav(false)}
        >
          O nas
        </Link>
      </Typography>
      <Typography as="li" className="p-1 font-bold text-base tracking-wider">
        <Link
          href="/#offer"
          className="flex items-center text-dark-blue hover:text-dark-orange hover-underline-animation"
          onClick={() => setOpenNav(false)}
        >
          Oferta
        </Link>
      </Typography>
      <Typography as="li" className="p-1 font-bold text-base tracking-wider">
        <Link
          href="/#reservations"
          className="flex items-center text-dark-blue hover:text-dark-orange hover-underline-animation"
          onClick={() => setOpenNav(false)}
        >
          Rezerwacje
        </Link>
      </Typography>
      <Typography as="li" className="p-1 font-bold text-base tracking-wider">
        <Link
          href="/#contact"
          className="flex items-center text-dark-blue hover:text-dark-orange hover-underline-animation"
          onClick={() => setOpenNav(false)}
        >
          Kontakt
        </Link>
      </Typography>
      <Typography
        as="li"
        className="p-1 text-2xl hover:text-second-green flex justify-center"
      >
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100057102714029&fref=ts"
          className="flex items-center text-dark-blue hover:text-dark-orange "
          onClick={() => setOpenNav(false)}
        >
          <BsFacebook />
        </a>
      </Typography>
      <Typography
        as="li"
        className="p-1 text-2xl hover:text-second-green flex justify-center"
      >
        <a
          target="_blank"
          href="https://www.instagram.com/transporter_travel/"
          className="flex items-center text-dark-blue hover:text-dark-orange "
          onClick={() => setOpenNav(false)}
        >
          <BsInstagram />
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-10 lg:py-4">
        <section className="flex flex-col items-center">
          <div className="flex items-center justify-between max-w-screen-xl w-full">
            <Link href="/#">
              <Image src={LogoNav} alt="#" width={166} height={48} />
            </Link>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
        </section>
      </Navbar>
      <MobileNav
        open={openNav}
        className="sticky top-[2.7rem] z-10 bg-white shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 px-8"
      >
        {navList}
      </MobileNav>
    </>
  );
}
