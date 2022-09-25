import ParticlesBackground from './header-section/ParticlesBackground'
import AnimatedCursor from 'react-animated-cursor'
import Preloader from './preloader'
import { motion } from 'framer-motion'

function Layout({ children }) {
	return (
		<div className='relative'>
			<Preloader />
			<ParticlesBackground></ParticlesBackground>
			<AnimatedCursor
				color='255,158,104'
				outerSize={8}
				outerScale={3}
				innerScale={0.9}
			></AnimatedCursor>
			<div>{children}</div>
		</div>
	)
}

export default Layout
