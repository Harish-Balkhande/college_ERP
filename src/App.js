// This component is used to define the routes of different pages using react-router-dom

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Signup from './Pages/Signup';
import StudentAdmissionForm from './Pages/StudentAdmissionForm';
import Attendanence from './Pages/Attendanence';
import Dashboard from './Components/Students/Dashboard';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admission-form' element={<StudentAdmissionForm />} />
          {/* Students path */}
          <Route path='/attendence' element={<Attendanence />} />
          <Route path='/student-dashboard' element={<Dashboard />} />

        </Routes>
      </Layout>
    </>
  );
}

export default App;
