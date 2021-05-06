import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NotesAppBar from './NotesAppBar'
import { useForm } from '../../hooks/useForm'
import { activeNote, startDeleting } from '../../actions/notes'

const NoteScreen = () => {
    const dispatch = useDispatch();

    const {active:note} = useSelector( state => state.notes );

    const [formValues, handleInputChange, reset] = useForm(note);

    const {body, title, id} = formValues;

    const activeId = useRef(note.id)
    useEffect(() => {
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset])
    
    useEffect(() => {
        dispatch(activeNote(formValues.id, {
            ...formValues
        }))
    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch(startDeleting(id));
    }

    return (
        <div className="note__main-content">
            
            <NotesAppBar />

            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Titulo"
                    className="notes__title-input"
                    value={title}
                    onChange={handleInputChange}
                    name="title"
                />

                <textarea
                    placeholder="¿Que hiciste hoy?"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                    name="body"
                >
                </textarea>
                <div className="notes__image">
                    {
                        (note.url) && 
                        (
                            <img
                                src={note.url}
                                alt="landscape"
                            />
                        )
                    }
                </div>
            </div>
            <button className="btn btn-danger" onClick = {handleDelete}>
                Eliminar nota
            </button>
        </div>
    )
}

export default NoteScreen
