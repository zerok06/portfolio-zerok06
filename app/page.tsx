import { Cursor } from "@/components/Cursor";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Resume } from "@/components/Resume";


export default function Home() {
  return (
    <>
      <Hero />
      <section>about</section>
      <Resume />
      <section>services</section>
      <section>work</section>
      <section>contact</section>
      <Footer />
      <Cursor />
    </>
  );
}
