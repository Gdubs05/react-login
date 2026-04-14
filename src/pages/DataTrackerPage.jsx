import { Header } from "../components/Header";
import "./DataTrackerPage.css";
import { useEffect, useState } from "react";
import { WeightTracker } from "../components/WeightTracker";
import { WeightGraph } from "../components/WeightGraph";
import { ResponsiveContainer } from "recharts";

export function DataTrackerPage() {
  const [entries, setEntries] = useState([]);

  const fetchEntries = () => {
    fetch("http://localhost:3001/weights")
      .then((res) => res.json()) //converts json http into usable JavaScript
      .then((data) => {
        //"data" can be called whatever you want, just a var name
        if (data.length > 0) {
          const sorted = [...data].sort(
            (a, b) => new Date(a.date) - new Date(b.date),
          );
          setEntries(sorted);
        } else {
          setEntries([]);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <>
      <Header />
      {/* Pass fetchLatestEntry to WeightTracker so it can update after logging */}
      <div className="container">
        <WeightTracker refreshEntries={fetchEntries} />
        <WeightGraph data={entries} />
      </div>
    </>
  );
}
