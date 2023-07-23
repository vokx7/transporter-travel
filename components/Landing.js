"use client";

import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Logo from "../public/logo2.webp";

export default function LandingPage() {
  return (
    <section className="flex flex-col items-center relative lg:pb-48">
      <div className="no-margin max-w-7xl w-full p-10 md:p-0 flex flex-col items-center md:flex-row prose lg:prose-xl relative z-10 gap-10 lg:gap-0">
        <div className="no-margin flex-1 md:mx-auto">
          <h1 className="text-dark-blue tracking-wide">
            Organizacja wycieczek autokarowych dla szkół i grup zorganizowanych
          </h1>
          <div className="flex gap-10">
            <a href="/#contact">
              {" "}
              <Button variant="gradient" color="orange" size="lg">
                Skontaktuj się z nami
              </Button>
            </a>
            <a href="#">
              <Button variant="outlined" color="orange" size="lg">
                Zarezerwuj wycieczkę
              </Button>
            </a>
          </div>
        </div>
        <div className="no-margin flex-1 md:w-1/2 w-full flex justify-center">
          <Image src={Logo} alt="#" className="no-margin" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
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
    </section>
  );
}
