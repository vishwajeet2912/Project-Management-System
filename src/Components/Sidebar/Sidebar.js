import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupWorkIcon from '@mui/icons-material/GroupWork';

function Sidebar() {
    const [maintenanceOpen, setMaintenanceOpen] = useState(false);

    const toggleMaintenance = () => {
        setMaintenanceOpen(!maintenanceOpen);
    };

    return (
        <aside>
            <nav>
                <ul>
                    <li><Link to="/dashboard"><DashboardIcon className="icon" /> Dashboard</Link></li>
                    <li><Link to="/employee-list"><GroupIcon className="icon" /> Employee List</Link></li>
                    <li><Link to="/project-list"><ListAltIcon className="icon" /> Project List</Link></li>
                    <li><Link to="/users"><PeopleIcon className="icon" /> Users</Link></li>
                    <li onClick={toggleMaintenance}>
                        <Link to="#"><BuildIcon className="icon" /> Maintenance <ArrowDropDownIcon className='arrow-icon' /></Link>
                    </li>
                    {maintenanceOpen && (
                        <ul className="sub-menu">
                            <li><Link to="/maintenance/positions"><AssignmentIndIcon className="sub-icon" /> Positions</Link></li>
                            <li><Link to="/maintenance/project-divisions"><ApartmentIcon className="sub-icon" /> Project Divisions</Link></li>
                            <li><Link to="/maintenance/project-team"><GroupWorkIcon className="sub-icon" /> Project Team</Link></li>
                        </ul>
                    )}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
