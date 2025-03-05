import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateClub from './components/private/CreateClub';
import Login from './components/public/Login';
import ManageUser from './components/private/ManageUser';
import ManageBooks from './components/private/ManageBooks';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/createclub" element={<CreateClub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/managebooks" element={<ManageBooks />} />
        <Route path="/manageuser" element={<ManageUser />} />
      </Routes>
    </Router>
  );
}

export default App;