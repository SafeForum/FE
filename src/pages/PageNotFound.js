import React from 'react'
import { Link } from "react-router-dom";
import notFoundIcon from "../assets/not-found-icon.svg"
export default function PageNotFound() {
    return (
        <div className="w-full flex flex-wrap items-center justify-center mt-60">
            <img src={notFoundIcon} alt="Page not found" />
            <div className='flex-col flex m-12 w-1/5'>
                <h1 className="text-5xl font-semibold">Oops!</h1>
                <h1 className="text-2xl font-semibold mt-5 mb-5">Looks like the page you're looking for is nowhere to be found!</h1>
                <Link to="/dashboard/:cityPortal" className="px-5 py-3 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg">Back to Dashboard</Link>
            </div>
        </div>
    ) 
}