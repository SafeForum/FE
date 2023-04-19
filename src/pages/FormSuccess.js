import React from 'react'
import successIcon from "../assets/success-icon.svg"

export default function FormSuccess() {
    return(
        <div className="w-full flex flex-col flex-wrap items-center">
            <img src={successIcon} alt='success icon' className='w-3/12'/>
            <h1 className="text-2xl font-semibold my-4">Thank you! Your application has been successfully submitted.</h1>
            <h2 className="leading-8 text-lg text-justify mx-96">We appreciate your interest in bringing our community to your city. We've received your application and will review it as soon as possible. We'll be in touch within a copule of days to let you know the status of your application. In the meantime, we encourage you to take a look at our blog for more information.</h2>
        </div>
    )
}
