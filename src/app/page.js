import AlertInfo from "./components/ui/AlertInfo";
import BusinessDetails from "./components/BusinessDetails";
import MapsEmbed from "./components/google/MapEmbed";

export default function Home() {
  return (
    <div className="mx-5 my-12">
      <header className="text-center">
        <h1 className="text-2xl">Home of Your Affordable Family Entertainment Center</h1>
      </header>

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
