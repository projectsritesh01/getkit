import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ArticlePage from "./pages/ArticlePage";
import Insights from "./pages/Insights";
import Kits from "./pages/Kits";
import Community from "./pages/Community";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="kits" element={<Kits />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:slug" element={<ArticlePage />} />
          <Route path="community" element={<Community />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;