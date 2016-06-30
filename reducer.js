import { combineReducers } from 'redux'


function setVisible_reducer(state = initialState, action){
	switch(action.type){
		case 'SET_VISIBLE':
			return action.filter
		default:
			return state

	}
}

function todos_reducer( state = initialState, action){
	switch(action.type){
		case 'ADD_TODO':
			return {
				id: action.id
				text: action.text
				completed: false

			}
		case 'TOGGLE_TODO':
			return Object.assign({}, state, {completed: !state.completed})

		case default:
			return state
	}
}

const final_reducer = combineReducers({
	setVisible_reducer,
	todos_reducer
})

export default final_reducer