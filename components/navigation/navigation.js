import React, { useContext } from 'react';
import Link from 'next/link';

//import logoLight from '../../public/img/textjs-logo-light.svg';
//import logoDark from '../../public/img/textjs-logo-dark.svg';
import { GlobalContext } from '../../context';
//import '../../assets/css/main-styles.css';

function Navigation({ homeLogo }) {
	const { isItDark } = useContext(GlobalContext);

	return(
		<div>

			<div>
				<Link href="/">
					<div className="logo">
						<img src={ isItDark? '../../public/img/textjs-logo-dark.svg' : '../../public/img/textjs-logo-light.svg' } alt="logo-Text.js"/>
					</div>
				</Link>
			</div>

			<div>
				<div className="menu-bar" >
					<ul>
						<li>
							<Link className="btn sign-up" href="/sign-up">
								Sign Up
							</Link>
						</li>
					</ul>
				</div>
			</div>

		</div>

	);

}

export default Navigation;
