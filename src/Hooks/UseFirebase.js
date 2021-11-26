import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import initializeFirebase from '../Firebase/Firebase.init';

initializeFirebase();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isloding, setIsloding] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);


    const registerUser = (email, password, name, location, history) => {
        setIsloding(true);
        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {

                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name);

                updateProfile(auth.currentUser, {
                    displayName: name

                }).then(() => {
                }).catch((error) => {
                });

                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsloding(false));
    }



    // signInEmailPassword

    const loginUser = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsloding(false));
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {


                setUser(user);

            } else {
                setUser({});
            }
            setIsloding(false)
        });
        return () => unsubscribe;

    }, [])

    // singOut

    const logOut = () => {
        setIsloding(true);
        signOut(auth).then(() => {
        }).catch((error) => {

        })
            .finally(() => setIsloding(false));
    }

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
    }
    return {
        user,
        admin,
        registerUser,
        logOut,
        loginUser,
        isloding,
        authError,
    }

}

export default UseFirebase;