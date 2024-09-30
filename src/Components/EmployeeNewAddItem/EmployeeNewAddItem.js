import React, { useState } from "react";
import './EmployeeNewAddItem.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function EmployeeNewAddItem({ handleClose, addEmployee, showSuccessMessage, successMessage, clearSuccessMessage }) {
    const [formData, setFormData] = useState({
        photo: null,
        lastName: '',
        firstName: '',
        middleName: '',
        birthday: '',
        gender: '',
        address: '',
        contactNo: '',
        maritalStatus: '',
        position: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] });
    };

    const handleSave = () => {
        const allFieldsFilled = Object.values(formData).every(field => field !== '' && field !== null);
        if (allFieldsFilled) {
            addEmployee(formData);
            setErrorMessage('');
            showSuccessMessage('Data successfully saved');
            handleClose();
        } else {
            setErrorMessage('All fields are required');
        }
    };

    return (
        <div className="employee-form">
            <div className="employee-header">
                <h2>New Employee</h2>
            </div>
            <hr />
            <form>
                <label>Photo:
                    <input type="file" name="photo" onChange={handleFileChange} />
                </label>
                <label>Last Name:
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </label>
                <label>First Name:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                </label>
                <label>Middle Name:
                    <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
                </label>
                <label>Birthday:
                    <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />
                </label>
                <label>Gender:
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value=""></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>
                <label>Address:
                    <textarea name="address" value={formData.address} onChange={handleChange} />
                </label>
                <label>Contact no:
                    <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} />
                </label>
                <label>Marital Status:
                    <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
                        <option value=""></option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Widow">Widow</option>
                    </select>
                </label>
                <label>Position:
                    <select name="position" value={formData.position} onChange={handleChange}>
                        <option value=""></option>
                        <option value="Civil Engineer">Civil Engineer</option>
                        <option value="Foreman">Foreman</option>
                        <option value="Mason">Mason</option>
                    </select>
                </label>
            </form>
            <hr />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="employee-btn">
                <button type="button" onClick={handleSave}>Save</button>
                <button type="button" onClick={handleClose}>Close</button>
            </div>
            <Modal
                open={!!successMessage}
                onClose={clearSuccessMessage}
                aria-labelledby="success-modal-title"
                aria-describedby="success-modal-description"
            >
                <Box className="success-modal">
                    <h2 id="success-modal-title">Success</h2>
                    <p id="success-modal-description">{successMessage}</p>
                </Box>
            </Modal>
        </div>
    );
}

export default EmployeeNewAddItem;
