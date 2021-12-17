import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";
import Homepage from "./pages/Homepage";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
