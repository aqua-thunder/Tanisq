import React from 'react'
import { useState } from 'react'
import '../Home.css'
import { Link } from 'react-router-dom'

const Home = ({ product, productDetail }, props) => {
    const [FilterBy, setFilterBy] = useState()
    const Filter = () => {
        const home = document.getElementById('home')
        home.style.filter = "blur(8px)"
        home.style.overflow = "hidden"

        const element = document.getElementById('Filter')
        if (element) {
            const width = window.innerWidth < 768 ? "100vw" : "40vw";
            element.style.width = width;
            element.style.minHeight = "100%";
            element.style.transition = "0.3s"
        }
    }
    if (props.home) {
        const home = document.getElementById('home')
        home.style.filter = props.filter

    }
    const ShortBy = () => {
        const short = document.getElementById('short')
        if (short) {
            const width = window.innerWidth < 768 ? "90vw" : "300px";
            short.style.width = width;
            short.style.minHeight = "45vh"
            short.style.filter = "blur(0px)"
        }
    }
    const closeShortBy = () => {
        const short = document.getElementById('short')
        if (short) {
            short.style.width = "0vw",
                short.style.minHeight = "0vh"
            short.style.filter = "none"
        }
    }

    return (
        <>
            <div className='px-4 md:px-10 lg:px-28 pt-10 space-y-5 overflow-hidden' id='home'>
                <div className='flex items-center space-x-3 text-sm md:text-base'>
                    <Link to="/"><span>Home </span></Link>
                    <span><img className='w-4 md:w-5' src="/images/greaterthan-svgrepo-com.svg" alt="" /></span>
                    <span className='text-[#a73f29] font-semibold'> All Jewellery</span>
                </div>
                <div className='flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-3'>
                    <h1 className='text-2xl md:text-[2vw]' id='text-lg' >All Jewellery</h1>
                    <span className='text-base md:text-lg text-gray-600'>(22993 results)</span>
                </div>
                <div className='flex flex-col sm:flex-row justify-between gap-4'>
                    <button onClick={Filter} className='flex w-full sm:w-auto justify-between sm:justify-start space-x-3 items-center border border-gray-300 py-2 px-7 rounded-full'>
                        <div className='flex items-center space-x-3'>
                            <img className='w-5' src="/images/filter-com.svg" alt="" />
                            <span>Filter</span>
                        </div>
                        <img className='w-4 h-3' src="/images/down-com.svg" alt="" />
                    </button>
                    <button onClick={ShortBy} className='flex w-full sm:w-auto justify-between sm:justify-start space-x-3 items-center border border-gray-300 py-2 px-7 rounded-full'>
                        <div className='flex items-center space-x-3'>
                            <span>Sort by : </span>
                            <span className='font-semibold'>Price : Low To High</span>
                        </div>
                        <img className='w-4 h-3' src="/images/down-com.svg" alt="" />
                    </button>
                </div>


                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8' id='all-jewellery'>
                    {
                        product.map((productItem, productIndex) => {
                            return (
                                <div className='space-y-4 relative cursor-pointer group' onClick={() => { productDetail(productItem) }} key={productIndex}>
                                    <Link to="/detail" className='block overflow-hidden rounded-lg'>
                                        <img src={productItem.url} className='rounded-lg w-full transition-transform duration-300 group-hover:scale-105' alt="product img" />
                                    </Link>
                                    <img className='w-5 absolute top-2 right-5 ' src="/images/heart-com.svg" alt="" />
                                    <div className='px-1 md:px-3 text-lg md:text-[20px]'>
                                        <div className='truncate'>{productItem.name}</div>
                                        <div className='flex items-center space-x-3 md:space-x-5'>
                                            <div className='font-bold'>₹ {Math.round((productItem.plainGoldValue + productItem.makingCharges + productItem.GST) * 100) / 100}</div>
                                            <div className='text-gray-500 line-through text-sm md:text-base'>₹ {productItem.discount}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='load flex justify-center pt-10 md:pt-16' >
                    <button className='bg-[#772022] py-3 md:py-4 text-white px-6 md:px-8 rounded-full text-lg md:text-xl font-semibold hover:bg-[#8d2a2c] transition-colors'>Load More</button>
                </div>

                <div className='Assurance relative mt-10 md:mt-16 py-10 md:py-0'>
                    <div className='hidden md:block'>
                        <img className='w-full' src="/Product Images/backGroundImg.jpg" alt="" />
                    </div>
                    <div className='md:absolute top-[15%] lg:top-[25%] w-full text-center space-y-8 md:space-y-12 lg:space-y-16 px-4'>
                        <div className='space-y-2'>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl font-serif'>The Tanishq Assurance</h1>
                            <p className='text-lg md:text-xl lg:text-2xl text-gray-500'>Crafted by experts, cherished by you.</p>
                        </div>
                        <div className='grid grid-cols-2 md:flex md:items-center md:justify-evenly gap-8 md:gap-4 lg:gap-8'>
                            <div className='flex flex-col items-center text-base md:text-lg lg:text-2xl'>
                                <img src="/images/Exchange.jpg" className='w-16 md:w-20 lg:w-auto' alt="" />
                                <div className='mt-2'>Tanishq Exchange</div>
                            </div>
                            <div className='flex flex-col items-center text-base md:text-lg lg:text-2xl '>
                                <img src="/images/Guarantee.jpg" className='w-16 md:w-20 lg:w-auto' alt="" />
                                <div className='mt-2'>Purity Guarantee</div>
                            </div>
                            <div className='flex flex-col items-center text-base md:text-lg lg:text-2xl '>
                                <img src="/images/Replacement.jpg" className='w-16 md:w-20 lg:w-auto' alt="" />
                                <div className='mt-2'>Easy Replacements</div>
                            </div>
                            <div className='flex flex-col items-center text-base md:text-lg lg:text-2xl '>
                                <img src="/images/Maintainence.jpg" className='w-16 md:w-20 lg:w-auto' alt="" />
                                <div className='mt-2'>Lifetime Maintenance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-0 h-0 overflow-x-hidden fixed top-36 right-4 md:right-32 bg-white rounded-lg z-20 shadow-2xl transition-all duration-300' id='short'>
                <div className='p-5'>
                    <div className='flex justify-between items-center mb-4'>
                        <h1 className='text-xl font-bold'>Sort By</h1>
                        <img onClick={closeShortBy} className='invert w-5 cursor-pointer hover:scale-110 transition-transform' src="/images/cross.svg" alt="" />
                    </div>
                    <ul className='border border-gray-200 space-y-1 font-semibold text-sm rounded-xl overflow-hidden cursor-pointer'>
                        <li className='p-3 hover:bg-gray-50 transition-colors border-b border-gray-100'>Best Sellers</li>
                        <li className='p-3 hover:bg-gray-50 transition-colors border-b border-gray-100'>New Arrivals</li>
                        <li className='p-3 hover:bg-gray-50 transition-colors border-b border-gray-100'>Recommendation</li>
                        <li className='p-3 hover:bg-gray-50 transition-colors border-b border-gray-100'>Best Matches</li>
                        <li className='p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 text-[#772022]'>Price : Low to High</li>
                        <li className='p-3 hover:bg-gray-50 transition-colors'>Price : High to Low</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home
