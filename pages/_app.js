import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { ContextProvider } from '../context';
import '../public/css/globals.css';
import '../public/css/media-query-700.css';
import '../public/css/main-styles.css';
import '../public/css/channel-list.css';
import '../public/css/channel.css';
import '../public/css/chat.css';
import '../public/css/chat-area.css';
import '../public/css/chat-wrapper.css';
import '../public/css/dropdown-menu.css';
import '../public/css/input.css';
import '../public/css/logout.css';
import '../public/css/message.css';
import '../public/css/nav-chat.css';
import '../public/css/new-channel-button.css';
import '../public/css/new-channel-form.css';
import '../public/css/switch.css';

const App = ({ Component, pageProps }) => {

	return (
	<ContextProvider>
		<Component {...pageProps} />
	</ContextProvider>
	);
}

export default App;
