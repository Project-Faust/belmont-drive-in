import AlertInfo from "./components/ui/AlertInfo";
import BusinessDetails from "./components/BusinessDetails";
import MapsEmbed from "./components/google/MapEmbed";

import { Limelight } from "next/font/google";

const limelight = Limelight({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className="mx-5 my-12">
      {/* <section className="mx-auto"> */}
      <header className={`w-fit mx-auto bg-white text-black text-center rounded-lg p-5 ${limelight.className}`}>
        <h1 className="text-4xl mb-3">Welcome to the Belmont Drive-In Theatre</h1>
        <h2 className="text-2xl mt-3">Home of Your Affordable Family Entertainment Center</h2>
      </header>

      {/* </section> */}

      <section className="flex flex-col justify-center my-5">
        <AlertInfo />
      </section>

      <div className="flex flex-col lg:flex-row justify-evenly items-center">
        <main className="mx-2">
          <BusinessDetails />
        </main>

        <div className="flex">
          <MapsEmbed />
        </div>
      </div>

    </div>
  );
}
