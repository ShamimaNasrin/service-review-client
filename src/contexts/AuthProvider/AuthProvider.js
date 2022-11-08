import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
 const auth = getAuth(app);

const AuthProvider = ({children}) => {

    // const createUser = (email, password) => {
    //     // setLoading(true);
    //     return createUserWithEmailAndPassword(auth, email, password);
    // }

    const authInfo = {

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;