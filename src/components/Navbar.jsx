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
        <div id='navbar' className='relative z-50'>
            <div className="bg-[#f2e9e9] px-4 md:px-10 lg:px-28 sticky top-0 z-50 shadow-sm">
                <Filter />
                <div className='py-3 flex items-center justify-between lg:justify-center gap-4 md:gap-10 '>
                    <Link to="/"><img className='w-16 md:w-20 cursor-pointer' src="../images/logo.svg" alt="Tanishq Logo" /></Link>
                    <div className='hidden md:flex flex-1 max-w-2xl bg-white rounded-md px-2 h-10 items-center' id="search">
                        <input type="text" className='flex-1 pl-3 outline-none text-sm' placeholder='Search for Gold Jewellery, Diamond Jewellery and more…' />
                        <div className='flex space-x-3 cursor-pointer px-2 items-center'>
                            <img className='w-5 md:w-6' src="../images/camera-com.svg" alt="" />
                            <img className='w-4 md:w-5' src="../images/microphone-com.svg" alt="" />
                            <img className='w-5 md:w-6' src="../images/search-com.svg" alt="" />
                        </div>
                    </div>
                    <div className='flex items-center space-x-3 md:space-x-6 lg:space-x-10' >
                        <div className='hidden sm:flex flex-col justify-center items-center cursor-pointer group'>
                            <img className='w-5 md:w-6 transition-transform group-hover:scale-110' src="../images/diemond.svg" alt="" />
                            <span className='text-[10px] md:text-[13px] text-[#a73f29] group-hover:font-semibold transition-all uppercase'>DIAMOND</span>
                        </div>
                        <div className='hidden sm:flex flex-col justify-center items-center space-y-1 cursor-pointer group'>
                            <img className='w-4 md:w-5 transition-transform group-hover:scale-110' src="../images/store-com.svg" alt="" />
                            <span className='text-[10px] md:text-[13px] text-[#a73f29] group-hover:font-semibold transition-all uppercase'>STORES</span>
                        </div>
                        <div className='flex flex-col justify-center items-center cursor-pointer group'>
                            <img className='w-5 md:w-7 transition-transform group-hover:scale-110' src="../images/account-com.svg" alt="" />
                            <span className='text-[10px] md:text-[13px] text-[#a73f29] group-hover:font-semibold transition-all uppercase'>ACCOUNT</span>
                        </div>
                        <div className='hidden sm:flex flex-col justify-center items-center cursor-pointer space-y-2 group'>
                            <img className='w-4 md:w-5 transition-transform group-hover:scale-110' src="../images/heart-navigation-com.svg" alt="" />
                            <span className='text-[10px] md:text-[13px] text-[#a73f29] group-hover:font-semibold transition-all uppercase'>WISHLIST</span>
                        </div>
                        <Link to="/cart" className='relative group'>
                            <div className='flex flex-col items-center cursor-pointer'>
                                <img className='w-5 md:w-6 transition-transform group-hover:scale-110' src="../images/cart-shopping-com.svg" alt="" />
                                <span className='text-[10px] md:text-[13px] text-[#a73f29] group-hover:font-semibold transition-all uppercase'>CART</span>
                            </div>
                            {count > 0 && (
                                <span className='absolute -top-2 -right-2 bg-[#a73f29] min-w-[18px] h-[18px] flex items-center justify-center px-1 text-[10px] rounded-full text-white font-bold border-2 border-[#f2e9e9]'>
                                    {count}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>


            <div className="secondNav px-16 pt-5 " id='second-navigation'>
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
            <div onMouseOver={EaringsTable} onMouseOut={EaringsTableClose} className=' bg-white shadow-md shadow-[#772022] w-0 h-0 top-40 left-96 overflow-x-hidden fixed z-10 rounded-md' id='EARRINGS'>
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

        </div>
    )
}

export default Navbar
