import { Header } from "../components/Header";
import { CalorieCalculator } from "../components/CalorieCalculator";
import "./calorieCalculationPage.css";

export function CalorieCalculationPage() {
  return (
    <>
      <Header />
      <div className="calculationsContainer">
        <CalorieCalculator />
        <CalorieCalculator />
        <CalorieCalculator />
      </div>
    </>
  );
}
