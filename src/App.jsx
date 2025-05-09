import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Homenavbar from "./components/Homenavbar";

function App() {
  return (
    <div>
      <Homenavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
