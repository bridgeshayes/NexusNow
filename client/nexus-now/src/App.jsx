import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
//import components here

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}