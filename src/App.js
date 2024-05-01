import logo from "./logo.svg";
import "./App.css";
import "./output.css";
import { NextUIProvider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  // const navigate = useNavigate();

  return (
    <>
      <NextUIProvider>
        <Home />
      </NextUIProvider>
    </>
  );
}

export default App;
