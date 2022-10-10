import Head from "next/head";
import About from "../components/About";
import Heading from "../components/Heading";
import Projects from "../components/Projects";

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
      <Projects />
    </div>
  );
}
