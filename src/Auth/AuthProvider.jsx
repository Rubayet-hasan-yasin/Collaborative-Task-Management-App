import {createContext, useState} from 'react'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(false);


    const register = (email, password)=>{
        
        return signInWithEmailAndPassword(auth, email, password);
    }




    const info = {
        user,
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;