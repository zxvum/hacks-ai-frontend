import AnimatedCursor from 'react-animated-cursor'
import ParticlesBackground from '../components/header-section/ParticlesBackground'
import {Line} from 'react-chartjs-2'
import Preloader from '../components/preloader'
import particlesConfig from '../components/config/particles-config-new'
import NewNavbar from '../components/new-navbar'
import {useEffect, useState} from "react";
import axios from "axios";

function FunctionPage() {
    const [date, setDate] = useState(['сент-21', 'окт-21', 'нояб-21', 'дек-21', 'янв-22', 'февр-22', 'марта-22', 'апр-22', 'мая-22'])
    const [value, setValue] = useState([0.345, 0.675, 0.74, 1.255, 0.355, 1.335, 3.555, 1.89, 1.56])

    const updateData = () => {
        setDate([...date, 'окт-22'])
        setValue([...value, 1.56])
    }

    return (
        <div className='overflow-y-scroll'>
            <Preloader/>
            <ParticlesBackground
                isAbsolute={false}
                particles_config={particlesConfig}
            ></ParticlesBackground>
            <AnimatedCursor
                color='255,158,104'
                outerSize={8}
                outerScale={3}
                innerScale={0.9}
            ></AnimatedCursor>
            <div className='container mx-auto my-[40px]'>
                <NewNavbar></NewNavbar>
            </div>
            <div
                className='container mx-auto mt-[50px] mb-[50px] w-full flex flex-col justify-center items-center gap-[40px]'>
                <div className='w-full p-5 bg-[#1c1c1e80] rounded-[20px]'>
                    <Line
                        datasetIdKey='id'
                        data={{
                            labels: date,
                            borderColor: '#fff',
                            datasets: [
                                {
                                    id: 1,
                                    label: 'ИПЦ',
                                    data: value,
                                    backgroundColor: 'rgb(20, 80, 130)',
                                    borderColor: 'rgb(20, 80, 130)',
                                },
                            ],
                        }}
                    />
                </div>

                <div className='grid grid-cols-8 w-full gap-[40px]'>
                    <div className='col-start-1 col-span-3'>
                        <label htmlFor='file'
                               className='w-full h-[300px] border border-dashed flex items-center justify-center border-[#4f4f4f] rounded-[12px]'>
                            <p className='text-[22px] pointer'>Загрузить файл</p>
                        </label>
                        <input
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                            onChange={() => updateData()} id='file'
                            type="file" hidden/>
                    </div>
                    {/*<div className='col-start-4 col-span-5 bg-[#1c1c1e80] p-5 rounded-[12px] w-full'>*/}
                    {/*    <table className='border-collapse border border-[#4f4f4f] w-full'>*/}
                    {/*        <thead>*/}
                    {/*        <tr>*/}
                    {/*            <th className='border border-[#4f4f4f] p-2'>Период</th>*/}
                    {/*            <th className='border border-[#4f4f4f] p-2'>*/}
                    {/*                Целевой показатель*/}
                    {/*            </th>*/}
                    {/*        </tr>*/}
                    {/*        </thead>*/}
                    {/*        <tbody>*/}
                    {/*        <tr>*/}
                    {/*            <td className='border border-[#4f4f4f] text-center p-1'>*/}
                    {/*                июнь-20*/}
                    {/*            </td>*/}
                    {/*            <td className='border border-[#4f4f4f] text-center p-1'>*/}
                    {/*                0,38*/}
                    {/*            </td>*/}
                    {/*        </tr>*/}
                    {/*        <tr>*/}
                    {/*            <td className='border border-[#4f4f4f] text-center p-1'>*/}
                    {/*                июнь-20*/}
                    {/*            </td>*/}
                    {/*            <td className='border border-[#4f4f4f] text-center p-1'>*/}
                    {/*                0,38*/}
                    {/*            </td>*/}
                    {/*        </tr>*/}
                    {/*        <tr>*/}
                    {/*            <td className='border border-[#4f4f4f] text-center p-1'>*/}
                    {/*                июнь-20*/}
                    {/*            </td>*/}
                    {/*            <td className='border border-[#4f4f4f] text-center p-1'>*/}
                    {/*                0,38*/}
                    {/*            </td>*/}
                    {/*        </tr>*/}
                    {/*        <tr>*/}
                    {/*            <td className='border border-[#4f4f4f] text-center p-1'>*/}
                    {/*                июнь-20*/}
                    {/*            </td>*/}
                    {/*            <td className='border border-[#4f4f4f] text-center p-1'>*/}
                    {/*                0,38*/}
                    {/*            </td>*/}
                    {/*        </tr>*/}
                    {/*        <tr>*/}
                    {/*            <td className='border border-[#4f4f4f] text-center p-1'>*/}
                    {/*                июнь-20*/}
                    {/*            </td>*/}
                    {/*            <td className='border border-[#4f4f4f] text-center p-1'>*/}
                    {/*                0,38*/}
                    {/*            </td>*/}
                    {/*        </tr>*/}
                    {/*        <tr>*/}
                    {/*            <td className='border border-[#4f4f4f] text-center p-1'>*/}
                    {/*                июнь-20*/}
                    {/*            </td>*/}
                    {/*            <td className='border border-[#4f4f4f] text-center p-1'>*/}
                    {/*                0,38*/}
                    {/*            </td>*/}
                    {/*        </tr>*/}
                    {/*        <tr>*/}
                    {/*            <td className='border border-[#4f4f4f] text-center p-1'>*/}
                    {/*                июнь-20*/}
                    {/*            </td>*/}
                    {/*            <td className='border border-[#4f4f4f] text-center p-1'>*/}
                    {/*                0,38*/}
                    {/*            </td>*/}
                    {/*        </tr>*/}
                    {/*        </tbody>*/}
                    {/*    </table>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export {FunctionPage}
