import React from "react";
import { MdBusinessCenter } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import '../Styles/CompanyNumbers.css';



export default function CompanyNumbers(){
    return (
        <div className="company-numbers">
            <div className="company-container">
            <MdBusinessCenter />
            <div className="company-content">
                <h3>3000</h3>
                <h4>Clients</h4>
            </div>
            <IoPersonCircleOutline />
            <div className="company-content">
                <h3>180</h3>
                <h4>Employees</h4>
            </div>
            <IoMdGlobe />
            <div className="company-content">
                <h3>1000</h3>
                <h4>Daily users</h4>
            </div>
            </div>
        </div>
    )
}