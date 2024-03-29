import Head from "next/head";
import firebase from "../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";
import NavBar from "../components/NavBar";
import MainCTA from "../components/MainCTA";
import ExampleNewsletter from "../components/ExampleNewsletter";
import Footer from "../components/Footer";

// POST is for adding a new database entry
// PUT is for updating an existing database entry
// GET is for fetching the existing database entry
// DELETE is for deleting the existing database entry
// axios.post('api/entry', {title:"this is a title", slug:"this-is-a-slug", body:"LoremLoremIpsum Ipsum Lora gefardia"})

export default function Home() {



  return (
    <div className="flex flex-col items-center  min-h-screen pt-2 bg-gray-200 ">
      <Head>
        <title>War by the day</title>
      </Head>

      <div className="w-full">
        <NavBar />
      </div>
      <main className="flex flex-col  justify-center w-full px-20 text-left items-center ">
        <MainCTA />
        <div className="w-600">
          <ExampleNewsletter />
        </div>
      </main>

    </div>
  );
}
