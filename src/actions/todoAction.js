
import { GET_TODOS,ADD_TODO,DELETE_TODO,COMPLETED_TODO } from "../types/type";
import axios from 'axios'

export const getTodos = () => async dispatch =>{
  try{
    const res = await axios.get(`http://localhost:7000/todos`);
    dispatch( {
      type: GET_TODOS,
      payload: res.data
    })
}
catch(error){
    
    console.log(error);
}
 
} 

export const addTodo = (newTodo) => async dispatch => {
  try{
    const res = await axios.get(`http://localhost:7000/todos`,newTodo.title);

    dispatch({
      type: ADD_TODO,
        payload: res.data
    })
}
catch(error){
    
     console.log(error);
}
    // return {
    //   type: ADD_TODO,
    // payload:newTodo
    // };
  } 

  export const deleteTodo = (id) => {
    return {
      type: DELETE_TODO,
      payload:id
    };
  } 

  export const toggleComplete = (todo) => {
    return {
      type: COMPLETED_TODO,
      payload:todo
    };
  } 