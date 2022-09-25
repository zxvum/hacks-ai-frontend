import '../../assets/css/mouse-scroll.scss'
import ScrollMouse from '../scroll-mouse'

function Header() {
	return (
		<section id='main' className='grow relative pb-[40px] 2lg:pb-[60px]'>
			<div className='flex items-center h-full w-full'>
				<div className='flex items-start w-full'>
					<div className='grid grid-cols-8 w-full'>
						<div className='col-start-1 col-span-2 pt-7'>
							<p className='opacity-50 text-[18px] leading-[28px] font-normal hidden md:block'>
								ИИ<small>*</small> <br />
								искуственный <br />
								интелект
							</p>
						</div>
						<div className='col-span-8 lg:col-start-3 lg:col-span-4'>
							<div className='flex flex-col items-start'>
								<div className='flex w-full justify-center'>
									<div className='relative w-[320px] lg:w-auto'>
										<p className='uppercase font-bold text-[40px] lg:text-[80px] lg:leading-[109px]'>
											инфляция цен прогноз
										</p>
										<div className='absolute left-[61%] bottom-[10px] lg:bottom-[18px] bg-[#4f4f4f] w-[110px] h-[31px] lg:w-[220px] lg:h-[63px] rounded-[6px] lg:rounded-[10px] z-20'>
											<div className='absolute bottom-1 right-1 lg:bottom-2 lg:right-2 border-2 border-dashed border-white w-[110px] h-[31px] lg:w-[220px] lg:h-[63px] rounded-[6px] lg:rounded-[10px] z-10 flex items-center justify-center'>
												<p className='uppercase text-[13px] lg:text-[26px] flex items-start'>
													обучаем ии<small>*</small>
												</p>
											</div>
										</div>
									</div>
								</div>
								<p className='mt-[20px] text-[20px] text-center lg:text-left'>
									Разработка искуственного интелекта для определения уровня
									инфляции на след. месяц
								</p>
								<div className='mt-[56px] flex justify-center lg:justify-end w-full'>
									<a
										href='#solution'
										className='uppercase py-[12px] px-[42px] border border-dashed border-[#b736ba] rounded transition-all ease-out duration-500 hover:bg-[#b736ba]'
									>
										результат
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ScrollMouse />
		</section>
	)
}

export default Header
