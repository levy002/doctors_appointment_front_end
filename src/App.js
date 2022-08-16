import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './components/splash/Splash';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Doctor from './components/doctor/Doctors';
import AppointmentForm from './components/appointment/AppointmentForm';
import './App.css';
import { ViewProvider, MyComponent } from './navigation/ViewPort';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <ViewProvider>
            <MyComponent />
          </ViewProvider>
        </div>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/book_appointment" element={<AppointmentForm />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
