import telegram from '../assets/images/footer/telegram.svg'
import vk from '../assets/images/footer/vk.svg'
import youtube from '../assets/images/footer/youtube.svg'

function Footer() {
	return (
		<div className='py-[56px] w-full bg-[#1c1c1e] mt-[130px]'>
			<div className='container mx-auto grid grid-cols-8 flex items-start'>
				<div className='col-span-2 col-start-1 flex flex-col gap-[24px]'>
					<p className='text-[42px] font-semibold'>while.act</p>
					<p>
						Мы <span className='underline'>используем файл cookie</span> <br />
						для персонализации сервисов <br />и удобства использования сайта.
					</p>
				</div>
				<div className='col-span-3 col-start-4 mt-5'>
					<div className='flex gap-[30px] text-[20px]'>
						<a
							href='/'
							className='opacity-70 hover:opacity-100 transition-all ease-in-out duration-300'
						>
							Решение
						</a>
						<a
							href='/'
							className='opacity-70 hover:opacity-100 transition-all ease-in-out duration-300'
						>
							О нас
						</a>
						<a
							href='/'
							className='opacity-70 hover:opacity-100 transition-all ease-in-out duration-300'
						>
							Информация
						</a>
					</div>
					<div className='mt-[53px] flex gap-[5px]'>
						<div className='w-[46px] h-[46px] rounded-[6px] flex justify-center items-center bg-[#4f4f4f] transition duration-300 transform hover:scale-110'>
							<img src={telegram} alt='' />
						</div>
						<div className='w-[46px] h-[46px] rounded-[6px] flex justify-center items-center bg-[#4f4f4f] transition duration-300 transform hover:scale-110'>
							<img src={vk} alt='' />
						</div>
						<div className='w-[46px] h-[46px] rounded-[6px] flex justify-center items-center bg-[#4f4f4f] transition duration-300 transform hover:scale-110'>
							<img src={youtube} alt='' />
						</div>
					</div>
				</div>
				<div className='col-span-2 flex justify-end mt-5'>
					<a
						href='#navbar'
						className='opacity-70 hover:opacity-100 transition-all ease-in-out duration-300'
					>
						Вернуться в начало ->
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
