import Link from "next/link";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero autoSlide={true} />
    </div>
  );
}
