import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard/Dashboard';
import ProjectList from './Pages/ProjectList/ProjectList';
import Users from './Pages/Users/Users';
import Maintenance from './Pages/Maintenance/Maintenance';
import EmployeeList from './Pages/Employee List/EmployeeList';
import Positions from './Components/MaintenanceItem/Positions/Positions';
import ProjectDivisions from './Components/MaintenanceItem/ProjectDivisions/ProjectDivisions';
import ProjectTeam from './Components/MaintenanceItem/ProjectTeamItem/ProjectTeam';
import LoginForm from './Components/Login form/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/employee-list" element={<EmployeeList />} />
              <Route path="/project-list" element={<ProjectList />} />
              <Route path="/users" element={<Users />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/maintenance/positions" element={<Positions />} /> 
              <Route path="/maintenance/project-divisions" element={<ProjectDivisions />} /> 
              <Route path="/maintenance/project-team" element={<ProjectTeam />} /> 
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/" element={<Navigate to="/dashboard" />} /> {/* Redirect to dashboard by default */}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
