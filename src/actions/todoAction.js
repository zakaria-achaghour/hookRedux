
import { GET_TODOS,ADD_TODO,DELETE_TODO,COMPLETED_TODO } from "../types/type";


export const getTodos = () => ({
    type: GET_TODOS,
  });

export const addTodo = (newTodo) => ({

    type: ADD_TODO,
    payload:newTodo
  });

  export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload:id
  });

  export const toggleComplete = (todo) => ({
    type: COMPLETED_TODO,
    payload:todo
  })