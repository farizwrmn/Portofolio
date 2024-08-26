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
  CloudData: ChartData;
}

const CloudChart: React.FC<ChartProps> = ({ CloudData }) => {
  return (
    <div className="w-full h-64 mt-12">
      <p className="text-slate-400 text-center italic">Cloud</p>
      <Bar data={CloudData} options={{ responsive: true }} />
    </div>
  );
};

export default CloudChart;
