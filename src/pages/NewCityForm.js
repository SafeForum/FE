
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const NewCityForm = (e)=> {
    const form = useRef();
    const [rating, setRating] = useState(0); 
    const [communityInvolvement, setCommunityInvolvement] = useState(null);

    const handleAnswerChange = (e) => {
      setCommunityInvolvement(e.target.value === "true");
    }

    const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
    }

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
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>City</label>
        <input type="text" name="user_city" />
        <label>State</label>
        <input type="text" name="user_state" />
        <label>In a scale of 1 - 5, how involved are you in your community?</label>
        <label>
            <input 
            type="radio" 
            name="rating" 
            value="1" 
            onChange={handleRatingChange} 
            checked={rating === 1} />
            1
        </label>
        <label>
            <input 
            type="radio" 
            name="rating" 
            value="2" 
            onChange={handleRatingChange} 
            checked={rating === 2} />
            2
        </label>
        <label>
            <input 
            type="radio" 
            name="rating" 
            value="3" 
            onChange={handleRatingChange} 
            checked={rating === 3} />
            3
        </label>
        <label>
            <input 
            type="radio" 
            name="rating" 
            value="4" 
            onChange={handleRatingChange} 
            checked={rating === 4} />
            4
        </label>
        <label>
            <input 
            type="radio" 
            name="rating" 
            value="5" 
            onChange={handleRatingChange} 
            checked={rating === 5} />
            5
        </label>
        <label>Are you an active member in your community?</label>
        <label>
        <input 
        type="radio" 
        name="available" 
        value="true" 
        onChange={handleAnswerChange} 
        checked={communityInvolvement === true} />
        Yes
        </label>
        <label>
        <input 
        type="radio" 
        name="available" 
        value="false" 
        onChange={handleAnswerChange} 
        checked={communityInvolvement === false} />
        No
        </label>
        <label>If yes, please describe in what ways you contribute to your community.</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
}

export default NewCityForm
