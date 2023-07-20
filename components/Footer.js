"use client";

import LogoMin from "../public/logo-nav.png";
import Link from "next/link";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="text-center lg:text-left text-dark-blue bg-bg-light p-4 flex flex-col items-center">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 justify-center max-w-7xl w-full">
        <div className="flex flex-1 flex-col items-start gap-4">
          <div>
            <ul className="list-none inline-flex font-semibold">
              <li>
                <Link href="#about" className="hover:text-dark-orange">
                  O nas
                </Link>
                &nbsp;|&nbsp;
              </li>
              <li>
                <Link href="#o-nas" className="hover:text-dark-orange">
                  Oferta
                </Link>
                &nbsp;|&nbsp;
              </li>
              <li>
                <Link href="#" className="hover:text-dark-orange">
                  Rezerwacje
                </Link>
                &nbsp;|&nbsp;
              </li>
              <li>
                <Link href="#" className="hover:text-dark-orange">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-row gap-5 pt-4 justify-center">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100057102714029&fref=ts"
              className="flex items-center gap-5 mb-4 hover:text-dark-orange "
            >
              <BsFacebook className="text-2xl" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/transporter_travel/"
              className="flex items-center gap-5 mb-4 hover:text-dark-orange"
            >
              <BsInstagram className="text-2xl" />
            </a>
          </div>
        </div>

        {/* <div className="flex-1 gap-2 lg:gap-0 flex flex-col items-center md:items-start content-center flex-wrap	">
          <a
            href="https://goo.gl/maps/jAT2zsNhZMqQtXcW8"
            target="_blank"
            className="mb-4 flex gap-4 lg:justify-start hover:text-second-green"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            ul. Rzeźnicka 3A <br /> 63-600 Kępno
          </a>
          <a
            href="tel:+48570970570"
            className="inline-flex gap-4 mb-4 hover:text-dark-orange"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.0"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            +48 570 970 570
          </a>
          <a
            href="mailto:transporter-travel@wp.pl"
            className="inline-flex gap-4 hover:text-dark-orange"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.0"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            transporter-travel@wp.pl
          </a>
        </div> */}
        <div className="flex flex-1 justify-end">
          <Image src={LogoMin} alt="#" className="h-auto w-1/3" />
        </div>
      </div>
    </footer>
  );
}
