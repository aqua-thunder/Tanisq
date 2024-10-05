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
            setFilterBy(
                element.style.width = "25vw",
                element.style.minHeight = "100%",
                element.style.transition = "0.3s"
            )
        }
        <Filter FilterBy={FilterBy} />
    }
    if (props.home) {
        const home = document.getElementById('home')
        home.style.filter = props.filter
        home.style.position = props.position
    }
    const ShortBy = () => {
        const short = document.getElementById('short')
        if (short) {
            short.style.width = "25vw",
                short.style.minHeight = "45vh"
            home.style.filter = "blur(8px)"
            short.style.filter = "blur(0px)"
        }
    }
    const closeShortBy = () => {
        const short = document.getElementById('short')
        if (short) {
            short.style.width = "0vw",
                short.style.minHeight = "0vh"
            home.style.filter = "none"
        }
    }



    return (
        <>
            <div className='px-28 pt-10 space-y-5' id='home'>
                <div className='flex items-center space-x-3'>
                    <Link to="/"><span>Home </span></Link>
                    <span><img className='w-5' src="../images/greaterthan-svgrepo-com.svg" alt="" /></span>
                    <span className='text-[#a73f29] font-semibold'> All Jewellery</span>
                </div>
                <div className='flex items-center  space-x-3'>
                    <h1 className='text-[2vw] '>All Jewellery</h1>
                    <span className='text-lg text-gray-600'>(22993 results)</span>
                </div>
                <div className='flex justify-between'>
                    <button onClick={Filter} className='flex  space-x-3 items-center border border-gray-300 py-2 px-7 rounded-full'>
                        <img className='w-5' src="../images/filter-com.svg" alt="" />
                        <span>Filter</span>
                        <img className='w-4 h-3' src="../images/down-com.svg" alt="" />
                    </button>
                    <button onClick={ShortBy} className='flex  space-x-3 items-center border border-gray-300 py-2 px-7 rounded-full'>
                        <span>Short by : </span>
                        <span className='font-semibold'>Price : Low To High</span>
                        <img className='w-4 h-3' src="../images/down-com.svg" alt="" />
                    </button>
                </div>


                <div className='grid grid-cols-3 gap-8'>
                    {
                        product.map((productItem, productIndex) => {
                            return (
                                <div className='space-y-5 relative cursor-pointer' onClick={() => { productDetail(productItem) }} key={productIndex}>
                                    <Link to="/detail"><img src={productItem.url} className='rounded-lg' alt="" /></Link>
                                    <img className='w-5 absolute top-0 right-5 ' src="../images/heart-com.svg" alt="" />
                                    <div className='px-3 text-[20px]'>
                                        <div>{productItem.name}</div>
                                        <div className='flex space-x-5'>
                                            <div className=''>₹ {Math.round((productItem.plainGoldValue + productItem.makingCharges + productItem.GST) * 100) / 100}</div>
                                            <div className='text-gray-500 line-through'>₹ {productItem.discount}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='load flex justify-center pt-16' >
                    <button className='bg-[#772022] py-4 text-white px-8 rounded-full text-xl font-semibold'>Load More</button>
                </div>

                <div className='Assurance relative pt-16 '>

                    <img className='' src="../Product Images/backGroundImg.jpg" alt="" />
                    <div className='absolute top-[25%] w-[100%] text-center  space-y-16'>
                        <div>
                            <h1 className='text-5xl '>The Tanishq Assurance</h1>
                            <span className='text-2xl text-gray-500'>Crafted by experts, cherished by you.</span>
                        </div>
                        <div className='flex items-center justify-evenly'>
                            <div className='text-2xl'>
                                <img src="../images/Exchange.jpg" alt="" />
                                <div className='mt-2'>Tanishq</div> <div>Exchange</div>
                            </div>
                            <div className='text-2xl '>
                                <img src="../images/Guarantee.jpg" alt="" />
                                <div className='mt-2'>Purity</div> <div>Guarantee</div>
                            </div>
                            <div className='text-2xl '>
                                <img src="../images/Replacement.jpg" alt="" />
                                <div className='mt-5'>Easy</div> <div>Replacements</div>
                            </div>
                            <div className='text-2xl '>
                                <img src="../images/Maintainence.jpg" alt="" />
                                <div className='mt-2'>Lifetime</div> <div>Maintenance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-0 h-0 overflow-x-hidden fixed top-36 right-32 bg-white rounded-lg z-10' id='short'>
                <div className='p-5'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl'>Short By</h1>
                        <img onClick={closeShortBy} className='invert w-5 cursor-pointer' src="../images/cross.svg" alt="" />
                    </div>
                    <ul className='border border-gray-400 space-y-4 font-semibold text-sm p-3 rounded-xl mt-3 cursor-pointer'>
                        <li>Best Sellers</li>
                        <li>New Arrivals</li>
                        <li>Recommandation</li>
                        <li>Best Matches</li>
                        <li className='active:text-[#772022]'>Price : Low to Heigh</li>
                        <div className="line h-[1px] w-full bg-black"></div>
                        <li>Price : Heigh to Low</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home
