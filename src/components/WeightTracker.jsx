import { useState } from "react";

export function WeightTracker({ refreshLatest }) {
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

  const logWeight = async () => {
    try {
      await fetch("http://localhost:3001/weights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputValues),
      });
      setInputValues({ weight: "", bodyfat: "", date: "" }); //clear form
      refreshLatest(); //update latest entry in parent
    } catch (error) {
      console.error("Error logging weight:", error);
    }
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
                  value={inputValues.weight}
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
                  value={inputValues.bodyfat}
                />
                %
              </td>
            </tr>

            <tr className="dateSelector">
              <td>Date</td>
              <td>
                <input
                  onChange={handleInputChange}
                  type="date"
                  name="date"
                  value={inputValues.date}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button className="button" onClick={logWeight}>
          Log Weight
        </button>
      </div>
    </>
  );
}
