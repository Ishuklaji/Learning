import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Play from "./container/Play/Play";

import Result from "./components/Result/Result";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>

          <Route path="/" element={<Play />} />
          <Route path="/result" element={<Result />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
