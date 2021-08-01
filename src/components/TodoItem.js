import React from 'react';
 import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../actions/todoAction'

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const handleCompleteClick = () => {
		const todo = {id:id,completed:!completed}
		dispatch(toggleComplete(todo));
	}
	const handleDeleteClick = () => {
		 dispatch(deleteTodo(id))
	}
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox'
					 className='mr-3' 
					 checked={completed}
					 onChange={handleCompleteClick}></input>
					{title}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
