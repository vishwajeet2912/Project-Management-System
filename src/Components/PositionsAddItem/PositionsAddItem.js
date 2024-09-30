import React, { useState } from 'react';
import './PositionsAddItem.css';

function PositionsAddItem({ onCancel, onSave }) {
    const [position, setPosition] = useState('');
    const [dailyRate, setDailyRate] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSave = () => {
        onSave({ position, dailyRate });
        setPosition('');
        setDailyRate('');
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000); // Hide message after 3 seconds
    };

    return (
        <div className="Positions-add-item">
            {showSuccessMessage && <div className="success-message"><i className="check-icon">✔</i> Data Successfully Added.</div>}
            <div className="header">
                <h2>New Position</h2>
            </div>
            <hr />
            <div className="form-group">
                <label>Position:
                    <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
                </label>
            </div>
            <div className="form-group">
                <label>Daily Rate:
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

export default PositionsAddItem;
