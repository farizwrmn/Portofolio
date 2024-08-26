"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Link from "next/link";

ChartJS.register(CategoryScale, LinearScale, BarElement);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

interface ChartProps {
  ProData: ChartData;
}

const ProChart: React.FC<ChartProps> = ({ ProData }) => {
  return (
    <>
      <div className="w-full h-64 md:mb-20 mb-5">
        <p className="text-slate-400 text-center italic">
          Programming Language
        </p>
        <Bar data={ProData} options={{ responsive: true }} />
      </div>
    </>
  );
};

export default ProChart;
