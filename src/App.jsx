import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CreateTask from './pages/CreateTask.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-task" element={<CreateTask />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;