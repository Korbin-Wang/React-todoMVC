import React, { Proptype } from 'react'
import Todo from './Todo.js'

const TodoList = ({todos, onClick}) => {
	<ul>
		{todos.map(todo => 
			<Todo 
				key = {todo.id}
				{...todo}
				onclick = { () => onTodoClick(todo.id)}
			/>
			
			)}
	</ul>

)

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired,

	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
}

export default TodoList