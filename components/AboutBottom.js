import Box from "./Box";
import { TbBus } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiPalmTree } from "react-icons/gi";
import { BsTrophyFill } from "react-icons/bs";
import { BsSnow2 } from "react-icons/bs";
import { LuPartyPopper } from "react-icons/lu";
import { MdOutlineWork } from "react-icons/md";

export default function AboutBottom() {
  return (
    <div id="about" className="flex flex-col items-center my-10">
      <div className="flex flex-col max-w-7xl w-full p-10 md:p-0 items-center">
        <div className="prose prose-base lg:prose-xl lg:mb-20">
          <h2 className=" text-first-blue leading-9 tracking-wider text-center ">
            Nasz zakres działania
          </h2>
        </div>
        <div className="flex flex-col gap-8 items-center">
          {" "}
          <div className="flex flex-col md:flex-row gap-8">
            <Box
              title={"Wycieczki szkolne, turystyczne, rekreacyjne i edukacyjne"}
              child={
                <TbBus size={"2em"} className="text-light-blue font-light	" />
              }
            />
            <Box
              title={"Wyjazdy dla grup zorganizowanych"}
              child={
                <FaPeopleGroup
                  size={"2em"}
                  className="text-light-blue font-light	"
                />
              }
            />
            <Box
              title={"Kolonie letnie w Polsce oraz za granicą"}
              child={
                <GiPalmTree
                  size={"2em"}
                  className="text-light-blue font-light	"
                />
              }
            />
            <Box
              title={"Obozy sportowe"}
              child={
                <BsTrophyFill
                  size={"2em"}
                  className="text-light-blue font-light	"
                />
              }
            />
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <Box
              title={"Zimowiska, szkoły narciarskie"}
              child={
                <BsSnow2 size={"2em"} className="text-light-blue font-light	" />
              }
            />
            <Box
              title={"Imprezy integracyjne"}
              child={
                <LuPartyPopper
                  size={"2em"}
                  className="text-light-blue font-light	"
                />
              }
            />
            <Box
              title={"Wycieczki kadrowe"}
              child={
                <MdOutlineWork
                  size={"2em"}
                  className="text-light-blue font-light	"
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
