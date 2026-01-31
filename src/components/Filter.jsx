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
            <div className="w-0 h-0 left-0 overflow-hidden fixed bg-white z-[100] shadow-2xl transition-all duration-300" id='Filter'>
                <div className='p-4 md:p-6 h-full flex flex-col'>
                    <div className='flex justify-between items-center mb-6'>
                        <h1 className='text-xl md:text-2xl font-bold'>Filter By</h1>
                        <img onClick={FilterClose} className='bg-gray-900 p-2 rounded-full invert w-9 h-9 cursor-pointer transition-colors' src="../images/cross.svg" alt="" />
                    </div>
                    <div className='flex-1 overflow-y-auto px-1'>
                        <ul className='border border-gray-100 rounded-xl space-y-4 md:space-y-6 py-6 pl-6 text-sm md:text-base font-semibold text-gray-700'>
                            <li className='cursor-pointer hover:text-[#832729] transition-colors'>Price</li>
                            <li className='cursor-pointer hover:text-[#832729] transition-colors'>Jewellery Type</li>
                            <li className='cursor-pointer hover:text-[#832729] transition-colors'>Product</li>
                            <li className='cursor-pointer hover:text-[#832729] transition-colors'>Brand</li>
                            <li className='cursor-pointer hover:text-[#832729] transition-colors'>Gender</li>
                            <li className='cursor-pointer hover:text-[#832729] transition-colors'>Purity</li>
                            <li className='cursor-pointer hover:text-[#832729] transition-colors'>Occasion</li>
                            <li className='cursor-pointer hover:text-[#832729] transition-colors'>Metal</li>
                            <li className='cursor-pointer hover:text-[#832729] transition-colors'>Diamond Clarity</li>
                            <li className='cursor-pointer hover:text-[#832729] transition-colors'>Collection</li>
                            <li className='cursor-pointer hover:text-[#832729] transition-colors'>Community</li>
                            <li className='cursor-pointer hover:text-[#832729] transition-colors'>Type</li>
                            <li className='cursor-pointer hover:text-[#832729] transition-colors'>Metal Color</li>
                            <li className='cursor-pointer hover:text-[#832729] transition-colors'>Virtual Try On</li>
                        </ul>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-between gap-3 mt-6 pt-4 border-t border-gray-100'>
                        <button className='flex items-center justify-center space-x-2 w-full sm:w-[12rem] text-sm font-bold bg-[#f2e7e9] py-3.5 rounded-full border border-[#832729] text-[#832729] hover:bg-[#ebdce0] transition-colors'>
                            <span>Clear Filters</span>
                            <img className='w-3' src="../images/greaterthan-svgrepo-com.svg" alt="" />
                        </button>
                        <button className='flex items-center justify-center space-x-2 w-full sm:w-[12rem] text-sm font-bold bg-[#832729] py-3.5 rounded-full border border-[#832729] text-white hover:bg-[#6c1f21] transition-colors'>
                            <span>Show Results</span>
                            <img className='w-3 invert' src="../images/greaterthan-svgrepo-com.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter
