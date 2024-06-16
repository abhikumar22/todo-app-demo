import { useState } from "react";

const AutoCompleteComponent = ({
    addTodo
}: any) => {
    const [inputText, setInputText] = useState('');
    const handleChange = (e: any) => {
        setInputText(e.target.value);
    }
    const handleSubmit = () => {
        addTodo(inputText);
    }
    return (
        <div>
            <input
                placeholder="enter your todo"
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
};

export default AutoCompleteComponent;