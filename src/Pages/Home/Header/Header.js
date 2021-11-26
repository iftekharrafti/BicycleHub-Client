import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = UseAuth();


    return (
        <div>
            <div className="header-file">

                <nav className="navbar navbar-expand-lg navbar-dark   ">
                    <div className="container-fluid">
                        <Link to="/home" className="nav-link active bikehub">BicycleHub</Link>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon  "></span>
                        </button>
                        <div className="collapse navbar-collapse navbar-link" id="navbarScroll">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
                                <Link to="/home" className="   nav-link active">Home</Link>

                                <Link to="/explore" className=" text-white nav-link ">Explore</Link>



                                <Link to="/reviews" className=" text-white nav-link ">Reviews</Link>





                                {
                                    user?.email ?
                                        <>
                                            <Link to="/dashboard" className=" text-white nav-link ">Dashboard</Link>

                                            <Link to="/home" onClick={logOut} className="text-white   nav-link "> Log out</Link>
                                        </>


                                        :
                                        <Link to="/login" className="text-white   nav-link "> Login</Link>
                                }


                            </ul>

                        </div>
                    </div>
                </nav>
            </div >
        </div >
    );
};

export default Header;