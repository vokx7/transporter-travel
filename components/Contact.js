import Map from "./Map";
import { FiMapPin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { AiFillPhone } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Image from "next/image";
import biuro from "../public/biuro.jpeg";

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center">
      <div className="relative z-10 flex flex-col max-w-7xl w-full items-center gap-4 lg:gap-10 my-8 lg:mb-20">
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <div className="flex-1 flex flex-col prose prose-base lg:prose-xl items-center lg:bg-blob bg-no-repeat bg-contain bg-center lg:p-36">
            <div>
              {" "}
              <div className="not-prose mb-4 font-semibold">
                <h3 className="text-3xl text-first-blue tracking-wide">
                  Biuro Podróży <br />
                  Transporter Travel
                </h3>
              </div>
              <a
                href="https://goo.gl/maps/YpdjGgGLoqk319KX7"
                target="_blank"
                className="no-underline flex items-center gap-4 text-first-blue hover:text-first-orange"
              >
                <FiMapPin /> ul. Rzeźnicka 3a, 63-600 Kępno
              </a>
              <a
                href="tel:+48570970570"
                className="no-underline flex items-center gap-4 text-first-blue hover:text-first-orange"
              >
                <AiFillPhone /> 570 970 570
              </a>
              <a
                href="tel:+48515705300"
                className="no-underline flex items-center gap-4 text-first-blue hover:text-first-orange"
              >
                <AiFillPhone /> 515 705 300
              </a>
              <a
                href="mailto:transporter-travel@wp.pl"
                target="_blank"
                className="no-underline flex items-center gap-4 text-first-blue hover:text-first-orange"
              >
                <FiMail /> transporter-travel@wp.pl
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100057102714029&fref=ts"
                className="no-underline flex items-center gap-4 text-first-blue hover:text-first-orange"
              >
                <BsFacebook className="text-xl" />
                Facebook
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/transporter_travel/"
                className="no-underline flex items-center gap-4 text-first-blue hover:text-first-orange"
              >
                <BsInstagram className="text-xl" /> Instagram
              </a>
              {/* <div className="not-prose text-first-blue pt-4 text-base">
              {" "}
              <p>NIP: 9970074529</p>
              <p>REGON: 100285790</p>
              <p>
                {" "}
                Numer wpisu do Krajowego <br /> Rejestru Organizatorów
                Turystyki: 792
              </p>
            </div> */}
            </div>
          </div>
          <div className="my-4 lg:my-0 flex-1 flex justify-center w-full">
            <Image src={biuro} alt="#" className=" w-4/5 rounded-md" />
          </div>
        </div>
        <Map />
      </div>
    </div>
  );
}
