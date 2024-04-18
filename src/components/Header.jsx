import { useState } from 'react';
import logo from '../images/logo.svg';
import React from 'react';

function NavMenu() {
	return (
		<ul className='flex items-center flex-col md:flex-row md:items-center'>
			<li>
				<a className='text-slate-400' href='#'>Features</a>
			</li>
			<li className='my-5 md:my-0 md:mx-5 text-slate-400'>
				<a href='#'>Pricing</a>
			</li>
			<li>
				<a className='text-slate-400' href='#'>Resources</a>
			</li>
		</ul>
	);
}

function Header() {
	const [menu, setMenu] = useState(false);

	return (
		<>
			<header className='header mx-w py-5'>
				<div className='flex items-center justify-between'>
					<article className='flex items-center'>
						<img src={logo} alt='logo' />
						<nav className='hidden md:flex md:ml-5 md:items-center md:justify-center'>
							<NavMenu />
						</nav>
					</article>
					{menu && (
						<div className='absolute left-5 right-5 rounded bg-slate-900 text-slate-200 top-20 text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 flex flex-col items-center md:flex-row md:items-center'>
							<nav className='md:hidden'>
								<NavMenu />
							</nav>
							<ul className='flex flex-col items-center md:hidden'>
								<li className='my-5 md:my-0 md:mr-5'>
									<button className='text-slate-400'>Login</button>
								</li>
								<li>
									<button className='btn-cyan rounded-full'>Sign Up</button>
								</li>
							</ul>
						</div>
					)}
					<ul className='hidden md:flex md:flex-row md:items-center ml-5'>
						<li className='my-5 md:my-0 md:mr-5'>
							<button className='text-slate-400'>Login</button>
						</li>
						<li>
							<button className='btn-cyan rounded-full'>Sign Up</button>
						</li>
					</ul>
					<button onClick={() => setMenu(!menu)} className='uppercase text-sm tracking-wide md:hidden'>{menu ? "Close" : "Menu"}</button>
				</div>
			</header>
		</>
	);
}

export default Header;