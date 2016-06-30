import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import final_reducer from './reducer'
import App from './components/App'


let store = createStore(final_reducer)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')



)