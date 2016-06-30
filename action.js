
let n = 0

export function addTodo(text) {
	return  {
		type: 'ADD_TODO',
		id: n++,
		text
	}
}

export function toggleTodo(id){
	return{
		type: 'TOGGLE_TODO',
		id

	}
}

export function setVisible(filter){
	return{
		type: 'SET_VISIBLE',
		filter

	}

}