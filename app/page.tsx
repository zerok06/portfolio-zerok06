import { About } from "@/components/About";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Cursor } from "@/components/Cursor";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Resume } from "@/components/Resume";
import { Testimonial } from "@/components/Testimonial";
import { Work } from "@/components/Work";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      {/* <Clients /> */}
      <Resume />
      {/* <section>services</section> */}
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
      <Cursor />
    </>
  );
}
