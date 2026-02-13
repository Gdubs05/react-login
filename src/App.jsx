import "./App.css";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { CalorieCalculationPage } from "./pages/CalorieCalculationPage";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="tdee" element={<CalorieCalculationPage />} />
    </Routes>
  );
}

export default App;
