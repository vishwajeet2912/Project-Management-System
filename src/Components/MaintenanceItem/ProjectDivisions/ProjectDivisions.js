import React, { useState } from 'react';
import './ProjectDivisions.css';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EditIcon from '@mui/icons-material/Edit';
import ProjectDivisionsAddItem from '../../ProjectDivisionsAddItem/ProjectDivisionsAddItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function ProjectDivisions() {
    const [showAddForm, setShowAddForm] = useState(false);
    const [projectDivisions, setProjectDivisions] = useState([
        { srno: 1, division: 'Comfort Room', projectType: 'House/Building' },
        { srno: 2, division: 'Floor', projectType: 'House/Building' },
        { srno: 3, division: 'Layout', projectType: 'House/Building' },
        { srno: 4, division: 'Roof', projectType: 'House/Building' },
        { srno: 5, division: 'Windows', projectType: 'House/Building' },
    ]);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSave = (newDivision) => {
        setProjectDivisions([...projectDivisions, { srno: projectDivisions.length + 1, ...newDivision }]);
        setShowAddForm(false);
        setSuccessMessage('Data is saved successfully');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="ProjectDivisions-container">
            <div className="ProjectDivisions-list-container">
                <div className="header">
                    <h2>List of Project Divisions</h2>
                    <hr/>
                    <button className="new-ProjectDivisions-btn" onClick={() => setShowAddForm(true)}>
                        <AddIcon /> Add
                    </button>
                </div>
                <div className="ProjectDivisions-content">
                    <div className="table-controls-ProjectDivisions">
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
                                <th>Sr. No</th>
                                <th>Division</th>
                                <th>Project Type</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {projectDivisions.map((pro, index) => (
                                <tr key={index}>
                                    <td>{pro.srno}</td>
                                    <td>{pro.division}</td>
                                    <td>{pro.projectType}</td>
                                    <td>
                                        <a href="#" className="edit-link"><EditIcon />Edit</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination-controls-ProjectDivisions">
                        <span>Showing 1 to {projectDivisions.length} of {projectDivisions.length} entries</span>
                        <div className="pagination-ProjectDivisions">
                            <button className="page-btn"><ArrowBackIcon />Previous</button>
                            <span className="current-page">1</span>
                            <button className="page-btn">Next<ArrowForwardIcon /></button>
                        </div>
                    </div>
                </div>
            </div>
            {showAddForm && (
                
                    <ProjectDivisionsAddItem
                        onCancel={() => setShowAddForm(false)}
                        onSave={handleSave}
                    />
            )}
            <Modal
                open={!!successMessage}
                onClose={() => setSuccessMessage('')}
                aria-labelledby="success-modal-title"
                aria-describedby="success-modal-description"
            >
                <Box className="success-modal">
                    <h2 id="success-modal-title">Success!</h2>
                    <p id="success-modal-description">{successMessage}</p>
                </Box>
            </Modal>
        </div>
    );
}

export default ProjectDivisions;
