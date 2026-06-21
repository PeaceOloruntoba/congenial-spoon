import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WorkDetails from './pages/WorkDetails';
import WorkCatalog from './pages/WorkCatalog';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkCatalog />} />
        <Route path="/work/:id" element={<WorkDetails />} />
      </Routes>
    </Router>
  );
}