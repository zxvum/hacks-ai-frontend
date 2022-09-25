import { motion } from 'framer-motion'

function AboutCard({
	speciality,
	username,
	about,
	telegram_link = '',
	vk_link = '',
	instagram_link = '',
	img,
}) {
	return (
		<motion.div
			layout
			initial={{ opacity: 0, transform: 'scale(0)' }}
			animate={{ opacity: 1, transform: 'scale(1)' }}
			exit={{ opacity: 0, transform: 'scale(0)' }}
			transition={{ duration: 0.5 }}
			className='flex items-center gap-[40px]'
		>
			<div className='min-w-[290px] h-[290px] rounded-full'>
				<img src={img} alt='' className='w-full h-full rounded-full' />
			</div>
			<div className='flex flex-col h-full justify-center'>
				<div className='flex flex-col'>
					<p className='text-[13px] text-[#FF9E68] uppercase leading-[2%]'>
						{speciality}
					</p>
					<p className='mt-[6px] text-[26px]'>{username}</p>
				</div>
				<div className='bg-[#4f4f4f] h-[2px] my-[12px]' />
				<p className='text-[14px] w-full'>{about}</p>
				<div className='flex gap-[20px] mt-[24px]'>
					<a
						href={telegram_link}
						className='hover:scale-110 transform transition duration-300'
					>
						<svg
							fill='#FF9E68'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 50 50'
							width='32px'
							height='32px'
						>
							<path d='M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z' />
						</svg>
					</a>
					<a
						href={vk_link}
						className='hover:scale-110 transform transition duration-300 opacity-50 hover:opacity-100'
					>
						<svg
							fill='#ffffff'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 50 50'
							width='32px'
							height='32px'
						>
							<path d='M25,2C12.318,2,2,12.318,2,25s10.318,23,23,23c12.683,0,23-10.318,23-23S37.683,2,25,2z M34.973,29.535 c2.237,1.986,2.702,2.695,2.778,2.816C38.678,33.821,36.723,34,36.723,34h-4.12c0,0-1.003,0.011-1.86-0.557 c-1.397-0.915-2.86-2.689-3.888-2.381C25.992,31.32,26,32.486,26,33.483C26,33.84,25.693,34,25,34s-0.981,0-1.288,0 c-2.257,0-4.706-0.76-7.149-3.313c-3.456-3.609-6.487-10.879-6.487-10.879s-0.179-0.366,0.016-0.589 c0.221-0.25,0.822-0.218,0.822-0.218L14.909,19c0,0,0.376,0.071,0.646,0.261c0.223,0.156,0.347,0.454,0.347,0.454 s0.671,2.216,1.526,3.629c1.67,2.758,2.447,2.828,3.014,2.531C21.27,25.445,21,22.513,21,22.513s0.037-1.259-0.395-1.82 c-0.333-0.434-0.97-0.665-1.248-0.701c-0.225-0.029,0.151-0.423,0.63-0.648C20.627,19.059,21.498,18.986,23,19 c1.169,0.011,1.506,0.081,1.962,0.186C26.341,19.504,26,20.343,26,23.289c0,0.944-0.13,2.271,0.582,2.711 c0.307,0.19,1.359,0.422,3.231-2.618c0.889-1.442,1.596-3.834,1.596-3.834s0.146-0.263,0.373-0.393 c0.232-0.133,0.225-0.13,0.543-0.13S35.832,19,36.532,19c0.699,0,1.355-0.008,1.468,0.402c0.162,0.589-0.516,2.607-2.234,4.797 C32.943,27.793,32.63,27.457,34.973,29.535z' />
						</svg>
					</a>
					<a
						href={instagram_link}
						className='hover:scale-110 transform transition duration-300 opacity-50 hover:opacity-100'
					>
						<svg
							fill='#ffffff'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 50 50'
							width='32px'
							height='32px'
						>
							<path d='M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z' />
						</svg>
					</a>
				</div>
			</div>
		</motion.div>
	)
}

export default AboutCard
