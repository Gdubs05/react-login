import { Header } from "../components/Header";
import { Chart as ChartJS } from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import "./DataTrackerPage.css";

export function DataTrackerPage() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="chart1">Chart 1</div>

        <div className="chart2">Chart 2</div>

        <div className="chart3">Chart 3</div>
      </div>
    </>
  );
}
