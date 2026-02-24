import { useState } from "react";
import { tdeeCalculation } from "../utils/tdeeCalulation";
import "./CalorieCalculator.css";

export function CalorieCalculator() {
  const [inputValues, setInputValues] = useState({
    gender: "",
    weight: "",
    height: "",
    age: "",
    activity: "",
  });

  const [calculatedCalories, setCalculatedCalories] = useState({
    tdeeCalories: "",
    bmrCalories: "",
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
      setCalculatedCalories(tdeeCalculation(inputValues));
      console.log(calculatedCalories.bmrCalories);
    }
  };

  return (
    <>
      <div className="calorieCalculator">
        <table>
          <tbody>
            <tr className="genderSelector">
              <td>Gender</td>
              <td>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleInputChange}
                    checked={inputValues.gender === "male"}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleInputChange}
                    checked={inputValues.gender === "female"}
                  />
                  Female
                </label>
              </td>
            </tr>

            <tr className="weightSelector">
              <td>Weight</td>
              <td>
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Weight (lbs)"
                  name="weight"
                  className="textbox"
                />
              </td>
            </tr>

            <tr className="heightSelector">
              <td>Height</td>
              <td>
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="inches"
                  name="height"
                  className="textbox"
                />
              </td>
            </tr>

            <tr className="ageSelector">
              <td>Age</td>
              <td>
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Age in years"
                  name="age"
                  className="textbox"
                />
              </td>
            </tr>
            <tr className="activity">
              <td>Activity Level</td>
              <td>
                <select name="activity" onChange={handleInputChange}>
                  <option value="1.2">Sedentary</option>
                  <option value="1.375">Lightly Active</option>
                  <option value="1.55">Moderately Active</option>
                  <option value="1.725">Very Active</option>
                  <option value="1.9">Extra Active</option>
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
            <p>TDEE Calories: {calculatedCalories.tdeeCalories}</p>
            <p>BMR Calories: {calculatedCalories.bmrCalories}</p>
          </div>
        )}
      </div>
    </>
  );
}
