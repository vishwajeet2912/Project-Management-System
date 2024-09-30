import React from 'react';
import './ProjectList.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function ProjectList() {
    return (
        <div className="project-list-container">
            <div className="header">
                <h2>List of Projects</h2>
                <hr />
                <button className="new-project-btn"><AddIcon/> New Project</button>
            </div>
            <div className='project-content'>
            <div className="project-controls">
                <button className="status-btn active">On going</button>
                <button className="status-btn">Finished</button>
                <button className="status-btn">Canceled</button>
            </div>
            <hr/>
            <div className="table-controls">
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
                        <th>Project</th>
                        <th>Location</th>
                        <th>Deadline</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sample Project</td>
                        <td>Sample</td>
                        <td>Oct. 12, 2020</td>
                        <td><a href="#" className="view-link"><RemoveRedEyeIcon />View</a></td>
                    </tr>
                </tbody>
            </table>
            <div className="pagination-controls">
                <span>Showing 1 to 1 of 1 entries</span>
                <div className="pagination">
                    <button className="page-btn"><ArrowBackIcon/>Previous</button>
                    <span className="current-page">1</span>
                    <button className="page-btn"><ArrowForwardIcon/>Next</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ProjectList;
