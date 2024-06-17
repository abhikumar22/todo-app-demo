import {
  handleOnClick1,
  handleClick2
} from './helper';
import AutoCompleteComponent from './components/AutoCompleteComponent'
import TodoBox from './components/TodoBox'

import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const API = "https://openlibrary.org/search/authors.json?limit=6&q=";
  const [todoList, setTodoList] = useState([]);
  const [response, setResponse] = useState({});


  useEffect(() => {
    fetchData();
  }, []);
  const addTodo = (newTodo: any) => {
    let temp: any = [...todoList, newTodo];
    setTodoList(temp);
  }
  const handleDelete = (txt: any) => {
    let res = todoList.filter(ele => ele !== txt);
    setTodoList(res);
  }

  const fetchData = async () => {
    // let res: any = await fetch(`${API}fruit`);
    // res = await res.json();
    const res = {
      totalRevenue: "350k",
      rewards: "400",
      products: "320",
      totalUsers: "600k",
    }
    setTimeout(() => {
      setResponse(res);
    }, 4000)
    // console.log("***** res ******", JSON.stringify(res));
  }
  console.log("****response", response);
  const isDefinedResponse = !!(response && Object.keys(response).length > 0);
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

      {isDefinedResponse ?
        <div className='Metrics_Section'>
          <div className='revenue Each_Metric'>Revenue: {response.totalRevenue}</div>
          <div className='rewards Each_Metric'> Rewards: {response.rewards}</div>
          <div className='products Each_Metric'>Products: {response.products}</div>
          <div className='users Each_Metric'>Users: {response.totalUsers}</div>
        </div>
        : <div>Loading......</div>}

    </div>
  )
}

export default App;