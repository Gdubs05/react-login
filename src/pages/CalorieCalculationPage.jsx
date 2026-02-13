import { useState } from "react";
import { Header } from "../components/Header";
import { tdeeCalculation } from "../utils/tdeeCalulation";

export function TdeePage() {
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
      <Header />
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
                placeholder="Weight in pounds (lbs)"
                name="weight"
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
        onClick={() => {
          calculateCalories();
        }}
      >
        CALCULATE
      </button>
      <p>TDEE Calories: {calculatedCalories.tdeeCalories}</p>
      <p>BMR Calories: {calculatedCalories.bmrCalories}</p>
    </>
  );
}
