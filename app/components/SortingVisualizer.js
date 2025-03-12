"use client";

import React, { useState, useEffect } from "react";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [swappingIndices, setSwappingIndices] = useState([]);
  const [speed, setSpeed] = useState(100); 

  // Generate random array
  const generateArray = () => {
    if (sorting) return;
    const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    setArray(arr);
    setSwappingIndices([]);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


  const bubbleSort = async () => {
    setSorting(true);
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setSwappingIndices([j, j + 1]);
        await sleep(speed);

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
        }
      }
    }
    setSwappingIndices([]);
    setSorting(false);
  };

  const selectionSort = async () => {
    setSorting(true);
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        setSwappingIndices([j, minIdx]);
        await sleep(speed);

        if (arr[j] < arr[minIdx]) minIdx = j;
      }
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      setArray([...arr]);
    }
    setSwappingIndices([]);
    setSorting(false);
  };

  const insertionSort = async () => {
    setSorting(true);
    let arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        setSwappingIndices([j, j + 1]);
        await sleep(speed);
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
      setArray([...arr]);
    }
    setSwappingIndices([]);
    setSorting(false);
  };

  const mergeSort = async (arr = array, l = 0, r = array.length - 1) => {
    if (l >= r || !sorting) return;
    const mid = Math.floor((l + r) / 2);

    await mergeSort(arr, l, mid);
    await mergeSort(arr, mid + 1, r);
    await merge(arr, l, mid, r);

    setArray([...arr]);
  };

  const merge = async (arr, l, mid, r) => {
    let left = arr.slice(l, mid + 1);
    let right = arr.slice(mid + 1, r + 1);
    let i = 0, j = 0, k = l;

    while (i < left.length && j < right.length) {
      setSwappingIndices([k]);
      await sleep(speed);

      if (left[i] <= right[j]) arr[k++] = left[i++];
      else arr[k++] = right[j++];
      setArray([...arr]);
    }

    while (i < left.length) {
      setSwappingIndices([k]);
      await sleep(speed);
      arr[k++] = left[i++];
    }

    while (j < right.length) {
      setSwappingIndices([k]);
      await sleep(speed);
      arr[k++] = right[j++];
    }
  };

  const quickSort = async (arr = array, low = 0, high = array.length - 1) => {
    if (low >= high || sorting) return;
    let pivotIdx = await partition(arr, low, high);

    await quickSort(arr, low, pivotIdx - 1);
    await quickSort(arr, pivotIdx + 1, high);

    setArray([...arr]);
  };

  const partition = async (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if(sorting) return;
      setSwappingIndices([j, high]);
      await sleep(speed);
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    return i + 1;
  };

  useEffect(() => {
    generateArray();
  }, []);

  return (
    <div className="p-2 text-center border-2 h-[70vh] flex flex-col justify-end">

      <div className="flex justify-center items-end h-40 gap-1 mt-5">
        {array.map((value, index) => (
          <div
          key={index}
          className={`w-10 flex items-center justify-center transition-all duration-300 ${
              swappingIndices.includes(index) ? "bg-red-500" : "bg-blue-600"
            }`}
            style={{ height: `${value * 3}px` }}
            >{value}</div>
        ))}
      </div>
        <div>
          <div>
            <button onClick={generateArray} disabled={sorting} className="bg-blue-500 text-white px-4 py-2 m-2 rounded">
                Generate New Array
            </button>
            <button onClick={bubbleSort} disabled={sorting} className="bg-green-500 text-white px-4 py-2 m-2 rounded">
                Bubble Sort
            </button>
            <button onClick={selectionSort} disabled={sorting} className="bg-red-500 text-white px-4 py-2 m-2 rounded">
                Selection Sort
            </button>
            <button onClick={insertionSort} disabled={sorting} className="bg-yellow-500 text-white px-4 py-2 m-2 rounded">
                Insertion Sort
            </button>
            <button onClick={() => mergeSort()} disabled={sorting} className="bg-purple-500 text-white px-4 py-2 m-2 rounded">
                Merge Sort
            </button>
            <button onClick={() => quickSort()} disabled={sorting} className="bg-pink-500 text-white px-4 py-2 m-2 rounded">
                Quick Sort
            </button>
          </div>

            <div className="flex items-center justify-center">
              <button className="flex items-center justify-center  bg-pink-500 text-white px-4 py-2 m-2 rounded" onClick={() => setSorting(!sorting)}>
                {sorting ? "Pause" : "Start"}
                
              </button>
            </div>
            <input
                type="range"
                min="10"
                max="500"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                className="w-1/3 my-4 accent-green-400"
            />
            <p>Speed: {speed}ms</p>

        </div>
    </div>
  );
};

export default SortingVisualizer;
