import {createContext, useEffect, useState} from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(false);


    const registerWithEmailAndPassword = (email, password)=>{

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logWithEmailAndPassword = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
        
    } 


    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, curentUser=>{
            setUser(curentUser)
        })

        return ()=>{
            return unsubcribe();
        }
    },[])


    const info = {
        user,
        registerWithEmailAndPassword,
        logWithEmailAndPassword,
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;