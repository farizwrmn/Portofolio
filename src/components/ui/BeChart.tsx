"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

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
  BeData: ChartData;
}

const BeChart: React.FC<ChartProps> = ({ BeData }) => {
  return (
    <div className="w-full h-64 mt-12">
      <p className="text-slate-400 text-center italic">Back End</p>
      <Bar data={BeData} options={{ responsive: true }} />
    </div>
  );
};

export default BeChart;
