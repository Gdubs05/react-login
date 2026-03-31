import { Header } from "../components/Header";
import "./DataTrackerPage.css";
import { useEffect, useState } from "react";
import { WeightTracker } from "../components/WeightTracker";

export function DataTrackerPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.text()) //converts response to text
      .then((data) => setMessage(data)) //saves text in state
      .catch((err) => console.error(err)); //handles errors
  }, []);

  return (
    <>
      <Header />
      <WeightTracker />
      <div>
        <h1>{message}</h1>
      </div>
    </>
  );
}
