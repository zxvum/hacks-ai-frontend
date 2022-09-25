import '../assets/css/our-solution.scss'
import solution from '../assets/images/solution.svg'
import ModalSolution from "./modal-solution";
import {useState} from "react";

function OurSolution() {
    const [isModalOpen, setModalOpen] = useState(false)

    return (
        <section id='solution' className='mt-[180px] container mx-auto'>
            <ModalSolution isOpen={isModalOpen} onClick={() => setModalOpen(false)}/>
            <div className='w-full flex flex-col items-center'>
                <div className='flex flex-col items-center justify-center relative '>
                    <div className='absolute solution-bg w-[1038px] h-[323px]'></div>
                    <p className='text-[36px] font-bold text-center'>Задача</p>
                    <div className='w-full h-[300px] px-[150px] for-bg flex items-center mt-[38px]'>
                        <p className='text-center opacity-50 max-w-[662px]'>
                            С помощью пяти умов мы смогли прийти к единогласному решению
                            задачи и как можно скорее начали ее вооплащать. Спустя 20ч у нас
                            начало что-то получаться в последние пару часов мы придумали
                            лучшее решение, которое вы можете наблюдать ниже.
                        </p>
                    </div>
                </div>
                <div className='mt-[150px]'>
                    <p className='flex justify-center text-[24px] opacity-50 font-semibold'>
                        Путь решения проблемы
                    </p>
                    <img src={solution} alt='solution' className='mt-[50px]'/>
                </div>
                <div className='mt-[56px] mb-[200px] flex justify-center lg:justify-end w-full'>
                    <button
                        onClick={() => setModalOpen(true)}
                        className='uppercase py-[12px] px-[42px] border border-dashed border-[#b736ba] rounded transition-all ease-out duration-500 hover:bg-[#b736ba]'
                    >
                        результат
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OurSolution
