import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './index';
import Chat from './chat/chat';
import SignUp from './sign-up/sign-up';
import { ContextProvider } from '../context';
import '../globals.css';
import '../media-query-700.css';

const App = () => {

	return (
	<ContextProvider>
		<Router basename={ '/text-js' }>
			<Switch>
				<Route path="/" exact component={ Login } />
				<Route path="/signup" exact component={ SignUp } />
				<Route path="/@me" exact component={ Chat } />
			</Switch>
		</Router> 
	</ContextProvider>
	);
}

export default App;
