import { useState } from "react";
import { weightLossCalculation } from "../utils/weightLossCalculation";
import "./WeightLossCalculator.css";

export function WeightLossCalculator() {
  const [inputValues, setInputValues] = useState({
    currentWeight: "",
    desiredWeight: "",
    tdee: "",
    time: "",
  });

  const [calculatedCalories, setCalculatedCalories] = useState({
    dailyCalories: "",
    dailyDeficit: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };

  const calculateCalories = () => {
    if (inputValues) {
      console.log("CALCULATED");
      setCalculatedCalories(weightLossCalculation(inputValues));
      console.log(calculatedCalories);
    }
  };

  return (
    <>
      <div className="calorieCalculator">
        <h3>Weight Loss</h3>
        <table>
          <tbody>
            <tr className="weightSelector">
              <td>Current Weight</td>
              <td>
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Weight (lbs)"
                  name="currentWeight"
                  className="textbox"
                />
              </td>
            </tr>

            <tr className="weightSelector">
              <td>Desired Weight</td>
              <td>
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Weight (lbs)"
                  name="desiredWeight"
                  className="textbox"
                />
              </td>
            </tr>

            <tr className="tdeeSelector">
              <td>TDEE</td>
              <td>
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="TDEE Calories"
                  name="tdee"
                  className="textbox"
                />
              </td>
            </tr>

            <tr className="timeSelector">
              <td>Number of Weeks</td>
              <td>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="time"
                  className="textbox"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          className="button"
          onClick={() => {
            calculateCalories();
            setIsVisible(!isVisible);
          }}
        >
          CALCULATE
        </button>
        {isVisible && (
          <div>
            <p>Daily Calories: {calculatedCalories.dailyCalories}</p>
            <p>Daily Deficit: {calculatedCalories.dailyDeficit}</p>
          </div>
        )}
      </div>
    </>
  );
}
