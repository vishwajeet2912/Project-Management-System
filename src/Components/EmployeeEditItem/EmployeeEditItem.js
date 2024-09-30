// // import React, { useState } from 'react';
// // import './EmployeeEditItem.css'; // Create and import a CSS file for styling if needed

// // const EmployeeEditItem = ({ employee, handleClose, updateEmployee }) => {
// //     const [editEmployeeData, setEditEmployeeData] = useState(employee);

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setEditEmployeeData({ ...editEmployeeData, [name]: value });
// //     };

// //     const handleSave = () => {
// //         updateEmployee(editEmployeeData);
// //         handleClose();
// //     };

// //     return (
// //         <div className="edit-employee-container">
// //             <h2>Edit Employee</h2>
// //             <div>
// //                 <label>Last Name:</label>
// //                 <input type="text" name="lastName" value={editEmployeeData.lastName} onChange={handleChange} />
// //             </div>
// //             <div>
// //                 <label>First Name:</label>
// //                 <input type="text" name="firstName" value={editEmployeeData.firstName} onChange={handleChange} />
// //             </div>
// //             <div>
// //                 <label>Middle Name:</label>
// //                 <input type="text" name="middleName" value={editEmployeeData.middleName} onChange={handleChange} />
// //             </div>
// //             <div>
// //                 <label>Birthday:</label>
// //                 <input type="date" name="birthday" value={editEmployeeData.birthday} onChange={handleChange} />
// //             </div>
// //             <div>
// //                 <label>Gender:</label>
// //                 <select name="gender" value={editEmployeeData.gender} onChange={handleChange}>
// //                     <option value="Male">Male</option>
// //                     <option value="Female">Female</option>
// //                 </select>
// //             </div>
// //             <div>
// //                 <label>Address:</label>
// //                 <input type="text" name="address" value={editEmployeeData.address} onChange={handleChange} />
// //             </div>
// //             <div>
// //                 <label>Contact No.:</label>
// //                 <input type="text" name="contactNo" value={editEmployeeData.contactNo} onChange={handleChange} />
// //             </div>
// //             <div>
// //                 <label>Status:</label>
// //                 <select name="status" value={editEmployeeData.status} onChange={handleChange}>
// //                     <option value="Married">Married</option>
// //                     <option value="Single">Single</option>
// //                 </select>
// //             </div>
// //             <div>
// //                 <label>Position:</label>
// //                 <input type="text" name="position" value={editEmployeeData.position} onChange={handleChange} />
// //             </div>
// //             <div>
// //                 <label>Profile Status:</label>
// //                 <select name="profileStatus" value={editEmployeeData.profileStatus} onChange={handleChange}>
// //                     <option value="Active">Active</option>
// //                     <option value="Inactive">Inactive</option>
// //                 </select>
// //             </div>
// //             <div className="edit-employee-buttons">
// //                 <button onClick={handleSave}>Save</button>
// //                 <button onClick={handleClose}>Close</button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default EmployeeEditItem;


import React, { useState } from 'react';
import './EmployeeEditItem.css'; // Create and import a CSS file for styling if needed

const EmployeeEditItem = ({ employee, handleClose, updateEmployee }) => {
    const [editEmployeeData, setEditEmployeeData] = useState(employee);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditEmployeeData({ ...editEmployeeData, [name]: value });
    };

    const handleSave = () => {
        updateEmployee(editEmployeeData);
        handleClose();
    };

    return (
        <div className="edit-employee-container">
            <h2>Edit Employee</h2>
            <div>
                <label>Last Name:</label>
                <input type="text" name="lastName" value={editEmployeeData.lastName} onChange={handleChange} />
            </div>
            <div>
                <label>First Name:</label>
                <input type="text" name="firstName" value={editEmployeeData.firstName} onChange={handleChange} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type="text" name="middleName" value={editEmployeeData.middleName} onChange={handleChange} />
            </div>
            <div>
                <label>Birthday:</label>
                <input type="date" name="birthday" value={editEmployeeData.birthday} onChange={handleChange} />
            </div>
            <div>
                <label>Age:</label>
                <input type="text" name="age" value={editEmployeeData.age} onChange={handleChange} />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" name="address" value={editEmployeeData.address} onChange={handleChange} />
            </div>
            <div>
                <label>Position:</label>
                <input type="text" name="position" value={editEmployeeData.position} onChange={handleChange} />
            </div>
            <div>
                <label>Status:</label>
                <select name="status" value={editEmployeeData.status} onChange={handleChange}>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
            <div>
                <label>Profile Status:</label>
                <select name="profileStatus" value={editEmployeeData.profileStatus} onChange={handleChange}>
                    <option value="onboarding">Onboarding</option>
                    <option value="active">Active</option>
                    <option value="resigned">Resigned</option>
                </select>
            </div>
            <div className="edit-employee-actions">
                <button onClick={handleSave}>Save</button>
                <button onClick={handleClose}>Cancel</button>
            </div>
        </div>
    );
};

export default EmployeeEditItem;
