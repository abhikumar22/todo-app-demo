import { useRef, useState } from "react";

const TodoBox = ({
    text,
    handleDelete,
}: any) => {

    return (
        <div style={{
             display:'flex',
        padding: '2em', border: ' 1px solid black', margin: "2em" }}>
            {text}
            <button 
            style={{ cursor: 'pointer', marginLeft: '2em' }} onClick={() => handleDelete(text)}>
                Delete this todo
            </button>
        </div>
    )
};

export default TodoBox;