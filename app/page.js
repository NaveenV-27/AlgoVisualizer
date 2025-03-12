"use client"
import Link from "next/link";
import Navbar from "./components/Navbar";
import SortingVisualizer from "./components/SortingVisualizer";


export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen font-bold text-2xl">
        Hello world
        <Link href={"/sorting"}>
          <button className="border-2 rounded-2xl p-2 cursor-pointer bg-amber-100 text-black">Sorting algorithms</button>
        </Link>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        {/* <SortingVisualizer /> */}
      </div>
    </>
  );
}
