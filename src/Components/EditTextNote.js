import "../Style/Note.css";

const EditTextNote = ({ text, editText, handleTextEdit }) => {
    return (
        <div>
            <div className="NoteBody">
                <textarea
                    rows={11}
                    cols={31}
                    // placeholder="Type to add a note"
                    value={editText}
                    name={text}
                    onChange={handleTextEdit}
                ></textarea>
            </div>
        </div>
    );
};

export default EditTextNote;
