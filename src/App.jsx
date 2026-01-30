import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
    </Routes>
  );
}

export default App;
