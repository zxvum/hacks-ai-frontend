import "../assets/css/scroll-animation-block.scss"
import {useEffect} from "react";

function ScrollAnimation() {
    useEffect(() => {
        var scroll_animation_block, wrapper, block_height
        scroll_animation_block = document.querySelector('.scroll-animation-block')
        wrapper = document.querySelector('.wrapper')
        block_height = (wrapper.clientHeight + 500) * 3
        scroll_animation_block.style.height = `${block_height}px`
    })

    console.log(window.scrollY)

    return (
        <div className="scroll-animation-block">
            <div className="wrapper h-screen flex items-center justify-center relative">
                <div className="absolute container mx-auto left-[80px] flex flex-col">
                    <div
                        className="circle circle-border circle-top">
                        <p className="text-[15px]">Проблематика</p>
                    </div>
                    <div
                        className="circle circle-active">
                        <p className="text-[15px]">Решение</p>
                    </div>
                    <div
                        className="circle circle-border circle-bottom">
                        <p className="text-[15px]">Заключение</p>
                    </div>
                </div>
                <p className="text-[36px] max-w-[740px] ml-[120px]">Наша задача разработать и обучить искуственный
                    интелект для
                    более эффективной
                    работы банков</p>
            </div>
        </div>
    )
}

export default ScrollAnimation;