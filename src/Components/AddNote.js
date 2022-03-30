import '../Style/Note.css'

const AddNote = () => {
    return(
        <div className="Note">
            <div className='Header'>
                <textarea
                    rows={1}
                    cols={31}
                    placeholder="Untitled"
                ></textarea>
            </div>
            <div className='Body'>
                <textarea 
                    rows={11}
                    cols={31}
                    placeholder="Type to add a note"
                ></textarea>
            </div>
            <div className='Footer'>
                <small>300 Remaining</small>
                <button className='save'>Save</button>
            </div>
        </div>
    )
}

export default AddNote;