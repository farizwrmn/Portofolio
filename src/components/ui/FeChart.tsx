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
  FeData: ChartData;
}

const FeChart: React.FC<ChartProps> = ({ FeData }) => {
  return (
    <div className="w-full h-64">
      <p className="text-slate-400 text-center italic">Front End</p>
      <Bar data={FeData} options={{ responsive: true }} />
    </div>
  );
};

export default FeChart;
