import React from 'react';
import './ProjectTeamNewModal.css'; // Create a separate CSS file for styling the modal

// Modal component for New Team form
function ProjectTeamNewModal({ show, onClose }) {
    if (!show) {
        return null; // Return null if the modal is not to be displayed
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Create New Team</h2>
                <div className="form-group">
                    <label>Foreman</label>
                    <select>
                        <option value="">Select Employee</option>
                        <option value="1">Administrator, Admin | 1000008945</option>
                        <option value="2">Smith, John | 120078946</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Member</label>
                    <select>
                        <option value="">Select Member</option>
                        <option value="1">Administrator, Admin| 1000008945</option>
                        <option value="2">Smith, John| 120078946</option>
                        <option value="3">Wilson, George| 202078947</option>
                        <option value="3">Smith,Will Wick| 202178948</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Name</label>
                </div>
                <div className="modal-actions">
                    <button className="save-btn">Save</button>
                    <button className="cancel-btn" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectTeamNewModal;
