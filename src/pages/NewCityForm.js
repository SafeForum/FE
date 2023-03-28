
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from "../utilities/hooks";


const NewCityForm = (e)=> {
    const form = useRef();
    const [rating, setRating] = useState(0); 
    const [communityInvolvement, setCommunityInvolvement] = useState(null);

    function cityApplicationCallback(e) {
        sendEmail(e);
      }

    const { onChange, onSubmit, values } = useForm(cityApplicationCallback, {
        email: "",
        password: "",
      });
    

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <div>
            <form ref={form} onSubmit={sendEmail} className="w-5/6 mt-8 space-y-5 mx-auto flex items-center flex-col">
                <label className=" text-left font-medium">First Name</label>
                <input type="text" name="user_firstName" className="w-1/3 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                <label className=" text-left font-medium">Last Name</label>
                <input type="text" name="user_lastName" className="w-1/3 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                <label className=" text-left font-medium">Email</label>
                <input type="email" name="user_email" className="w-1/3 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                <label className="font-medium">City</label>
                <input type="text" name="user_city" className="w-1/3 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
                <label className="font-medium">State</label>
                <input type="text" name="user_state" className="w-1/3 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
                <label className="font-medium">On a scale of 1 to 5, how involved are you in your community?</label>
                <div>
                    <label className="m-4">
                        <input 
                        type="radio" 
                        name="rating" 
                        value="1"  
                        checked={rating === 1} 
                        className="m-2"/>
                        1
                    </label>
                    <label className="m-4">
                        <input 
                        type="radio" 
                        name="rating" 
                        value="2" 
                        checked={rating === 2} 
                        className="m-2"/>
                        2
                    </label>
                    <label className="m-4">
                        <input 
                        type="radio" 
                        name="rating" 
                        value="3" 
                        checked={rating === 3} 
                        className="m-2"/>
                        3
                    </label>
                    <label className="m-4">
                        <input 
                        type="radio" 
                        name="rating" 
                        value="4" 
                        checked={rating === 4} 
                        className="m-2"/>
                        4
                    </label>
                    <label className="m-4">
                        <input 
                        type="radio" 
                        name="rating" 
                        value="5"  
                        checked={rating === 5} 
                        className="m-2"/>
                        5
                    </label>
                </div>
                <label className="font-medium">Are you an active member in your community?</label>
                <div>
                    <label>
                    <input 
                    className="m-2"
                    type="radio" 
                    name="available" 
                    value="true"  
                    checked={communityInvolvement === true}  />
                    Yes
                    </label>
                    <label>
                    <input
                    className="m-2" 
                    type="radio" 
                    name="available" 
                    value="false" 
                    checked={communityInvolvement === false} />
                    No
                    </label>
                </div>
                <label className="font-medium">If yes, please describe in what ways you contribute to your community.</label>
                <textarea name="message" className="w-1/3 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                <input type="submit" value="Send" className="px-5 py-3 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg" />
            </form>
        </div>
    );
}

export default NewCityForm
