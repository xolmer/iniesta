import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex-3xl font-bold underline">
      <Head>
        <title>Iniesta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hellow World</h1>
    </div>
  );
};

export default Home;
