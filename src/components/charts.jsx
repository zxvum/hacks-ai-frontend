import charts_left_circles from "../assets/images/charts/charts-left-circles.svg"
import charts_right_circles from "../assets/images/charts/charts-right-circles.svg"
import rectangles from "../assets/images/charts/rectangles.svg"

function Charts() {
    return (
        <div className="min-h-[1146px] relative flex items-center">
            <div className="absolute w-full h-full flex items-center">
                <img src={charts_left_circles} className="absolute left-0 top-[267px]"/>
                <img src={charts_right_circles} className="absolute right-0 top-[467px]"/>
            </div>
            <div className="absolute w-full h-full flex justify-center">
                <img src={rectangles} alt="rectangles" className="absolute top-0"/>
            </div>
        </div>
    )
}

export default Charts