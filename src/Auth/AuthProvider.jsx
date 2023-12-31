import {createContext, useEffect, useState} from 'react'
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(false);
    const [teams, setTeams] = useState([]);
    const [tasks, setTasks] = useState([]);


    const registerWithEmailAndPassword = (email, password)=>{

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logWithEmailAndPassword = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
        
    } 

    const loginWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = ()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, curentUser=>{
            setUser(curentUser)
        })

        return ()=>{
            return unsubcribe();
        }
    },[])

    useEffect(()=>{
        const storedTeams = localStorage.getItem("teams")
        if(storedTeams){
            setTeams(JSON.parse(storedTeams))
        }

    },[setTeams])


    const info = {
        user,
        registerWithEmailAndPassword,
        logWithEmailAndPassword,
        logOut,
        loginWithGoogle,
        setTeams,
        teams,
        tasks,
        setTasks,
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;