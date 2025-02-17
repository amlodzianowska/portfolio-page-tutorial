import Image from "next/image";
import bg from "../../../../public/background/about-background.png"
import RenderModel from "@/components/RenderModel";
import Hat from "@/components/models/Hat";

export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-50 w-full fixed top-0 left-0 h-full object-cover object-center opacity-25"/>
      <div className="flex items-center justify-center fixed top-20 -left-16 h-screen w-screen-20">
        <RenderModel>
          <Hat/>
        </RenderModel>
      </div>
    </>
  );
}
