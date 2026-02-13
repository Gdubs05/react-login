import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <Header />
      <div className="welcome">
        <h1> Welcome to FeStrength </h1>
        <p>"Where Science Meets Strength"</p>
        <p>Maybe a button for you to click</p>
        <Link to="/login">
          <button className="button">Login</button>
        </Link>
      </div>
    </>
  );
}
