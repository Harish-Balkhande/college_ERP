// This component is used to define the routes of different pages using react-router-dom

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Signup from './Pages/Signup';
import StudentAdmissionForm from './Pages/Student/StudentAdmissionForm';
import Dashboard from './Pages/Student/Dashboard';
import Layout from './Components/Layout/Layout';
import AttendanceUI from './Pages/Student/Attendanence';
import StudentFeesDetails from './Pages/Student/StudentFeesDetails';
import StudentInformation from './Pages/Student/StudentInformation';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admission-form' element={<StudentAdmissionForm />} />
          {/* Students path */}
          <Route path='/attendence' element={<AttendanceUI />} />
          <Route path='/student-dashboard' element={<Dashboard />} />
          <Route path='/student-fees-details' element={<StudentFeesDetails />} />
          <Route path='/student-information' element={<StudentInformation />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
