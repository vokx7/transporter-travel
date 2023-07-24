"use client";

import LogoMin from "../public/logo-nav.png";
import Link from "next/link";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#fef3d7] lg:bg-bg-light relative text-center lg:text-left text-dark-blue p-4 flex flex-col items-center lg:pt-40">
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150 "
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="54%" x2="100%" y2="46%">
              <stop offset="5%" stop-color="#fbb244"></stop>
              <stop offset="95%" stop-color="#ffe0a2"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,133 0,133 C 47.32875300583994,108.26348333905875 94.65750601167989,83.52696667811749 167,86 C 239.34249398832011,88.47303332188251 336.6987289591205,118.15561662658877 423,133 C 509.3012710408795,147.84438337341123 584.5475781518379,147.85056681552732 640,137 C 695.4524218481621,126.14943318447267 731.1109584335279,104.44211611130196 795,93 C 858.8890415664721,81.55788388869804 951.0085881140501,80.38096873926486 1020,94 C 1088.99141188595,107.61903126073514 1134.8546891102712,136.03400893163862 1201,145 C 1267.1453108897288,153.96599106836138 1353.5726554448643,143.4829955341807 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="54%" x2="100%" y2="46%">
              <stop offset="5%" stop-color="#fbb244"></stop>
              <stop offset="95%" stop-color="#ffe0a2"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,266 0,266 C 73.71075231879078,261.05462040535895 147.42150463758156,256.10924081071795 228,251 C 308.57849536241844,245.89075918928205 396.02473376846444,240.6176571624871 449,231 C 501.97526623153556,221.3823428375129 520.4795602885607,207.4201305393336 579,226 C 637.5204397114393,244.5798694606664 736.0570250772931,295.7018206801786 811,306 C 885.9429749227069,316.2981793198214 937.2923394022671,285.7725867399519 999,279 C 1060.707660597733,272.2274132600481 1132.773617313638,289.20783236001375 1208,291 C 1283.226382686362,292.79216763998625 1361.613191343181,279.3960838199931 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-1"
          ></path>
        </svg>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-0 justify-center max-w-7xl w-full">
        <div className="flex flex-1 flex-col items-center lg:items-start lg:gap-4">
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
              {/* <li>
                <Link href="#" className="hover:text-dark-orange">
                  Rezerwacje
                </Link>
                &nbsp;|&nbsp;
              </li> */}
              <li>
                <Link href="#" className="hover:text-dark-orange">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-row gap-5 pt-4 items-center lg:items-start justify-center">
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
        <div>
          {" "}
          <p>NIP: 9970074529</p>
          <p>REGON: 100285790</p>
          <p> Numer wpisu do Krajowego Rejestru Organizatorów Turystyki: 792</p>
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
        <div className="flex flex-1 lg:justify-end">
          <Image src={LogoMin} alt="#" className="lg:h-auto lg:w-2/5 w-full" />
        </div>
      </div>
    </footer>
  );
}
