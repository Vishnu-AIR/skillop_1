import React, { useEffect } from "react";
import RequireUser from "./app/RequireUser";
import NotLoggedIn from "./app/NotLoggedIn";
import { Link, Route, Routes } from "react-router-dom";
import Auth from "./app/Auth";
import { EMAIL_KEY, getItem } from "./localStorageConfig";
import { useSelector } from "react-redux";


const Kuchbhi =()=>{
    const myProfile = useSelector((s) => s.userReducer.myProfile);


    

    return <React.Fragment> 
    {myProfile ? (
      <><RequireUser /><Link to={`/profile/${getItem(EMAIL_KEY)}/info`}>Info</Link></>
      
    ) : 
      <NotLoggedIn>
         <Auth />
      </NotLoggedIn>
    }
  </React.Fragment>
}

export default Kuchbhi