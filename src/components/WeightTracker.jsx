import { useState } from "react";

export function WeightTracker() {
  const [inputValues, setInputValues] = useState({
    weight: "",
    bodyfat: "",
    date: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };

  return (
    <>
      <div className="calorieCalculator">
        <h3>Weight Tracker</h3>
        <table>
          <tbody>
            <tr className="weightSelector">
              <td>Weight</td>
              <td>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="weight"
                  className="textbox"
                />
                lbs
              </td>
            </tr>

            <tr className="bodyfatSelector">
              <td>Bodyfat</td>
              <td>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="bodyfat"
                  className="textbox"
                />
                %
              </td>
            </tr>

            <tr className="dateSelector">
              <td>Date</td>
              <td>
                <input onChange={handleInputChange} type="date" name="date" />
              </td>
            </tr>
          </tbody>
        </table>

        <button className="button" onClick={() => {}}>
          Log Weight
        </button>
      </div>
    </>
  );
}
