// This component is used to define the routes of different pages using react-router-dom

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import StudentAdmissionForm from './Pages/StudentAdmissionForm';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admission-form' element={<StudentAdmissionForm />} />
      </Routes>
    </>
  );
}

export default App;
