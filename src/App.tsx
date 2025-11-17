import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';

const googleReviewURL = "PASTE_PLACE_ID_LINK_HERE";
const adminKey = "SECRET123";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home googleReviewURL={googleReviewURL} />} />
        <Route path="/admin" element={<Admin adminKey={adminKey} />} />
      </Routes>
    </Router>
  );
}

export default App;
