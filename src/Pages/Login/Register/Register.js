import React, { useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import './Register'

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { user, registerUser, isloding, authError } = UseAuth();
    const location = useLocation();
    const history = useHistory();


    const handlesOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogindata = { ...loginData };
        newLogindata[field] = value;

        setLoginData(newLogindata);

    }

    const handleRegister = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, history)
        e.preventDefault();
    }

    return (
        <div className="container register-part ">
            <div className="my-5">
                <h3>Please Complete Registration </h3>
            </div>

            {!isloding && <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <input onBlur={handlesOnBlur} placeholder="Your Name" type="name" className="form-control" name="name" id="exampleInputName" aria-describedby="emailHelp" />

                    <input onBlur={handlesOnBlur} placeholder=" Your email" type="email" name="email" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">

                    <input placeholder=" password" type="password" name="password" onBlur={handlesOnBlur} className="form-control" id="exampleInputPassword1" />

                    <input placeholder=" ReEnter password" type="password" name="password2" onBlur={handlesOnBlur} className="form-control mt-3" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
            </form>}
            {
                isloding && <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            {
                user?.email && <div className="alert alert-info error-control" role="alert">
                    registration successfully!
                </div>
            }

            {
                authError && <div className="alert alert-danger error-control" role="alert">
                    {authError}
                </div>
            }




            <Link to="/login" className="  nav-link "> Already Registered? Please Login </Link>
        </div>
    );
};

export default Register;