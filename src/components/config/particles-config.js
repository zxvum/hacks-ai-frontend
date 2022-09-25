const particlesConfig = {
	background: {
		color: {
			value: '#141414',
		},
	},
	fpsLimit: 60,
	speed: 1,
	interactivity: {
		events: {
			onClick: {
				enable: true,
				mode: 'repulse',
				parallax: {
					enable: false,
					force: 4,
					smooth: 100,
				},
			},
			resize: true,
		},
		modes: {
			repulse: {
				distance: 200,
				duration: 0.6,
			},
		},
	},
	particles: {
		color: {
			value: '#ffffff',
		},
		links: {
			color: '#ffffff',
			distance: 150,
			enable: true,
			opacity: 0.5,
			width: 1,
		},
		collisions: {
			enable: true,
		},
		move: {
			directions: 'none',
			enable: true,
			outModes: {
				default: 'bounce',
			},
			random: true,
			speed: 0.5,
			straight: false,
		},
		number: {
			density: {
				enable: true,
				area: 800,
			},
			value: 60,
		},
		opacity: {
			value: 0.5,
		},
		shape: {
			type: 'circle',
		},
		size: {
			value: { min: 1, max: 5 },
		},
	},
	detectRetina: true,
}

export default particlesConfig
