import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Header() {
    return (
        <header>
            <h1>Project Management System</h1>
            <a href="#" className="admin-link">
                <PersonIcon className="person-icon" />
                Admin Administrator
                <ArrowDropDownIcon className="arrow-icon" />
            </a>
        </header>
    );
}

export default Header;
