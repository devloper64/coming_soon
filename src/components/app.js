import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SShPrivacyPolicy from "./SssTerminalPrivacyPolicy";
import Home from "./home";
import EdokPrivacyPolicy from "./EdokPrivacyPolicy";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy-policy-ssh-terminal" element={<SShPrivacyPolicy />} />
                <Route path="/privacy-policy-edok" element={<EdokPrivacyPolicy />} />
            </Routes>
        </Router>
    );
}

export default App;