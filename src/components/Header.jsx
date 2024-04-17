import logo from '../images/logo.svg'
import React from 'react'

function Header() {
	return (
		<>
			<header className= 'header mx-w'>
				<div className='container'>
					<img src={logo} alt='logo' />
					<nav>
						<ul>
							<li>
								<a href='#'>Features</a>
							</li>
							<li>
								<a href='#'>Pricing</a>
							</li>
							<li>
								<a href='#'>Resources</a>
							</li>
							<li>
								<a href='#'>Contact</a>
							</li>
						</ul>
					</nav>
				</div>
				<ul>
					<li>
						<button href=''>Login</button>
					</li>
					<li>
						<button className='btn-cyan rounded-full'>Sign Up</button>
					</li>
				</ul>
			</header>
		</>
	)
}

export default Header
