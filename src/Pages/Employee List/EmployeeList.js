import React, { useState } from 'react';
import './EmployeeList.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Profile1 from '../../Assets/Images/businessman-avatar-man.png';
import Profile2 from '../../Assets/Images/business-female-avatar-.png';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import EmployeeNewAddItem from '../../Components/EmployeeNewAddItem/EmployeeNewAddItem';

function EmployeeList() {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('active');
    const [employees, setEmployees] = useState([
        { id: 1, ecode: '202078946', name: 'Smith John', position: 'Foreman', profileImg: Profile1, status: 'active' },
        { id: 2, ecode: '202078947', name: 'Wilison George', position: 'Mason', profileImg: Profile2, status: 'active' },
    ]);
    const [selectedEmployee, setSelectedEmployee] = useState(null); // State to store selected employee
    const [successMessage, setSuccessMessage] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addEmployee = (employeeData) => {
        const newEmployee = {
            id: employees.length + 1,
            ecode: `20207${8948 + employees.length}`,
            name: `${employeeData.firstName} ${employeeData.lastName}`,
            position: employeeData.position,
            profileImg: URL.createObjectURL(employeeData.photo), // Convert the file object to a URL
            status: 'active'
        };
        setEmployees([...employees, newEmployee]);
    };

    const showSuccessMessage = (message) => {
        setSuccessMessage(message);
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    const handleProfileClick = (employee) => {
        setSelectedEmployee(employee);
    };

    const handleBackClick = () => {
        setSelectedEmployee(null);
    };

    const filteredEmployees = employees.filter(employee => employee.status === activeTab);

    return (
        <div className="employee-list-container">
            {!selectedEmployee ? (
                <>
                    <div className="header">
                        <h2>List of Employees</h2>
                        <hr />
                        <button className="new-employee-btn" onClick={handleOpen}>
                            <AddIcon /> New Employee
                        </button>
                    </div>
                    {successMessage && <div className="success-message">{successMessage}</div>}
                    <div className='employee-content'>
                        <div className="employee-controls">
                            <button className={`status-btn ${activeTab === 'active' ? 'active' : ''}`} onClick={() => setActiveTab('active')}>Active</button>
                            <button className={`status-btn ${activeTab === 'inactive' ? 'inactive' : ''}`} onClick={() => setActiveTab('inactive')}>Inactive</button>
                        </div>
                        <hr />
                        <div className="table-controls-employee">
                            <label>
                                <select>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                                <span>records per page</span>
                            </label>
                            <label>Search:
                                <input type="search" placeholder="Search" />
                            </label>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>E-code</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEmployees.map((employee) => (
                                    <tr key={employee.id}>
                                        <td><img src={employee.profileImg} alt="Profile" className="profile-img" /></td>
                                        <td>{employee.ecode}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.position}</td>
                                        <td>
                                            <a href="#" className="view-link" onClick={() => handleProfileClick(employee)}>
                                                <RemoveRedEyeIcon />Profile
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination-controls-employee">
                            <span>Showing 1 to {filteredEmployees.length} of {filteredEmployees.length} entries</span>
                            <div className="pagination-employee">
                                <button className="page-btn"><ArrowBackIcon />Previous</button>
                                <span className="current-page">1</span>
                                <button className="page-btn">Next<ArrowForwardIcon /></button>
                            </div>
                        </div>
                    </div>

                    <Modal open={open} onClose={handleClose}>
                        <Box className="modal-box">
                            <EmployeeNewAddItem handleClose={handleClose} addEmployee={addEmployee} showSuccessMessage={showSuccessMessage} />
                        </Box>
                    </Modal>
                </>
            ) : (
                <div className="employee-detail">
                    <div className="employee-detail-content">
                        <img src={selectedEmployee.profileImg} alt="Profile" className="profile-img-large" />
                        <div className="employee-info">
                            <p>Name: {selectedEmployee.name}</p>
                            <p>Birthday: {selectedEmployee.birthday}</p>
                            <p>Age: {selectedEmployee.age}</p>
                            <p>Address: {selectedEmployee.address}</p>
                            <p>Status: {selectedEmployee.status}</p>
                            <p>Position: {selectedEmployee.position}</p>
                            <p>Profile Status: {selectedEmployee.profileStatus}</p>
                            <div>
                                <button>Save</button>
                                <button>Edit</button>
                                <button onClick={handleBackClick}>Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EmployeeList;


