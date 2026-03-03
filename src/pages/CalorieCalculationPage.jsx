import { Header } from "../components/Header";
import { CalorieCalculator } from "../components/CalorieCalculator";
import { WeightLossCalculator } from "../components/WeightLossCalculator";
import "./calorieCalculationPage.css";

export function CalorieCalculationPage() {
  return (
    <>
      <Header />
      <img src="../../public/images/food.png" className="background-image" />
      <div className="calculationsContainer">
        <CalorieCalculator />
        <WeightLossCalculator />
        <CalorieCalculator />
      </div>
    </>
  );
}
