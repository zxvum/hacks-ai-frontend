import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'
import particlesConfig from '../config/particles-config'

function ParticlesBackground({
	isAbsolute = true,
	particles_config = particlesConfig,
}) {
	const particlesInit = useCallback(async engine => {
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine)
	}, [])

	const particlesLoaded = useCallback(async container => {
		if (isAbsolute) {
			document.querySelector('#particles-container canvas').style.position =
				'absolute'
		}
	}, [])

	return (
		<Particles
			id='particles-container'
			params={particles_config}
			className='absolute h-screen w-full top-0 left-0 -z-50'
			init={particlesInit}
			loaded={particlesLoaded}
		></Particles>
	)
}

export default ParticlesBackground
