import Typed from 'react-typed'
import { motion } from 'framer-motion'

function Preloader() {
	document.body.classList.add('overflow-hidden')
	setTimeout(function () {
		document.body.classList.remove('overflow-hidden')
	}, 3200)

	return (
		<motion.div
			initial={{ height: '100vh', opacity: 1 }}
			animate={{
				height: '0vh',
				opacity: [1, 1, 0],
				transitionEnd: {
					visibility: 'hidden',
				},
			}}
			exit={{ height: '100vh', opacity: 1, visibility: 'visible' }}
			transition={{ delay: 3.2, duration: 0.7, ease: 'easeInOut' }}
			className='fixed top-0 left-0 h-screen w-full flex items-center justify-center bg-[#141414] z-50'
		>
			<p className='text-[32px] font-medium'>
				<Typed
					strings={['while.action', 'while.act']}
					loop={false}
					typeSpeed={60}
					backSpeed={90}
					startDelay={500}
				/>
			</p>
		</motion.div>
	)
}

export default Preloader
