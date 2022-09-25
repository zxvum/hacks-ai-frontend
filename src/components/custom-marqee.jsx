import Marquee from "react-fast-marquee";
import "../assets/css/custom-marquee.scss"

function CustomMarqee() {
    return (
        <Marquee speed={20} direction='right' gradient={false} className="mt-[148px]">
            <div className="marquee-text ml-[34px]">hacks-ai / hacks-ai / hacks-ai / hacks-ai /
                hacks-ai /
                hacks-ai /
            </div>
        </Marquee>
    )
}

export default CustomMarqee