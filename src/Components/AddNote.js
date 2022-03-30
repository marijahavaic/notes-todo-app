import '../Style/Note.css'

const AddNote = () => {
    return(
        <div className="Note">
            <div className='Note-header'>
                <textarea
                    rows={2}
                    cols={20}
                    placeholder="Untitled"
                ></textarea>
            </div>
            <div className='Note-text'>
                <textarea 
                    rows={15}
                    cols={20}
                    placeholder="Type to add a note"
                ></textarea>
            </div>
            <div className='Note-footer'>
                <small>300 Remaining</small>
                <button className='save'>Save</button>
            </div>
        </div>
    )
}

export default AddNote;