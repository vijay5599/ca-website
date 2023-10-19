import Details from "./pages/Details";
import Fullpage from "./pages/Fullpage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="m-0">
      <Router>
        <Routes>
          <Route path="/" element={<Fullpage />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
