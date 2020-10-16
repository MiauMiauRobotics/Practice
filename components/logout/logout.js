import React, { useContext } from 'react';
import { useRouter } from 'next/router';

//import './logout.css';
import { GlobalContext } from '../../context';


function LogOut() {
	const router = useRouter();
	const { socket,
			channelRender } = useContext(GlobalContext);

	function removeLocalStorage() {
		socket.emit('leave', channelRender.channel_id);

		localStorage.removeItem('token');
		localStorage.removeItem('username');
		localStorage.removeItem('user_id');
		router.push('/');

	}

	return (
		<li onClick={ removeLocalStorage } className="logout" >
			LogOut
		</li>

	);

}

export default LogOut;
