import Loading from "./components/Loading";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
        <Navbar />
      <div className="flex items-center justify-center h-screen font-bold text-2xl">
        Hello world
      </div>
      <Loading/>
    </>
  );
}
