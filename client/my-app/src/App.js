
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import User from './components/User';
import UserDetails from './components/UserDetails';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<User/>} />
       <Route path='/userDetails/:id' element={<UserDetails />} />
      <Route path='/editDetails/:id' element={<EditUser />}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
