import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom';
import { EMAIL_KEY, getItem } from '../localStorageConfig';

function RequireUser() {
    const user = getItem(EMAIL_KEY);
    const navigate = useNavigate();

    return (
          user? <Outlet/>: navigate("/auth")
        
    )
}

export default RequireUser
