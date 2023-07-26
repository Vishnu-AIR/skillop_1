import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { getMyInfo } from "./redux/slices/userConfigSlice";
import { Link, Route, Routes } from "react-router-dom";
import RequireUser from "./app/RequireUser";
import Home from "./app/Home";
import NotLoggedIn from "./app/NotLoggedIn";
import Auth from "./app/Auth";
import Infocollector from "./infocollector";
import { EMAIL_KEY, getItem } from "./localStorageConfig";
import Prof from "./Prof";
import UPI from "./UPIpage";
import Slot from "./Slot";
import SlotBooking from "./SlotBooking";
import Payment from "./Payment";
import Kuchbhi from "./Kuchbhi";



function App() {
  const myProfile = useSelector((s) => s.userReducer.myProfile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyInfo());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Infocollector" element={<Infocollector />} />
        <Route path="/profile" element={<Prof />} />
        <Route path="/UPI" element={<UPI />} />
        <Route path="/Slot" element={<Slot />} />
        <Route path="/slotbooking" element={<SlotBooking />} />
        <Route path="/payment" element={<Payment />} />
        
        {/* Wrap the second set of routes in a Route component */}
        <Route element={<Kuchbhi/>} />
        
      </Routes>

    </>
  );
}

export default App;
