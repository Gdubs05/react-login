import "./WeightGraph.css";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ScatterChart,
} from "recharts";

export function WeightGraph({ data }) {
  return (
    <div className="graph">
      <p>Simple Line Chart</p>
      <LineChart width={750} height={150} data={data}>
        <CartesianGrid></CartesianGrid>
        <XAxis dataKey="date"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Line type="monotone" dataKey="weight" stroke="green"></Line>
      </LineChart>
      <LineChart width={750} height={150} data={data}>
        <CartesianGrid></CartesianGrid>
        <XAxis dataKey="date"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Line type="monotone" dataKey="bodyfat" stroke="red"></Line>
      </LineChart>
    </div>
  );
}
