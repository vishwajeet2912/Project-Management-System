import React, { useState } from 'react';
import './ProjectListNewProjectItem.css'; // Import the CSS file for styling

const ProjectListNewProjectItem = ({ onClose }) => {
    // State for form inputs
    const [formData, setFormData] = useState({
        proposedProject: '', // Added for tracking the selected project
        projectName: '',
        location: '',
        cost: '',
        startDate: '',
        deadline: '',
        foreman: '',
        divisions: [], // To store selected divisions
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            // Handle checkbox selection for divisions
            setFormData((prevData) => {
                const updatedDivisions = checked
                    ? [...prevData.divisions, value]
                    : prevData.divisions.filter((division) => division !== value);
                return {
                    ...prevData,
                    divisions: updatedDivisions,
                };
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form data:', formData);
        onClose(); // Close the modal after submission
    };

    const availableDivisions = ["Comfort Room", "Floor", "Layout", "Road", "Sample", "Windows"];

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>✖</button>
                <h2>New Project</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="proposedProject" className="form-label">
                        Proposed Project:
                        <select
                            id="proposedProject"
                            name="proposedProject"
                            value={formData.proposedProject}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Building">Building</option>
                            <option value="House">House</option>
                            <option value="Highways">Highways</option>
                            <option value="Grand Stand">Grand Stand</option>
                            <option value="Covered Court">Covered Court</option>
                        </select>
                    </label>
                    
                    {/* Conditional Rendering for Divisions */}
                    {formData.proposedProject === 'House' && (
                        <div className="divisions-section">
                            <span className="divisions-title">Divisions:</span>
                            <div className="checkbox-group">
                                {availableDivisions.map((division) => (
                                    <label key={division} className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            name="divisions"
                                            value={division}
                                            checked={formData.divisions.includes(division)}
                                            onChange={handleInputChange}
                                        />
                                        {division}
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    <label htmlFor="projectName" className="form-label">
                        Project Name:
                        <input
                            type="text"
                            id="projectName"
                            name="projectName"
                            value={formData.projectName}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label htmlFor="location" className="form-label">
                        Location:
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label htmlFor="cost" className="form-label">
                        Cost:
                        <input
                            type="number"
                            id="cost"
                            name="cost"
                            value={formData.cost}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label htmlFor="startDate" className="form-label">
                        Start Date:
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label htmlFor="deadline" className="form-label">
                        Deadline:
                        <input
                            type="date"
                            id="deadline"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label htmlFor="foreman" className="form-label">
                        Foreman:
                        <input
                            type="text"
                            id="foreman"
                            name="foreman"
                            value={formData.foreman}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    
                    {/* Wrap buttons in a container for proper alignment */}
                    <div className="button-group">
                        <button type="submit" className="save-button">Save</button>
                        <button type="button" className="close-modal-button" onClick={onClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectListNewProjectItem;
