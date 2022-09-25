import solution from "../assets/images/solution.png"
import {motion} from 'framer-motion'
import {useEffect} from "react";

const variants = {
    init: {
        opacity: 0,
        scale: 0,
    },
    open: {
        opacity: 1,
        scale: 1
    },
    close: {
        opacity: 0,
        scale: 0,
    },
}

function ModalSolution({isOpen = false, onClick}) {

    useEffect(() => {
        if (isOpen === true) {
            document.querySelector('body').classList.add('overflow-hidden')
        } else {
            document.querySelector('body').classList.remove('overflow-hidden')
        }
    }, [isOpen])

    return (
        <motion.div variants={variants} initial="init" animate={isOpen ? 'open' : 'close'}
                    transition={{duration: 0.5}}
                    className="w-full h-screen overflow-y-scroll bg-black bg-opacity-40 px-[80px] fixed top-0 left-0 z-[99] flex items-center justify-center">
            <div className="w-full h-full mt-[200px] mb-[80px] relative">
                <img src={solution} alt="solution" className="object-contain"/>
                <button
                    onClick={onClick}
                    className="w-[50px] h-[50px] absolute rounded-full right-[-20px] top-[-20px] border-2 border-dashed border-[#7033F5] flex items-center justify-center transition-all ease-out duration-500 transform hover:rotate-180 hover:border-solid hover:bg-[#7033F5]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
        </motion.div>
    )
}

export default ModalSolution