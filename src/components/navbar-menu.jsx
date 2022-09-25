import { motion } from 'framer-motion'

const variants = {
	hide: {
		opacity: 0,
		x: '100%',
	},
	open: {
		opacity: 1,
		x: '0%',
	},
}

function NavbarMenu({ isOpen }) {
	return (
		<motion.div
			id='navbar'
			variants={variants}
			initial='hide'
			animate={isOpen ? 'open' : 'hide'}
			transition={{ duration: 0.3, ease: 'easeInOut', type: 'spring' }}
			className='fixed top-0 left-0 w-full h-screen bg-[#141414] z-30'
		>
			<div className='container h-full mx-auto flex justify-center items-center'>
				<ul className='flex flex-col gap-[20px] xl:hidden text-center'>
					<a href='/' className='text-[20px]'>
						.start()
					</a>
					<a href='/' className='text-[20px]'>
						.info()
					</a>
					<a href='/' className='text-[20px]'>
						.solution()
					</a>
					<a href='/' className='text-[20px]'>
						.about_us()
					</a>
				</ul>
			</div>
		</motion.div>
	)
}

export default NavbarMenu
