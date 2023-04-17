import React from 'react'
import { Link } from "react-router-dom";
import notFoundIcon from "../assets/not-found-icon.svg"
export default function PageNotFound() {
    return (
        <div>
            <img src={notFoundIcon} alt="Page not found" />
            <h1>Oops!</h1>
            <h2>The page you're looking cannot be found!</h2>
            <Link to="/dashboard/:cityPortal">Dashboard</Link>
        </div>
    )
}