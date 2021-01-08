import Link from "next/link";
import { useState } from "react";

export default function Header() {
	return (
		<header>
			<nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
				<Link href='/'>
					<a className='navbar-brand' href='#'>
						Eskayte
					</a>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item active'>
							<Link href='/'>
								<a className='nav-link' href='#'>
									Home <span className='sr-only'>(current)</span>
								</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='/world'>
								<a className='nav-link' href='#'>
									World
								</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='/sport'>
								<a className='nav-link' href='#'>
									Sport
								</a>
							</Link>
						</li>
					</ul>
					{/* <div className='nav-item'>
						<small className=''>switch dark mode</small>
						<label className='switch'>
							<input type='checkbox' checked={dark} onChange={handleDark} />
							<span className='slider round'></span>
						</label>
					</div> */}
				</div>
			</nav>
		</header>
	);
}
