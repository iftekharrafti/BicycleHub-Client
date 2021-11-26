import React from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import './Reviews.css'
const Reviews = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review  successfully');
                    reset();
                }
            })
    }
    return (
        <div >
            <div>
                <div className="reviews-section my-5 py-4 ">
                    <h3 className="mb-4 text-center">Give Your Review</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("bikename", { required: true, maxLength: 50 })} placeholder="bikename" />
                        <input {...register("Customer", { required: true, maxLength: 50 })} placeholder="Your Name" />


                        <textarea maxlength="500" {...register("description",)} placeholder="description" />


                        <button type="submit" className="submit-reviews mt-2">Submit </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Reviews;