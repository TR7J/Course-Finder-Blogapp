/* IMPORTS */
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/authentication/signup';
import Login from './pages/authentication/login';
import Home from './pages/home/home'; 
import Testimonies from './components/testimonies/testimonies';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import CreatePost from './pages/createPost/createPost';


/* BACKEND URL */
axios.defaults.baseURL = 'http://localhost:4000'
/*To ensure sending of the necessary session cookies along with requests to backend */
axios.defaults.withCredentials = true

function App() {
  return (
    <div>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <BrowserRouter>
        <Routes>
          <Route exact path='/Signup' element={<SignUp/>}/>
          <Route path='/LogIn' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/> 
          <Route path='/' element={<Testimonies/>}/>
          <Route path='/CreatePost' element={<CreatePost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

