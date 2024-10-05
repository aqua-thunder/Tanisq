import React from 'react'
import '../Navbar.css'
import Filter from './Filter'
import { Link } from 'react-router-dom'
const Navbar = ({ count }) => {
    const JwelleryTable = () => {
        const element = document.getElementById('All-JEWELLERY')

        if (element) {
            element.style.width = "50vw"
            element.style.minHeight = "50vh"
            element.style.paddingLeft = "2vw"
            element.style.paddingTop = "2vw"
        }

    }
    const JwelleryTableClose = () => {
        const element = document.getElementById('All-JEWELLERY')
        if (element) {
            element.style.width = "0vw"
            element.style.minHeight = "0vh"
            element.style.paddingLeft = "0vw"
            element.style.paddingTop = "0vw"

        }
    }
    const EaringsTable = () => {
        const element = document.getElementById('EARRINGS')
        if (element) {
            element.style.width = "50vw"
            element.style.minHeight = "28vh"
            element.style.paddingLeft = "2vw"
            element.style.paddingTop = "2vw"
        }
    }
    const EaringsTableClose = () => {
        const element = document.getElementById('EARRINGS')
        if (element) {
            element.style.width = "0vw"
            element.style.minHeight = "0vh"
            element.style.paddingLeft = "0vw"
            element.style.paddingTop = "0vw"
        }
    }

    return (
        <>

            <div className="bg-[#f2e9e9] px-28 sticky top-0 z-10">
                <Filter />
                <div className='py-3 flex items-center justify-center space-x-10 '>
                    <img className='w-20 cursor-pointer' src="../images/logo.svg" alt="" />
                    <div className='flex  bg-white rounded-sm px-2 h-10'>
                        <input type="text" name="" className=' w-[45vw] pl-3 outline-none' id="" placeholder='Search for Gold Jewellery, Diamond Jewellery and more…' />
                        <div className='flex space-x-3 cursor-pointer px-2'>
                            <img className='w-6' src="../images/camera-com.svg" alt="" />
                            <img className='w-5' src="../images/microphone-com.svg" alt="" />
                            <img className='w-6' src="../images/search-com.svg" alt="" />
                        </div>

                    </div>
                    <div className='flex space-x-10'>
                        <div className='flex flex-col justify-center items-center cursor-pointer '>
                            <img className='w-6 ' src="../images/diemond.svg" alt="" />
                            <span className='text-[13px] text-[#a73f29] hover:text-[14px] hover:font-semibold transition-all'>DIAMOND</span>
                        </div>
                        <div className='flex flex-col justify-center items-center space-y-1 cursor-pointer'>
                            <img className='w-5' src="../images/store-com.svg" alt="" />
                            <span className='text-[13px] text-[#a73f29] hover:text-[14px] hover:font-semibold transition-all'>STORES</span>
                        </div>
                        <div className='flex flex-col justify-center items-center cursor-pointer'>
                            <img className='w-7' src="../images/account-com.svg" alt="" />
                            <span className='text-[13px] text-[#a73f29] hover:text-[14px] hover:font-semibold transition-all'>ACCOUNT</span>
                        </div>
                        <div className='flex flex-col justify-center items-center cursor-pointer space-y-2'>
                            <img className='w-5 ' src="../images/heart-navigation-com.svg" alt="" />
                            <span className='text-[13px] text-[#a73f29] hover:text-[14px] hover:font-semibold transition-all '>WISHLIST</span>
                        </div>
                        <Link to="/cart">
                            <div className='justify-center items-center  cursor-pointer'>
                                <div className='flex flex-col absolute space-y-1'>
                                    <img className='w-6' src="../images/cart-shopping-com.svg" alt="" />
                                    <span className='text-[13px] text-[#a73f29] hover:text-[14px] hover:font-semibold transition-all'>CART</span>
                                </div>
                                <span className='relative top-[-10px] left-6 bg-[#a73f29] py-1 px-2 text-[12px] rounded-full text-white'>{count}</span>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>


            <div className="secondNav px-16   pt-5 ">
                <ul className='flex justify-evenly cursor-pointer text-sm '>
                    <Link to="/"> <li className='hover:text-lg transition-all' onMouseOver={JwelleryTable}><div onMouseOut={JwelleryTableClose}>All JEWELLERY</div></li></Link>
                    <li className='hover:text-lg transition-all'><a href="">GOLD</a></li>
                    <li className='hover:text-lg transition-all'><a href="">DIAMOND</a></li>
                    <li className='hover:text-lg transition-all' onMouseOver={EaringsTable}><a href="" onMouseOut={EaringsTableClose}>EARRINGS</a></li>
                    <li className='hover:text-lg transition-all'><a href="">RINGS</a></li>
                    <li className='hover:text-lg transition-all' onMouseOver={JwelleryTable} ><a href="" onMouseOut={JwelleryTableClose}>DIGITAL GOLD</a></li>
                    <li className='hover:text-lg transition-all'><a href="">MIA</a></li>
                    <li className='hover:text-lg transition-all'><a href="">COLLACTIONS</a></li>
                    <li className='hover:text-lg transition-all'><a href="">WEDDING</a></li>
                    <li className='hover:text-lg transition-all'><a href="">GIFTING</a></li>
                    <li className='hover:text-lg transition-all'><a href="">GOLDEN HARVEST</a></li>
                    <li className='hover:text-lg transition-all'><a href="">MORE</a></li>
                </ul>
            </div>
            <div onMouseOver={JwelleryTable} onMouseOut={JwelleryTableClose} className='bg-white shadow-md shadow-[#772022]   w-0 h-0 top-40 left-24 overflow-x-hidden fixed z-10 rounded-md' id='All-JEWELLERY'>
                <div className="grid grid-cols-4 gap-4">
                    <ul className='space-y-3 text-sm'>
                        <li className='text-[#772022] font-semibold'>CATEGORY</li>
                        <li className='cursor-pointer hover:text-[#772022]'>ALL JEWELLERY</li>
                        <li className='cursor-pointer hover:text-[#772022]'>EARINGS</li>
                        <li className='cursor-pointer hover:text-[#772022]'>PENDANTS</li>
                        <li className='cursor-pointer hover:text-[#772022]'>FINGER RINGS</li>
                        <li className='cursor-pointer hover:text-[#772022]'>MANGALSUTRA</li>
                        <li className='cursor-pointer hover:text-[#772022]'>CHHAINS</li>
                        <li className='cursor-pointer hover:text-[#772022]'>NOICW PIN</li>
                        <li className='cursor-pointer hover:text-[#772022]'>NACKLACES</li>
                        <li className='cursor-pointer hover:text-[#772022]'>NACKLACE SET</li>
                    </ul>
                    <ul className='space-y-3 text-sm cursor-pointer'>
                        <li className='text-white'>a</li>
                        <li className='cursor-pointer hover:text-[#772022]'>BANGLES</li>
                        <li className='cursor-pointer hover:text-[#772022]'>BRACLATES</li>
                        <li className='cursor-pointer hover:text-[#772022]'>PENDANTS EARINGS SET</li>
                        <li className='cursor-pointer hover:text-[#772022]'>GOLD COINS</li>
                        <li className='cursor-pointer hover:text-[#772022]'>GIFT CARD</li>
                    </ul>
                    <ul className='space-y-3 text-sm '>
                        <li className='text-[#772022] font-semibold '>GENDER</li>
                        <li className='cursor-pointer hover:text-[#772022]'>WOMEN</li>
                        <li className='cursor-pointer hover:text-[#772022]'>MEN</li>
                        <li className='cursor-pointer hover:text-[#772022]'>KIDS AND TEENS</li>
                    </ul>
                    <ul className='space-y-3 text-sm '>
                        <li className='text-[#772022] font-semibold'>PRICE BRAND</li>
                        <li className='cursor-pointer hover:text-[#772022]'>25K</li>
                        <li className='cursor-pointer hover:text-[#772022]'>25K - 50K</li>
                        <li className='cursor-pointer hover:text-[#772022]'>50K -1L</li>
                        <li className='cursor-pointer hover:text-[#772022]'>1L ABOVE</li>
                    </ul>
                </div>
            </div>
            <div onMouseOver={EaringsTable} onMouseOut={EaringsTableClose} className=' bg-white shadow-md shadow-[#772022]   w-0 h-0 top-40 left-96 overflow-x-hidden fixed z-10 rounded-md' id='EARRINGS'>
                <div className="grid grid-cols-5 ">
                    <ul className='space-y-3 text-sm'>
                        <li className='text-[#772022] font-semibold'>CATEGORY</li>
                        <li className='cursor-pointer hover:text-[#772022]'>ALL JEWELLERY</li>
                        <li className='cursor-pointer hover:text-[#772022]'>EARINGS</li>
                        <li className='cursor-pointer hover:text-[#772022]'>PENDANTS</li>
                        <li className='cursor-pointer hover:text-[#772022]'>FINGER RINGS</li>
                    </ul>
                    <ul className='space-y-3 text-sm cursor-pointer'>
                        <li className='cursor-pointer hover:text-[#772022]'>BANGLES</li>
                        <li className='cursor-pointer hover:text-[#772022]'>BRACLATES</li>
                        <li className='cursor-pointer hover:text-[#772022]'>PENDANTS </li>
                        <li className='cursor-pointer hover:text-[#772022]'>GOLD COINS</li>
                        <li className='cursor-pointer hover:text-[#772022]'>GIFT CARD</li>
                    </ul>
                    <ul className='space-y-3 text-sm '>
                        <li className='cursor-pointer hover:text-[#772022]'>BANGLES</li>
                        <li className='cursor-pointer hover:text-[#772022]'>BRACLATES</li>
                        <li className='cursor-pointer hover:text-[#772022]'>PENDANTS </li>
                        <li className='cursor-pointer hover:text-[#772022]'>GOLD COINS</li>
                        <li className='cursor-pointer hover:text-[#772022]'>GIFT CARD</li>
                    </ul>
                    <ul className='space-y-3 text-sm '>
                        <li className='cursor-pointer hover:text-[#772022]'>BANGLES</li>
                        <li className='cursor-pointer hover:text-[#772022]'>BRACLATES</li>
                        <li className='cursor-pointer hover:text-[#772022]'>PENDANTS </li>
                        <li className='cursor-pointer hover:text-[#772022]'>GOLD COINS</li>
                        <li className='cursor-pointer hover:text-[#772022]'>GIFT CARD</li>
                    </ul>
                    <ul className='space-y-3 text-sm '>
                        <li className='text-[#772022] font-semibold'>PRICE BRAND</li>
                        <li className='cursor-pointer hover:text-[#772022]'>25K</li>
                        <li className='cursor-pointer hover:text-[#772022]'>25K - 50K</li>
                        <li className='cursor-pointer hover:text-[#772022]'>50K -1L</li>
                        <li className='cursor-pointer hover:text-[#772022]'>1L ABOVE</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar
