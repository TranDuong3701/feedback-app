import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";
import Homepage from "./components/pages/Homepage";
function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<Homepage />} />
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    );
}

export default App;
