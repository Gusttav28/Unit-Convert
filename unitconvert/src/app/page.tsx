import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
          <Navbar/>
          <About/>
      </main>
    </div>
  );
}
