import { Cursor } from "@/components/Cursor";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Resume } from "@/components/Resume";
import { Work } from "@/components/Work";


export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <section>about</section>
      <Resume />
      <section>services</section>
      <Work />
      <section>contact</section>
      <Footer />
      <Cursor />
    </>
  );
}
