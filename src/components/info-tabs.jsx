import { useState } from 'react'
import { motion } from 'framer-motion'

const variants = {
	init: {
		y: -20,
		opacity: 0,
		display: 'none',
	},
	open: {
		y: 0,
		opacity: 1,
		display: 'block',
	},
	exit: {
		y: 20,
		opacity: 0,
	},
}

function InfoTabs() {
	const [tab, setTab] = useState(1)

	return (
		<section id='info' className='flex flex-col justify-center'>
			<div className='h-screen pt-[80px] lg:pt-[180px]'>
				<div className='container mx-auto'>
					<div className='flex flex-col gap-3 lg:flex-row lg:justify-between'>
						<p
							onClick={() => setTab(1)}
							className={`w-full flex justify-start text-[12px] lg:text-[16px] lg:max-w-[318px] text-center transition-all duration-300 ${
								tab !== 1 && 'opacity-50 hover:opacity-100'
							}`}
						>
							что такое инфляция <br /> и зачем она нужна?
						</p>
						<p
							onClick={() => setTab(2)}
							className={`w-full flex justify-center text-[12px] lg:text-[16px] flex lg:max-w-[318px] text-center transition-all duration-300 ${
								tab !== 2 && 'opacity-50 hover:opacity-100'
							}`}
						>
							<span className='w-[180px] lg:w-[240px]'>
								для чего нужно знать инфляцию на текущий месяц и чем это полезно
							</span>
						</p>
						<p
							onClick={() => setTab(3)}
							className={`w-full flex justify-end text-[12px] lg:text-[16px] lg:max-w-[318px] text-center transition-all duration-300 ${
								tab !== 3 && 'opacity-50 hover:opacity-100'
							}`}
						>
							<span className='w-[180px] lg:w-[240px]'>
								почему расчеты инфляции настолько важны в большом бизнесе
							</span>
						</p>
					</div>
				</div>
				<div className='relative h-[388px] mt-[80px]'>
					<motion.div
						animate={
							(tab === 1 && { x: -120 }) ||
							(tab === 2 && { x: 0 }) ||
							(tab === 3 && { x: 120 })
						}
						transition={{ duration: 0.5, ease: 'easeOut', type: 'spring' }}
						className='relative w-full mt-[82px] flex items-center justify-between gap-[40px] h-full'
					>
						<svg
							className='h-full w-full relative'
							viewBox='0 0 632 145'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M0 72.5H631M631 72.5L559.5 1M631 72.5L559.5 144'
								stroke='white'
								strokeOpacity='0.5'
								strokeWidth='0.5'
							/>
						</svg>
						<div>
							<motion.p
								variants={variants}
								initial='init'
								animate={tab === 1 ? 'open' : 'exit'}
								transition={{ duration: 0.3, ease: 'easeOut' }}
								className='min-w-[328px] max-w-[328px] text-[18px]'
							>
								<span className='font-bold'>Инфляция</span> – рост цен на товары
								и услуги. При инфляции происходит обесценивание денег, снижается
								покупательная способность населения.
							</motion.p>
							<motion.p
								variants={variants}
								initial='init'
								animate={tab === 2 ? 'open' : 'exit'}
								exit='enter_exit'
								transition={{ duration: 0.3, ease: 'easeOut' }}
								className='min-w-[328px] max-w-[328px] text-[18px]'
							>
								<span className='font-bold'>Данные об инфляции</span> очень
								важны, тк за счет нее мы можем определить наценку, рост цен и
								другие параметры.
							</motion.p>
							<motion.p
								variants={variants}
								initial='init'
								animate={tab === 3 ? 'open' : 'exit'}
								transition={{ duration: 0.3, ease: 'easeOut' }}
								className='min-w-[328px] max-w-[328px] text-[18px]'
							>
								<span className='font-bold'>Расчеты данных</span> об инфляции
								проводятся для более эффективной работы внутренней системы
								банка. За счет них ведется учет многих параметров: то то то.
							</motion.p>
						</div>
						<svg
							className='rotate-180 h-full w-full relative'
							viewBox='0 0 632 145'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M0 72.5H631M631 72.5L559.5 1M631 72.5L559.5 144'
								stroke='white'
								strokeOpacity='0.5'
								strokeWidth='0.5'
							/>
						</svg>
					</motion.div>
					<div className='flex justify-between w-full absolute top-0'>
						<div className='absolute w-[388px] h-[388px] bg-[#7033F5] rounded-full left-[-264px] z-10'></div>
						<div className='absolute w-[388px] h-[388px] bg-[#7033F5] rounded-full right-[-264px] z-10'></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default InfoTabs
