import { useState, useEffect } from 'react'

import logo from '../assets/Pufi.svg'

import { BsFillUmbrellaFill } from "react-icons/bs";
import { BsBasket2Fill } from "react-icons/bs";
import { BiChair } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

import { BsThreeDotsVertical } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";

export const Nav = () => {
	const [navMobile, setNavMobile] = useState(false)
	useEffect(() => {
		let screen = window.screen.width
		if (screen > 650) {
			setNavMobile(false)
		}
	}, [])
	return (
		<nav>
			<img src={logo} alt="logo pufi" />
			<BsThreeDotsVertical onClick={() => setNavMobile(true)} className='icon-mobile' />
			<ul className={navMobile && 'nav-mobile'}>
				<BsXCircle onClick={() => setNavMobile(false)} className='exit-mobile' />
				<li>
					<a href="#puf">
						<BiChair />
						<span>pufi puff</span>
					</a>
				</li>
				<li>
					<a href="#rain">
						<BsFillUmbrellaFill />
						<span>pufi rain</span>
					</a>
				</li>
				<li>
					<a href="#cart">
						<BsBasket2Fill />
						<span>pufi cart</span>
					</a>
				</li>
				<li>
					<a href="#nap">
						<BsFillBagFill />
						<span>pufi nap</span>
					</a>
				</li>
			</ul>
			<div className='profile'>
				<div className='account'>
					<span>Mi cuenta</span>
					<BsChevronDown />
				</div>
				<p>Mi compra</p>
			</div>
		</nav>
	)
}
