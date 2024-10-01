import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
    const navigate = useNavigate();

    const handleLoginClick = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <header>
            <h1>Project Management System</h1>
            <a href="#" className="admin-link" onClick={handleLoginClick}>
                <PersonIcon className="person-icon" />
                Admin Administrator
                <ArrowDropDownIcon className="arrow-icon" />
            </a>
        </header>
    );
}

export default Header;
