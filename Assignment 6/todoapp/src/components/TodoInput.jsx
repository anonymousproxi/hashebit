import React, { useState } from 'react'

const TodoInput = (props) => {
    const [inputText, setinputText] = useState("");
    return (
        <div className="input-container">
            <input type='text' className='input-box-todo' placeholder='Enter your task' onChange={e => {
                setinputText(e.target.value)
            }} value={inputText} />
            <button className='add-btn' onClick={() => {
                props.addlist(inputText);
                setinputText("");
            }}>+</button>
        </div>
    )
}

export default TodoInput