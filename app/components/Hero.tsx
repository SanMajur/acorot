import Button from "./Button";
import Link from "next/link";
import Card from "./Card";
import {
  MdAgriculture,
  MdConstruction,
  MdEmojiTransportation,
  MdHotel,
} from "react-icons/md";

export default function Hero() {
  return (
    <div className="relative ">
      <div className="flex items-center justify-center h-[30rem] md:h-[35rem] bg-hero-bg bg-fixed bg-cover bg-center">
        {/* <Carousel slides={slides} parentWidth={1500} /> */}
      </div>
      <div className="h-[30rem] md:h-[35rem] absolute top-0 left-0 right-0 bg-black/40"></div>
      <div className="absolute top-20 left-0 right-0 flex flex-col px-8 md:max-w-4xl xl:max-w-6xl mx-auto lg:px-0">
        <h1 className="text-[2.5rem] md:text-[3.5rem]  text-gray-200 font-bold capitalize  tracking-wide leading-tight md:leading-snug md:w-[80%]">
          going forward with full momentum
        </h1>
        <p className="text-gray-200 pt-8 text-lg  md:w-[60%]">
          Welcome to Acotrot General Trading Company Limited., Your dependable
          partner for a diverse range of services and products sourced from all
          corners of the world.
        </p>
        <Link href="/contact" className="w-28">
          <Button title="Contact us" />
        </Link>
      </div>
      {/* <div className="bg-slate-200 h-auto"> */}
      {/* <div className="lg:max-w-4xl xl:max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center">
        {" "}
        <div className="flex flex-col gap-8 py-8  w-[60%]">
          <h2 className="text-2xl">
            Revitalize Your Business with Managed Services
          </h2>
          <h2 className="text-4xl leading-tight text-blue-900">
            Acotrot General Trading Company Limited Your Partner in General
            Trading & Supply
          </h2>
        </div>
        <Button title="about us" />
      </div> */}
      {/* </div> */}
      <div className="bg-gray-200 px-8 flex flex-col py-4">
        <h2 className="text-3xl text-neutral-800 md:text-center font-semibold my-4 border-b border-blue-400 py-2">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 items-start lg:grid-cols-3 gap-8 mt-4 lg:container lg:mx-auto">
          <Card
            title="Agriculture"
            description="On-demand farming support services"
            icon={MdAgriculture}
          />
          <Card
            title="Construction"
            description="On-demand construction project solutions"
            icon={MdConstruction}
          />
          <Card
            title="Transportation"
            description="On-demand construction project solutions"
            icon={MdEmojiTransportation}
          />
          <Card
            title="Accomodation"
            description="On-demand construction project solutions"
            icon={MdHotel}
          />
        </div>
      </div>
      <div className="bg-gray-800 h-72"></div>
    </div>
  );
}
