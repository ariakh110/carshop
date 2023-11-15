import Image from "next/image";
import { CustomFilter, Hero, SearchBar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <h1 className="text-4xl font-extrabold">Car catalogue</h1>
        <p>explore the car you might like</p>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="year" />
            <CustomFilter title="fule" />
          </div>
        </div>
      </div>
    </main>
  );
}
