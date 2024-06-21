import Head from "next/head";
import NepaliDateCard from "../components/NepaliDateCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>mero day</title>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>

      <main>
        <NepaliDateCard />
      </main>
    </div>
  );
}
