import React, { useState } from 'react';
import './Positions.css';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PositionsAddItem from '../../PositionsAddItem/PositionsAddItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function Positions() {
    const [showAddForm, setShowAddForm] = useState(false);
    const [positions, setPositions] = useState([
        { position: 'Foreman', dailyRate: '1500 Php' },
        { position: 'Mason', dailyRate: '500 Php' }
    ]);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSave = (newPosition) => {
        setPositions([...positions, newPosition]);
        setShowAddForm(false);
        setSuccessMessage('Data is saved successfully');
        setTimeout(() => setSuccessMessage(''), 3000); 
    };

    return (
        <div className="Positions-container">
            <div className="Positions-list-container">
                <div className="header">
                    <h2>List of Positions</h2>
                    <hr />
                    <button className="new-Positions-btn" onClick={() => setShowAddForm(!showAddForm)}>
                        <AddIcon /> Add
                    </button>
                </div>
                <div className='Positions-content'>
                    <div className="table-controls-Positions">
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
                                <th>Position</th>
                                <th>Daily Rate</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {positions.map((pos, index) => (
                                <tr key={index}>
                                    <td>{pos.position}</td>
                                    <td>{pos.dailyRate}</td>
                                    <td><a href="#" className="edit-link"><EditIcon />Edit</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination-controls-Positions">
                        <span>Showing 1 to {positions.length} of {positions.length} entries</span>
                        <div className="pagination-Positions">
                            <button className="page-btn"><ArrowBackIcon />Previous</button>
                            <span className="current-page">1</span>
                            <button className="page-btn">Next<ArrowForwardIcon /></button>
                        </div>
                    </div>
                </div>
            </div>
            {showAddForm && (
                <PositionsAddItem
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
                    <h2 id="success-modal-title">Success</h2>
                    <p id="success-modal-description">{successMessage}</p>
                </Box>
            </Modal>
        </div>
    );
}

export default Positions;
