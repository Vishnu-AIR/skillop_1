import React from 'react'
import { EMAIL_KEY, getItem } from '../localStorageConfig';
import { useNavigate, Outlet } from 'react-router-dom';

function NotLoggedIn() { 
  const user = getItem(EMAIL_KEY);
  const navigate = useNavigate();
    return (
    user? navigate("/") : <Outlet/>
  )
}

export default NotLoggedIn
