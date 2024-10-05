// import React, { useState } from 'react';
// import './ProjectList.css';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// const ProjectList = () => {
//     // State to hold the current project status
//     const [status, setStatus] = useState('ongoing');

//     // Sample project data
//     const projects = {
//         ongoing: [
//             { id: 1, name: 'Sample Project', location: 'Sample', deadline: 'Oct. 12, 2020' },
//         ],
//         finished: [
//             // No projects for finished status
//         ],
//         canceled: [
//             // No projects for canceled status
//         ],
//     };

//     // Function to handle status change
//     const handleStatusChange = (newStatus) => {
//         setStatus(newStatus);
//     };

//     return (
//         <div className="project-list-container">
//             <div className="header">
//                 <h2>List of Projects</h2>
//                 <hr />
//                 <button className="new-project-btn"><AddIcon /> New Project</button>
//             </div>
//             <div className='project-content'>
//                 <div className="project-controls">
//                     <button className={`status-btn ${status === 'ongoing' ? 'active' : ''}`} onClick={() => handleStatusChange('ongoing')}>Ongoing</button>
//                     <button className={`status-btn ${status === 'finished' ? 'active' : ''}`} onClick={() => handleStatusChange('finished')}>Finished</button>
//                     <button className={`status-btn ${status === 'canceled' ? 'active' : ''}`} onClick={() => handleStatusChange('canceled')}>Canceled</button>
//                 </div>
//                 <hr />
//                 <div className="table-controls">
//                     <label>
//                         <select>
//                             <option value="10">10</option>
//                             <option value="25">25</option>
//                             <option value="50">50</option>
//                             <option value="100">100</option>
//                         </select>
//                         <span>records per page</span>
//                     </label>
//                     <label>Search:
//                         <input type="search" placeholder="Search" />
//                     </label>
//                 </div>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Project</th>
//                             <th>Location</th>
//                             <th>Deadline</th>
//                             <th></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {projects[status].length > 0 ? (
//                             projects[status].map(project => (
//                                 <tr key={project.id}>
//                                     <td>{project.name}</td>
//                                     <td>{project.location}</td>
//                                     <td>{project.deadline}</td>
//                                     {status === 'ongoing' && (
//                                         <td><a href="#" className="view-link"><RemoveRedEyeIcon />View</a></td>
//                                     )}
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="4" style={{ textAlign: 'center' }}>No data available</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//                 <div className="pagination-controls">
//                     <span>Showing {projects[status].length} entries</span>
//                     <div className="pagination">
//                         <button className="page-btn"><ArrowBackIcon />Previous</button>
//                         <span className="current-page">1</span>
//                         <button className="page-btn"><ArrowForwardIcon />Next</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProjectList;

import React, { useState } from 'react';
import './ProjectList.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProjectListNewProjectItem from '../../Components/ProjectListNewProjectItem/ProjectListNewProjectItem';


const ProjectList = () => {
    // State to hold the current project status and modal visibility
    const [status, setStatus] = useState('ongoing');
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    // Sample project data
    const projects = {
        ongoing: [
            { id: 1, name: 'Sample Project', location: 'Sample', deadline: 'Oct. 12, 2020' },
        ],
        finished: [],
        canceled: [],
    };

    // Function to handle status change
    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };

    // Function to handle opening/closing the modal
    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="project-list-container">
            <div className="header">
                <h2>List of Projects</h2>
                <hr />
                <button className="new-project-btn" onClick={handleModalOpen}>
                    <AddIcon /> New Project
                </button>
            </div>
            <div className='project-content'>
                <div className="project-controls">
                    <button className={`status-btn ${status === 'ongoing' ? 'active' : ''}`} onClick={() => handleStatusChange('ongoing')}>Ongoing</button>
                    <button className={`status-btn ${status === 'finished' ? 'active' : ''}`} onClick={() => handleStatusChange('finished')}>Finished</button>
                    <button className={`status-btn ${status === 'canceled' ? 'active' : ''}`} onClick={() => handleStatusChange('canceled')}>Canceled</button>
                </div>
                <hr />
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
                        {projects[status].length > 0 ? (
                            projects[status].map(project => (
                                <tr key={project.id}>
                                    <td>{project.name}</td>
                                    <td>{project.location}</td>
                                    <td>{project.deadline}</td>
                                    {status === 'ongoing' && (
                                        <td><a href="#" className="view-link"><RemoveRedEyeIcon />View</a></td>
                                    )}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" style={{ textAlign: 'center' }}>No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="pagination-controls">
                    <span>Showing {projects[status].length} entries</span>
                    <div className="pagination">
                        <button className="page-btn"><ArrowBackIcon />Previous</button>
                        <span className="current-page">1</span>
                        <button className="page-btn"><ArrowForwardIcon />Next</button>
                    </div>
                </div>
            </div>
            
            {/* Conditionally render the modal */}
            {isModalOpen && <ProjectListNewProjectItem onClose={handleModalClose} />}
        </div>
    );
};

export default ProjectList;
