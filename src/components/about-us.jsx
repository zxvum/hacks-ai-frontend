import '../assets/css/abous-us.scss'
import AboutCard from './about-card'
import FilteredButtons from './filtered-buttons'
import data from './data'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

function AboutUs() {
	const [displayData, setDisplayData] = useState(data)
	const [activeCategory, setActiveCategory] = useState('all')

	useEffect(() => {
		setDisplayData([])
		if (activeCategory === 'all') {
			setDisplayData(data)
			return
		}
		const filteredData = data.filter(item => item.category === activeCategory)

		setTimeout(() => {
			setDisplayData(filteredData)
		}, 400)
	}, [activeCategory])

	return (
		<section id='about-us'>
			<p className='w-full text-center text-[36px] font-bold'>Наш состав</p>
			<div className='mt-[40px] flex items-center justify-center gap-[20px]'>
				<div
					onClick={() => setActiveCategory('all')}
					className={`tab-nav ${activeCategory === 'all' && 'active'}`}
				>
					<span></span>
					<p>all</p>
				</div>
				<div
					onClick={() => setActiveCategory('product manager')}
					className={`tab-nav ${
						activeCategory === 'product manager' && 'active'
					}`}
				>
					<span></span>
					<p>product manager</p>
				</div>
				<div
					onClick={() => setActiveCategory('logics')}
					className={`tab-nav ${activeCategory === 'logics' && 'active'}`}
				>
					<span></span>
					<p>logics</p>
				</div>
				<div
					onClick={() => setActiveCategory('user interface')}
					className={`tab-nav ${
						activeCategory === 'user interface' && 'active'
					}`}
				>
					<span></span>
					<p>user interface</p>
				</div>
			</div>
			<div className='grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-3 container mx-auto mt-[50px] gap-[40px]'>
				<AnimatePresence>
					{displayData.map((user, i) => (
						<AboutCard
							key={i}
							img={user.img}
							speciality={user.stack}
							username={user.name}
							about={user.description}
						/>
					))}
				</AnimatePresence>
			</div>
		</section>
	)
}

export default AboutUs
