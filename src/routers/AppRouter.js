import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import {firebase} from "../firebase/firebase-config"
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Spinner from 'react-spinner-material';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes, startLoadingNotes } from '../actions/notes';
const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user) => {
            if(user?.uid){ // si existe el user y el uid
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                dispatch(startLoadingNotes(user.uid));
            }
            else{
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn])
    if (checking){
        return (
            <div className="loading__container">
                <Spinner radius={100} color={"#FFFFFF"} stroke={4} visible={true} />
            </div>
        )
    }
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth" 
                        component={AuthRouter} 
                        isAuthenticated={isLoggedIn}/>
                    <PrivateRoute 
                        exact 
                        isAuthenticated={isLoggedIn}
                        path="/" 
                        component={JournalScreen} />
                    <Redirect to = "/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
