import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="how-it-works" element={<HowItWorks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;