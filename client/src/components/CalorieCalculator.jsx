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
        <h3>TDEE</h3>
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
                <select name="height" onChange={handleInputChange}>
                  <option value="53">4ft 5in</option>
                  <option value="54">4ft 6in</option>
                  <option value="55">4ft 7in</option>
                  <option value="56">4ft 8in</option>
                  <option value="57">4ft 9in</option>
                  <option value="58">4ft 10in</option>
                  <option value="59">4ft 11in</option>
                  <option value="60">5 ft 0in</option>
                  <option value="61">5ft 1in</option>
                  <option value="62">5ft 2in</option>
                  <option value="63">5ft 3in</option>
                  <option value="64">5ft 4in</option>
                  <option value="65">5ft 5in</option>
                  <option value="66">5ft 6in</option>
                  <option value="67">5ft 7in</option>
                  <option value="68">5ft 8in</option>
                  <option value=" 69"> 5ft 9in</option>
                  <option value="70">5ft 10in</option>
                  <option value="71">5ft 11in</option>
                  <option value="72">6ft 0in</option>
                  <option value="73">6ft 1in</option>
                  <option value="74">6ft 2in</option>
                  <option value="75">6ft 3in</option>
                  <option value="76">6ft 4in</option>
                  <option value="77">6ft 5in</option>
                  <option value="78">6ft 6in</option>
                  <option value="79">6ft 7in</option>
                  <option value="80">6ft 8in</option>
                </select>
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
