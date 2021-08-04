import React , {useEffect} from 'react';
import TodoItem from './TodoItem';
import {useDispatch, useSelector} from 'react-redux'
import { getTodos } from '../actions/todoAction'

const TodoList = () => {
	const dispatch = useDispatch()
	const todos = useSelector((state) => state.todo.todos);
	useEffect(() => {
        dispatch(getTodos()) 
      }, [dispatch])
	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
