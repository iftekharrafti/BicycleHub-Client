import axios from 'axios'

import React from 'react';
import { useForm } from "react-hook-form";
import './AddData.css'

const AddData = () => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/bikes', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Add Product successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <div>
                <div className="add-data  py-3 mt-3">
                    <h3 className="mb-4 text-center">Add  new products</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("bikename", { required: true, maxLength: 50 })} placeholder="bikename" />
                        <input {...register("type", { required: true, maxLength: 50 })} placeholder="type" />

                        <input {...register("img", { required: true, maxLength: 50 })} placeholder="img" />

                        <textarea {...register("description",)} placeholder="description" />

                        <input  {...register("price",)} placeholder="price" />

                        <input  {...register("releaseDate",)} placeholder="releaseDate" />



                        <button type="submit" className="products-add mt-3">Add  products</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddData;