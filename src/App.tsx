import {
  handleOnClick1,
  handleClick2
} from './helper';
import AutoCompleteComponent from './components/AutoCompleteComponent'
import TodoBox from './components/TodoBox'

import './App.css'
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo: any) =>{
    let temp: any = [...todoList,newTodo];
    setTodoList(temp);
  }
  const handleDelete = (txt: any) =>{
    let res = todoList.filter(ele=>ele!==txt);
    setTodoList(res);
  }
  return (
    <div className='App_Wrapper'>

      <AutoCompleteComponent
        addTodo={addTodo}
      />

      {todoList.map((ele) => {
        return (
          <TodoBox
            text={ele}
            handleDelete={handleDelete}
          />
        )
      })}

    </div>
  )
}

export default App;