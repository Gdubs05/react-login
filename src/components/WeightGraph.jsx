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
  ResponsiveContainer,
} from "recharts";

export function WeightGraph({ data }) {
  return (
    <div className="graph">
      <p>Progress</p>
      <LineChart width={750} height={200} data={data}>
        <CartesianGrid></CartesianGrid>
        <XAxis dataKey="date"></XAxis>
        <YAxis></YAxis>
        <Tooltip
          formatter={(value, name) => {
            if (name === "weight") {
              return `${value}lbs`;
            }
            return value;
          }}
        />
        <Legend></Legend>
        <Line type="monotone" dataKey="weight" stroke="green"></Line>
      </LineChart>
      <LineChart width={750} height={200} data={data}>
        <CartesianGrid></CartesianGrid>
        <XAxis dataKey="date"></XAxis>
        <YAxis></YAxis>
        <Tooltip
          formatter={(value, name) => {
            if (name === "bodyfat") {
              return `${value}%`;
            }
            return value;
          }}
        />
        <Legend></Legend>
        <Line type="monotone" dataKey="bodyfat" stroke="red"></Line>
      </LineChart>
    </div>
  );
}
