import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

import { useState } from 'react'
import Alert from "./Components/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");

  const removeClasses = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
  }

  const toggleMode = (mtype) => {

    removeClasses();

    switch (mtype) {
      case "primary":
        document.body.classList.add("bg-primary");
        showAlert("Primary theme set", "success");
        break;
      case "secondary":
        document.body.classList.add("bg-secondary");
        showAlert("Secondary theme set", "success");
        break;
      case "success":
        document.body.classList.add("bg-success");
        showAlert("Success theme set", "success");
        break;
      case "danger":
        document.body.classList.add("bg-danger");
        showAlert("Danger theme set", "success");
        break;
      case "warning":
        document.body.classList.add("bg-warning");
        showAlert("Warning theme set", "success");
        break;
      case "info":
        document.body.classList.add("bg-info");
        showAlert("Info theme set", "success");
        break;
      case "light":
        setMode("light");
        document.body.classList.add("bg-light");
        showAlert("Light mode set", "success");
        break;
      case "dark":
        setMode("dark");
        document.body.classList.add("bg-dark");
        showAlert("Dark mode set", "success");
        break;
      default:
        console.log("Error");
        break;
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm alert={showAlert} heading="Enter the text to analyze" mode={mode}></TextForm>} />
            <Route path="/about" element={<About mode={mode}></About>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

