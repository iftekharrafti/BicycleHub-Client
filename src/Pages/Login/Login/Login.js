import React, { useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, isloding, loginUser, authError } = useAuth()

    const location = useLocation();
    const history = useHistory();

    const onChangeHandle = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogindata = { ...loginData };
        newLogindata[field] = value;
        setLoginData(newLogindata);

    }

    const handleLogin = e => {

        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }


    return (
        <div className="container">


            <div className="row">

                <div className="col-md-6">

                    <div className="my-5">
                        <h3>Please Login Here</h3>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="mb-3">

                            <input
                                placeholder=" email"
                                type="email"
                                name="email"
                                onChange={onChangeHandle}
                                className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">

                            <input
                                placeholder=" password"
                                type="password"
                                name="password"
                                onChange={onChangeHandle} className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <hr />

                    <Link to="/register" className="  nav-link "> New User? Please complete your registration </Link>

                    {
                        isloding &&
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    }
                    {
                        user?.email &&
                        <div className="alert alert-info error-control" role="alert">
                            successfully login!
                        </div>
                    }

                    {
                        authError &&
                        <div className="alert alert-danger error-control" role="alert">
                            {authError}
                        </div>
                    }

                </div>


            </div>


        </div>
    );
};

export default Login;