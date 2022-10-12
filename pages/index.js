import Head from "next/head";
import About from "../components/About";
import SkillList from "../components/SkillList";
import Heading from "../components/Heading";
import ProjectsList from "../components/ProjectList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>el2e10</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Heading />
      <About />
      <SkillList />
      <ProjectsList />
    </div>
  );
}
