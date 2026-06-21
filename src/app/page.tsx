import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Programs from "@/sections/Programs";
import ProgramDetails from "@/sections/ProgramDetails";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Programs/>
      <ProgramDetails />
    </>
  );
}