import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import MessageSend from "@/components/MessageSend";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  
  return (
    <>
      <Header />
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <MessageSend />
      </main>
    </>
  );
}
