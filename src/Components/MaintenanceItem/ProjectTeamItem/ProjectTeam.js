import React from 'react';
import './ProjectTeam.css';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function ProjectTeam() {
    return (
        <div className="ProjectTeam-list-container">
            <div className="header">
                <h2>Project Team</h2>
                <hr />
                <button className="new-ProjectTeam-btn"><AddIcon />New Team</button>
            </div>
            <div className='ProjectTeam-content'>
                <div className="table-controls-ProjectTeam">
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
                            <th>FOREMAN</th>
                            <th>MEMBER/s</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Smth</td>
                            <td>-George Wlson</td>
                            <td><button>Actve</button></td>
                            <td><a href="#" className="update-link">Update</a></td>
                        </tr>
                    </tbody>
                </table>
                <div className="pagination-controls-ProjectTeam">
                    <span>Showing 1 to 1 of 1 entries</span>
                    <div className="pagination-ProjectTeam">
                        <button className="page-btn"><ArrowBackIcon />Previous</button>
                        <span className="current-page">1</span>
                        <button className="page-btn">Next<ArrowForwardIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectTeam;
