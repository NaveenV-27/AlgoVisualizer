import SortingVisualizer from "../components/SortingVisualizer";

export default function Sorting() {
  return (
    <div className="py-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Sorting Algorithm Visualizer</h1>
      <SortingVisualizer />
    </div>
  );
}