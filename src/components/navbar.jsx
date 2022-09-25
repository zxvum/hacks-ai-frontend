// React Component
import Burger from '@animated-burgers/burger-squeeze'
// don't forget the styles
import '@animated-burgers/burger-squeeze/dist/styles.css'
import { useEffect, useState } from 'react'
import NavbarMenu from './navbar-menu'
import { Link } from 'react-router-dom'

function Navbar() {
	const [isMenuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		if (isMenuOpen === true) {
			window.scrollTo(0, 0)
			document.querySelector('body').classList.add('overflow-y-hidden')
		} else {
			document.querySelector('body').classList.remove('overflow-y-hidden')
		}
	}, [isMenuOpen])

	return (
		<section id='navbar'>
			<div className='flex items-center justify-between lg:grid grid-cols-8 gap-x-[32px] h-[48px]'>
				<p className='col-span-2 font-medium text-[32px] flex items-end'>
					while.act
				</p>

				<nav className='hidden lg:flex items-end justify-center h-full col-span-4 pb-2 gap-[42px] text-[18px]'>
					<a
						href='#main'
						className='opacity-70 hover:opacity-100 hover:pb-2 transition-all ease-in-out duration-300'
					>
						Начало
					</a>
					<a
						href='#info'
						className='opacity-70 hover:opacity-100 hover:pb-2 transition-all ease-in-out duration-300'
					>
						Информация
					</a>
					<a
						href='#solution'
						className='opacity-70 hover:opacity-100 hover:pb-2 transition-all ease-in-out duration-300'
					>
						Решение
					</a>
					<a
						href='#about-us'
						className='opacity-70 hover:opacity-100 hover:pb-2 transition-all ease-in-out duration-300'
					>
						О нас
					</a>
				</nav>
				<Link
					to={'/model'}
					className='hidden lg:flex col-span-2 justify-end contact-us gap-2 hover:-mr-3 transition-all ease-out duration-500'
				>
					Опробовать модель <span>-></span>
				</Link>

				<Burger
					className='z-40 lg:hidden'
					onClick={() => {
						setMenuOpen(!isMenuOpen)
					}}
					isOpen={isMenuOpen}
				></Burger>
			</div>
			<NavbarMenu isOpen={isMenuOpen}></NavbarMenu>
		</section>
	)
}

export default Navbar
