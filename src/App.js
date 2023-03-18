import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

function App() {
  //wheteher dark mode is enabled or not
  const [mode, setMode] = useState("success");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  const toggleMode = () => {
    if (mode === "success") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(34 62 44)";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtils -Enabled Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils -Install now";
      // }, 1000);
      // setInterval(() => {
      //   document.title = "TextUtils -You have virus";
      // }, 1200);
    } else {
      setMode("success");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils -Enabled Light Mode";
    }
  };

  return (
    <>
      <Router>
      <Navbar title="TextUtils App" mode={mode} toggleMode={toggleMode} />
      <div className="container mt-2">
        <Alert alert={alert} />
      </div>
      <div className="container mt-2">
        <Routes>
         
            <Route path='/about' element={<About />} />
        

            <Route path='/' element={<TextForm
              showAlert={showAlert}
              mode={mode}
              heading="Enter the text to utilize"
            />} />

        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
