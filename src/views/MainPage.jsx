import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Header from '../components/header-section/header'
import InfoTabs from '../components/info-tabs'
import OurSolution from '../components/our-solution'
import AboutUs from '../components/about-us'
import CustomMarqee from '../components/custom-marqee'
import Footer from '../components/footer'

function MainPage() {
	return (
		<Layout>
			<div className='container mx-auto pt-[50px] h-screen flex flex-col'>
				<Navbar />
				<Header />
			</div>
			<InfoTabs />
			{/*<Charts/>*/}
			<OurSolution />
			<AboutUs />
			<CustomMarqee />
			<Footer />
		</Layout>
	)
}

export { MainPage }
