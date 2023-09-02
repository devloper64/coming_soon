import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SShPrivacyPolicy from "./SssTerminalPrivacyPolicy";
import Home from "./home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy-policy-ssh-terminal" element={<SShPrivacyPolicy />} />
            </Routes>
        </Router>
    );
}

export default App;