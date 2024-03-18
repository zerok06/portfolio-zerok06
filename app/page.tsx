import { Cursor } from "@/components/Cursor";
import { Hero } from "@/components/Hero";


export default function Home() {
  return (
    <>
      <Hero />
      <section>about</section>
      <section>services</section>
      <section>work</section>
      <section>contact</section>
      <section>footer</section>
      <Cursor />
    </>
  );
}
