import React, { useState } from 'react';
import './ProjectDivisonsAddItem.css';

function ProjectDivisionsAddItem({ onCancel, onSave }) {
    const [ProjectDivisions, setProjectDivisions] = useState('');
    const [dailyRate, setDailyRate] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSave = () => {
        onSave({ ProjectDivisions, dailyRate });
        setProjectDivisions('');
        setDailyRate('');
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000); // Hide message after 3 seconds
    };

    return (
        <div className="ProjectDivisions-add-item">
            {showSuccessMessage && <div className="success-message"><i className="check-icon">✔</i> Data Successfully Added.</div>}
            <div className="header">
                <h2>New Division</h2>
            </div>
            <hr />
            <div className="form-group">
                <label>Division:
                    <input type="text" value={ProjectDivisions} onChange={(e) => setProjectDivisions(e.target.value)} />
                </label>
            </div>
            <div className="form-group">
                <label>Project Type:
                    <input type="number" value={dailyRate} onChange={(e) => setDailyRate(e.target.value)} />
                </label>
            </div>
            <hr />
            <div className="buttons">
                <button onClick={handleSave}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
            <hr />
        </div>
    );
}

export default ProjectDivisionsAddItem;
