import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";
import Statistics from "./Statistics";
import "./App.css";
import Calendar from "./Calendar";

function App() {
  return (
    <Router>
      <div className="container mx-auto max-w-5xl p-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
