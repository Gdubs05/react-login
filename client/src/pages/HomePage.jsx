import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <Header />
      <img
        className="background-image"
        src="../../public/images/dumbbells.jpg"
      ></img>
      <div className="welcome">
        <h1> Welcome to FeStrength </h1>
        <p>"Where Science Meets Strength"</p>
        <Link to="/login">
          <button className="button">Login</button>
        </Link>
      </div>
    </>
  );
}
