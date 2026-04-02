import { Header } from "../components/Header";
import "./DataTrackerPage.css";
import { useEffect, useState } from "react";
import { WeightTracker } from "../components/WeightTracker";

export function DataTrackerPage() {
  const [latestEntry, setLatestEntry] = useState(null);

  const fetchLatestEntry = () => {
    fetch("http://localhost:3001/weights")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setLatestEntry(data[data.length - 1]); //show last logged entry
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchLatestEntry();
  }, []);

  return (
    <>
      <Header />
      {/* Pass fetchLatestEntry to WeightTracker so it can update after logging */}
      <WeightTracker refreshLatest={fetchLatestEntry} />
      <div>
        {latestEntry ? (
          <h1>
            {latestEntry.date}: {latestEntry.weight} lbs, {latestEntry.bodyfat}%
          </h1>
        ) : (
          <h1>No entries yet</h1>
        )}
      </div>
    </>
  );
}
