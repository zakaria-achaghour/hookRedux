import React, { useState } from 'react';
 import { useDispatch } from 'react-redux';
 import { addTodo } from '../actions/todoAction'


const AddTodoForm = () => {
	const [title, setTitle] = useState('');
	//const [errors, setErrors] = useState({});
	 const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		// if (title === '') {
		// 	setErrors({ errors: { title: 'Title is required' } });
		// 	return;
		//   }
		// 	console.log(errors);

		  const newTodo = {
			  id:Date.now(),
			  title:title,
			  completed:false
			
		  };
		  console.log(newTodo);
		dispatch(addTodo(newTodo));

		 setTitle('');
		// setErrors({});
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default AddTodoForm;
