import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isloding } = UseAuth();
    if (isloding) {
        return <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;