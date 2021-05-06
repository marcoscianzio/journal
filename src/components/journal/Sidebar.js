import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { logoutCleaning, startNewNote } from '../../actions/notes';
import JournalEntries from './JournalEntries'



const Sidebar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    }
    
    const {name} = useSelector( state => state.auth);

    const handleAddNew = () => {
        dispatch(startNewNote());
    }
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar mt-5">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span>
                        {name}
                    </span>
                </h3>
                <button className="btn" onClick={handleLogout}>
                    Salir
                </button>
            </div>
            <div className="journal__new-entry" onClick={handleAddNew}>
                <i className=" far fa-calendar-plus fa-5x">
                </i>
                <p className="mt-5">
                    Nueva nota
                </p>
            </div>
        
            <JournalEntries />
        </aside>
    )
}

export default Sidebar
