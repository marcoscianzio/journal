
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment';
import { startSaveNote, startUploading } from '../../actions/notes';

const NotesAppBar = () => {
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes);
    const handleSave = () => {
        dispatch(startSaveNote(active))
    }
    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }
    const handleFileChange = (e) => {
       const file = e.target.files[0];
       if (file) {
           dispatch(startUploading(file));
       }
    }
    const noteDate = moment(active.date);
    return (
        <div className="notes__appbar">
            <span>{noteDate.format('D [de] MMMM')}</span>
            <input 
                id="fileSelector"
                type="file"
                style={{display: 'none'}}
                name="file"
                onChange={handleFileChange}
            />
            <div>
                <button className="btn" onClick={handlePictureClick}>
                    Imagen
                </button>
                <button className="btn" onClick={handleSave}>
                    Guardar
                </button>
            </div>
        </div>
    )
}

export default NotesAppBar
