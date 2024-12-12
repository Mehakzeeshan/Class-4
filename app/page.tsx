import Image from "next/image";
import HeroSection from "./components/heroSection";
import Header from "./components/header";

export default function Home () {
  return (
    // main shows that this page is main
    <main>
      < Header />
      < HeroSection />
    </main>
  )
}