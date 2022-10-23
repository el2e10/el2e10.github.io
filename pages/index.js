import Head from "next/head";
import About from "../components/About";
import SkillList from "../components/SkillList";
import Heading from "../components/Heading";
import ProjectsList from "../components/ProjectList";
import WorkList from "../components/WorkList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="lg:mx-36">
      <Head>
        <title>el2e10</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap");
        </style>
      </Head>
      <Heading />
      <About />
      <WorkList />
      <SkillList />
      <ProjectsList />
      <Footer />
    </div>
  );
}
