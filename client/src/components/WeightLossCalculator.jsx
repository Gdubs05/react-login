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
                <select name="time" onChange={handleInputChange}>
                  <option value="1">1 week</option>
                  <option value="2">2 weeks</option>
                  <option value="3">3 weeks</option>
                  <option value="4">4 weeks</option>
                  <option value="5">5 weeks</option>
                  <option value="6">6 weeks</option>
                  <option value="7">7 weeks</option>
                  <option value="8">8 weeks</option>
                  <option value="9">9 weeks</option>
                  <option value="10">10 weeks</option>
                  <option value="11">11 weeks</option>
                  <option value="12">12 weeks</option>
                  <option value="13">13 weeks</option>
                  <option value="14">14 weeks</option>
                  <option value="15">15 weeks</option>
                  <option value="16">16 weeks</option>
                  <option value="17">17 weeks</option>
                  <option value="18">18 weeks</option>
                  <option value="19">19 weeks</option>
                  <option value="20">20 weeks</option>
                  <option value="21">21 weeks</option>
                  <option value="22">22 weeks</option>
                  <option value="23">23 weeks</option>
                  <option value="24">24 weeks</option>
                  <option value="25">25 weeks</option>
                </select>
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
