import Image from "next/image";
import bg from "../../../../public/background/projects-background.png"
import ProjectsList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";

export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-50 w-full fixed top-0 left-0 h-full object-cover object-center opacity-25"/>
      <ProjectsList projects={projectsData}></ProjectsList>
      <div className="flex items-center justify-center fixed top-20 -left-16 h-screen w-screen-20">
        <RenderModel>
          <Staff/>
        </RenderModel>
      </div>
    </>
  );
}
