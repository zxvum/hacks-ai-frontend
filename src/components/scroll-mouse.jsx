import {motion} from "framer-motion";
import {useState} from "react";

const variants = {
    visible: {
        opacity: 1,
        y: 0,
        visibility: 'visible'
    },
    hidden: {
        opacity: 0,
        y: 20,
    },
}

function ScrollMouse() {
    const [isMouse, setMouse] = useState(true)

    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setMouse(false)
        } else {
            setMouse(true)
        }
    })

    return (
        <motion.div
            initial="visible"
            animate={isMouse ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ease: 'easeOut', duration: 0.3}}
            className="absolute bottom-[30px] left-0 w-full flex justify-center items-end">
            <div className="mouse"></div>
        </motion.div>
    )
}

export default ScrollMouse