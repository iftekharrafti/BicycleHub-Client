import { useForm } from "react-hook-form";
import axios from 'axios';
import './Purchase.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import UseAuth from "../../Hooks/UseAuth";
const Purchase = () => {

    const { purchaseId } = useParams();
    const [byes, setByes] = useState({});
    const { user } = UseAuth();
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/bikes/${purchaseId}`)
            .then(res => res.json())
            .then(data => setByes(data))
    }, [purchaseId])


    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/customers', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Purchase form submit successfully');
                    reset();
                }
            })
    }

    return (
        <div className="purchase-section">
            <div className="text-center mt-5">
                <h3>Selected bike</h3>
            </div>
            <div className="row mt-5">
                <div className="col-md-5">


                    <div className="card service-img card-description mx-3 shadow-lg p-3 mb-5 bg-body rounded">
                        <img src={byes.img} className="card-img-top " alt="..." />
                        <div className="card-body">
                            <h3 className="card-name ">{byes.bikename}</h3>
                            <h5> {byes.type}</h5>
                            <p>{byes.description}</p>
                            <span> <span className="price">${byes.price}</span></span>



                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div>
                        <div className="add-information  ">
                            <h3 className="mb-4 text-center">Add  Your Information</h3>
                            <div className="mb-3 ms-5">

                                <h5>Email: <span className="user-email">{user.email}</span> </h5>
                            </div>



                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name", { required: true, maxLength: 50 })} placeholder="Your Name" />
                                <input {...register("address", { required: true, maxLength: 50 })} placeholder="Address" />

                                <input {...register("bike", { required: true, maxLength: 50 })} placeholder="bike name" />


                                <input type="number" {...register("phone",)} placeholder="Your mobile number" />



                                <button type="submit" className="submit-purchase mt-2">Purchase Bike</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;