import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import General from "./pages/General";
import Health from "./pages/Health";
import Science from "./pages/Science";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import Header from "./components/Header/Header";
import SingleNew from "./pages/SingleNew";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-new/:id" element={<SingleNew />} />
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/general" element={<General />} />
        <Route path="/health" element={<Health />} />
        <Route path="/science" element={<Science />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
