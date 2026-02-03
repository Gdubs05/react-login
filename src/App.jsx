import "./App.css";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
