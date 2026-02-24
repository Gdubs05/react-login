import { Header } from "../components/Header";
import { CalorieCalculator } from "../components/CalorieCalculator";
import { WeightLossCalculator } from "../components/WeightLossCalculator";
import "./calorieCalculationPage.css";

export function CalorieCalculationPage() {
  return (
    <>
      <Header />
      <div className="calculationsContainer">
        <CalorieCalculator />
        <WeightLossCalculator />
        <CalorieCalculator />
      </div>
    </>
  );
}
