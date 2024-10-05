import React from 'react'
import '../Filter.css'
import Home from './Home'
import { useState } from 'react'
const Filter = (props) => {
    const [blur, setblur] = useState()
    if (props.element) {
        const element = document.getElementById('Filter')
        element.style.width = props.width
        element.style.minHeight = props.minHeight
        element.style.transition = props.transition
    }
    const FilterClose = () => {
        const element = document.getElementById('Filter')
        const home = document.getElementById('home')
        if (element) {
            element.style.width = "0vw"
            element.style.minHeight = "0vw"
            element.style.transition = "0.3s"
        }
        if (home) {
            setblur(
                home.style.filter = "blur(0px)",
                home.style.position = "static"
            )
        }
        <Home blur={blur} />
    }

    return (
        <div>
            <div className="w-0 h-0 left-0 overflow-x-hidden fixed bg-white" id='Filter'>
                <div className='p-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-center text-[21px]'>Filter By</h1>
                        <img onClick={FilterClose} className='bg-gray-900 rounded-full invert w-5 cursor-pointer' src="../images/cross.svg" alt="" />
                    </div>
                    <ul className='  border border-gray-200 rounded-lg space-y-10 mt-5 py-7 pl-7 text-sm font-semibold '>
                        <li className='cursor-pointer'>Price</li>
                        <li className='cursor-pointer'>Jewellery Type</li>
                        <li className='cursor-pointer'>Product</li>
                        <li className='cursor-pointer'>Brand</li>
                        <li className='cursor-pointer'>Gender</li>
                        <li className='cursor-pointer'>Purity</li>
                        <li className='cursor-pointer'>Occasion</li>
                        <li className='cursor-pointer'>Metal</li>
                        <li className='cursor-pointer'>Diamond Clarity</li>
                        <li className='cursor-pointer'>Collaction</li>
                        <li className='cursor-pointer'>Comunity</li>
                        <li className='cursor-pointer'>Type</li>
                        <li className='cursor-pointer'>Metal Color</li>
                        <li className='cursor-pointer'>Virtual Try On</li>
                    </ul>
                    <div className='flex justify-between mt-5 '>
                        <button className='flex items-center justify-evenly w-[10rem] text-[14px] bg-[#f2e7e9] py-3 rounded-full border border-[#832729]'>
                            <div>Clear Filters </div>
                            <img className='w-3' src="../images/greaterthan-svgrepo-com.svg" alt="" />
                        </button>
                        <button className='flex items-center justify-evenly w-[10rem]  text-[14px] bg-[#832729] py-3  rounded-full border border-[#f2e7e9] text-white'>
                            <div>Show Results </div>
                            <img className='w-3 invert' src="../images/greaterthan-svgrepo-com.svg" alt="" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Filter
