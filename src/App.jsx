import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/catalog" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
