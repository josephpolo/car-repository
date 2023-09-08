import { CustomFilter, Hero, SearchBar } from "@/components";
import CardCard from "@/components/CardCard";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {

  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold text-red-300">Car Catalog</h1>

          <p className="text-red-300">Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section className="text-white">
            <div className="home__cars wrapper">
              {allCars?.map((car) => (
                <CardCard car={car}/>
              ))}
            </div>
          </section>
        ):(
          <div className="text-white">
            <h2>Oops, no results</h2>
            <p className="text-white">{allCars?.message}</p>
          </div>
        )
        }
      </div>
    </main>
  );
}
