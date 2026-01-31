import React from 'react'
import '../Detail.css'
import { Link, useFetcher } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Cart from './Cart';

const Detail = ({ ProductInfo, addToCart, saveTLS }) => {
    const [Info, setInfo] = useState([])

    useEffect(() => {
        setInfo(ProductInfo)
        console.log(Info)
    }, [ProductInfo])


    return (
        <div id='product-detail'>
            {
                Info?.map((productItem, productIndex) => {
                    return (
                        <div className='px-4 md:px-10 lg:px-28' key={productItem.id} id='main-div'>
                            <div className='pt-5 md:pt-10 flex flex-col lg:flex-row gap-10 lg:gap-16' id='grid'>
                                {/* Left Column: Images and Exchange */}
                                <div className='w-full lg:w-[100%] max-w-4xl' id='w-full'>
                                    <div className='flex flex-wrap items-center gap-2 text-xs md:text-sm lg:text-base fontsize'>
                                        <Link to="/"><span className='text-gray-700 hover:text-[#832729]'>Home</span></Link>
                                        <span className='text-gray-400'>|</span>
                                        <span className='text-gray-700 font-medium'>Product</span>
                                        <span className='text-gray-400'>|</span>
                                        <span className='text-[#832729] font-bold'>{productItem.name}</span>
                                    </div>

                                    <div className='flex flex-col md:flex-row items-center mt-8 md:mt-16 gap-8 md:gap-12' id='product-images'>
                                        <div className='flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 sub-img'>
                                            <img className='w-16 md:w-20 lg:w-28 rounded-lg shadow-sm cursor-pointer hover:ring-2 hover:ring-[#832729] transition-all' src={productItem.url} alt="" />
                                            <img className='w-16 md:w-20 lg:w-28 rounded-lg shadow-sm cursor-pointer hover:ring-2 hover:ring-[#832729] transition-all' src={productItem.url1} alt="" />
                                            <img className='w-16 md:w-20 lg:w-28 rounded-lg shadow-sm cursor-pointer hover:ring-2 hover:ring-[#832729] transition-all' src={productItem.url2} alt="" />
                                        </div>
                                        <div className='flex flex-col items-center flex-1'>
                                            <div className='relative group'>
                                                <img className='w-full max-w-md lg:max-w-lg main-img rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105' src={productItem.url} alt="" />
                                                <img className='w-8 absolute top-4 right-4 cursor-pointer hover:scale-110 transition-transform' src="../images/heart-com.svg" alt="" />
                                            </div>
                                            <button className='mt-6 border border-[#832729] text-[#832729] px-10 py-2.5 rounded-full font-semibold hover:bg-[#832729] hover:text-white transition-all uppercase tracking-wider text-sm'>Try it On</button>
                                        </div>
                                    </div>

                                    <div className="bg-[#fff1d6] w-full flex flex-col sm:flex-row justify-between items-center p-6 mt-10 rounded-xl gap-6 border border-[#f5e4c3]" id='term-condition'>
                                        <div className="flex flex-col items-center sm:items-start gap-2">
                                            <img src="../images/Exchange.jpg" className='w-24 md:w-32' alt="Exchange Festival" />
                                            <a href="https://www.tanishq.co.in/exchange-terms-and-conditions.html?lang=en_IN" className='text-[11px] text-[#76500d] underline hover:text-black font-medium transition-colors' >Terms &amp; Conditions Apply</a>
                                        </div>
                                        <div className="text-sm flex flex-col items-center sm:items-end space-y-3 text-center sm:text-right">
                                            <p className='font-bold text-[#4a340b] text-base md:text-lg'>Get this product for just <span className="text-[#832729]">₹-2,851</span><sup className="text-xs">*</sup></p>
                                            <p className='font-semibold text-[#76500d]'>With our exciting exchange offer</p>
                                            <p className='max-w-xs text-[13px] text-gray-700 leading-relaxed font-medium'>When you bring in <span className='font-bold'>1.08</span> grams of 22kt gold to our store.</p>
                                            <a href='' className='bg-[#76500d] px-10 py-3 text-white rounded-full font-bold hover:bg-[#5a3e0a] transition-all text-xs uppercase tracking-widest'>Find Out How</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Product Detail and Actions */}
                                <div className='w-full lg:w-[35vw]' id='w-full'>
                                    <div className='flex justify-between items-start'>
                                        <h1 className='font-bold text-2xl md:text-3xl text-gray-800 leading-tight'>{productItem.name}</h1>
                                        <div className='flex space-x-3 mt-1'>
                                            <img className='w-8 p-1.5 bg-gray-50 rounded-full cursor-pointer hover:bg-gray-100 transition-colors' src="../images/Like.svg" alt="" />
                                            <img className='w-8 p-1.5 bg-gray-50 rounded-full cursor-pointer hover:bg-gray-100 transition-colors' src="../images/Share-com.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-2 mt-4 cursor-pointer group'>
                                        <div className='flex'>
                                            <img className='w-5' src="../images/star-com.svg" alt="" />
                                            <img className='w-5' src="../images/star-com.svg" alt="" />
                                            <img className='w-5' src="../images/star-com.svg" alt="" />
                                            <img className='w-5' src="../images/star-com.svg" alt="" />
                                            <img className='w-5' src="../images/star-com.svg" alt="" />
                                        </div>
                                        <span className='text-gray-500 text-sm group-hover:text-[#832729] transition-colors'>Write a review</span>
                                    </div>
                                    <div className="line w-full h-[1px] bg-gray-200 mt-6"></div>
                                    <p className='mt-5 text-gray-600 text-sm md:text-base leading-relaxed font-medium'>{productItem.about}</p>

                                    <div className='mt-8 flex flex-wrap items-baseline gap-4'>
                                        <span className='font-bold text-gray-900'>Offer Price</span>
                                        <span className='text-3xl font-extrabold text-[#832729]'>₹ {Math.round((productItem.plainGoldValue + productItem.makingCharges + productItem.GST) * 100) / 100}</span>
                                        <span className='text-gray-400 line-through text-lg font-medium'>₹ {productItem.discount}</span>
                                    </div>

                                    <div className='flex flex-col sm:flex-row mt-8 gap-8'>
                                        <div className='flex flex-col'>
                                            <span className='font-bold text-gray-700 text-sm uppercase tracking-wider'>Gross Weight</span>
                                            <div className='mt-2'>
                                                <select className='w-full sm:w-40 transition-all font-bold bg-white border border-gray-200 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-[#832729]/20 transition-all' name="Weight" id="cars">
                                                    <option value="1.469">{productItem.GrossWeight} g</option>
                                                    <option value="1.486">1.486 g</option>
                                                    <option value="1.482">1.482 g</option>
                                                    <option value="1.469">1.469 g</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='flex flex-col sm:items-start'>
                                            <span className='font-bold text-gray-700 text-sm uppercase tracking-wider'>Quantity</span>
                                            <div className='flex items-center gap-4 mt-2 bg-gray-50 p-1 rounded-lg border border-gray-100'>
                                                <button className='bg-white shadow-sm w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 cursor-not-allowed font-bold'>-</button>
                                                <span className='font-bold text-gray-800 px-2'>1N</span>
                                                <button className='bg-white shadow-sm w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 cursor-not-allowed font-bold'>+</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-8 space-y-6'>
                                        <div className='font-bold text-gray-800 py-3 px-4 bg-[#832729]/5 border-l-4 border-[#832729] rounded-r-lg'>
                                            Gold Purity: {productItem.GoldPurity} Karat
                                        </div>
                                        <div className='text-gray-500 text-sm font-medium'>
                                            Not sure what to buy? Check out our <span className='underline text-[#832729] font-bold cursor-pointer'>Buying Guides</span>
                                        </div>
                                        <div className='flex flex-col sm:flex-row gap-4'>
                                            <button
                                                className='flex-1 py-4 text-sm md:text-base rounded-xl font-bold border-2 border-[#832729] text-[#832729] hover:bg-[#832729] hover:text-white transition-all transform hover:-translate-y-1'
                                                onClick={() => { addToCart(productItem), saveTLS() }}
                                            >
                                                Add to Cart
                                            </button>
                                            <button className='flex-1 py-4 text-sm md:text-base rounded-xl font-bold text-white bg-[#832729] shadow-lg shadow-[#832729]/30 hover:bg-[#6c1f21] transition-all transform hover:-translate-y-1'>
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>

                                    <div className="line w-full h-[1px] bg-gray-100 mt-12"></div>

                                    <div className='flex flex-col sm:flex-row mt-6 gap-4'>
                                        <div className='flex-1 border border-gray-200 rounded-xl flex items-center bg-white overflow-hidden focus-within:ring-2 focus-within:ring-[#832729]/20 transition-all'>
                                            <select className='w-full py-3.5 px-4 outline-none text-gray-600 font-medium appearance-none' name="Weight" id="cars">
                                                <option value="India text-black">India</option>
                                                <option value="UAE">UAE</option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Netherland">Netherland</option>
                                                {/* ... other options same ... */}
                                                <option value="Australia">Australia</option>
                                            </select>
                                        </div>
                                        <div className='flex-1 relative'>
                                            <input className='pincode w-full border border-gray-200 rounded-xl py-3.5 px-4 font-medium outline-none focus:ring-2 focus:ring-[#832729]/20 transition-all' placeholder='Pincode' type="number" name="pincode" id="" />
                                            <button className='absolute right-3 top-1/2 -translate-y-1/2 text-[#832729] font-bold text-sm uppercase'>Check</button>
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8'>
                                        <div className='flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow'>
                                            <img className='w-8' src="../images/Guarantee.jpg" alt="" />
                                            <span className='text-[11px] font-bold text-gray-700 uppercase leading-tight'>Purity Guaranteed</span>
                                        </div>
                                        <div className='flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow'>
                                            <img className='w-8' src="../images/Exchange.jpg" alt="" />
                                            <span className='text-[11px] font-bold text-gray-700 uppercase leading-tight'>Exchange across stores</span>
                                        </div>
                                        <div className='flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow'>
                                            <img className='w-8' src="../images/Replacement.jpg" alt="" />
                                            <span className='text-[11px] font-bold text-gray-700 uppercase leading-tight'>Free Shipping India</span>
                                        </div>
                                    </div>
                                    <div className="line w-full h-[1px] bg-gray-100 mt-8"></div>
                                </div>
                            </div>

                            <div className='flex flex-col lg:flex-row mt-16 gap-12' id='detail'>
                                <div className='flex-1'>
                                    <h1 className='font-bold text-2xl md:text-3xl text-gray-800' >Product Details</h1>
                                    <div className='font-bold text-[#832729] mt-8 text-lg uppercase tracking-widest'>Specifications</div>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 mt-6 gap-6 specificatjion'>
                                        <div className='flex flex-col border-b border-gray-100 pb-2'>
                                            <span className='text-xs text-gray-400 font-bold uppercase tracking-wider'>Brand</span>
                                            <span className='font-bold text-gray-700 mt-1'> {productItem.Brand}</span>
                                        </div>
                                        <div className='flex flex-col border-b border-gray-100 pb-2'>
                                            <span className='text-xs text-gray-400 font-bold uppercase tracking-wider'>Collection</span>
                                            <span className='font-bold text-gray-700 mt-1'> {productItem.Collection}</span>
                                        </div>
                                        <div className='flex flex-col border-b border-gray-100 pb-2'>
                                            <span className='text-xs text-gray-400 font-bold uppercase tracking-wider'>Gender</span>
                                            <span className='font-bold text-gray-700 mt-1'> {productItem.Gender}</span>
                                        </div>
                                        <div className='flex flex-col border-b border-gray-100 pb-2'>
                                            <span className='text-xs text-gray-400 font-bold uppercase tracking-wider'>Occasion</span>
                                            <span className='font-bold text-gray-700 mt-1'> {productItem.Occasion}</span>
                                        </div>
                                        <div className='flex flex-col border-b border-gray-100 pb-2'>
                                            <span className='text-xs text-gray-400 font-bold uppercase tracking-wider'>Karatage</span>
                                            <span className='font-bold text-gray-700 mt-1'> {productItem.GoldPurity} KT</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='hidden lg:block w-[35vw] detail-img'>
                                    <img className='w-full main-img rounded-2xl shadow-lg transform rotate-3' src={productItem.url} alt="" />
                                </div>
                            </div>

                            <div className='mt-20 overflow-hidden'>
                                <div className='flex items-center gap-4 mb-8'>
                                    <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>Price Breakup</h1>
                                    <div className='flex-1 h-[2px] bg-gray-100'></div>
                                </div>
                                <div className='overflow-x-auto rounded-2xl border border-gray-100 shadow-sm'>
                                    <table className='w-full text-left border-collapse bg-white min-w-[700px]'>
                                        <thead>
                                            <tr className='bg-gray-50 border-b border-gray-100'>
                                                <th className='p-5 text-[#832729] font-bold text-sm uppercase tracking-wider'>Component</th>
                                                <th className='p-5 text-[#832729] font-bold text-sm uppercase tracking-wider'>Rate</th>
                                                <th className='p-5 text-[#832729] font-bold text-sm uppercase tracking-wider'>Weight</th>
                                                <th className='p-5 text-[#832729] font-bold text-sm uppercase tracking-wider'>Discount</th>
                                                <th className='p-5 text-[#832729] font-bold text-sm uppercase tracking-wider text-right'>Final Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='border-b border-gray-50'>
                                                <td className='p-5 font-semibold text-gray-700'>{productItem.GoldPurity}KT Plain Gold</td>
                                                <td className='p-5 text-gray-600 font-medium'>Rs {productItem.GoldRate}/g</td>
                                                <td className='p-5 text-gray-600 font-medium'>{productItem.GrossWeight}g</td>
                                                <td className='p-5 text-gray-600 font-medium'>-</td>
                                                <td className='p-5 font-bold text-gray-800 text-right'>Rs {productItem.plainGoldValue}</td>
                                            </tr>
                                            <tr className='border-b border-gray-50'>
                                                <td className='p-5 font-semibold text-gray-700'>Making Charges</td>
                                                <td className='p-5 text-gray-600 font-medium'>-</td>
                                                <td className='p-5 text-gray-600 font-medium'>-</td>
                                                <td className='p-5 text-gray-600 font-medium'>-</td>
                                                <td className='p-5 font-bold text-gray-800 text-right'>Rs {productItem.makingCharges}</td>
                                            </tr>
                                            <tr className='bg-[#832729]/5'>
                                                <td className='p-5 font-bold text-[#832729]'>Sub Total</td>
                                                <td className='p-5'></td>
                                                <td className='p-5 font-bold text-gray-700'>1.482g</td>
                                                <td className='p-5'></td>
                                                <td className='p-5 font-extrabold text-[#832729] text-right'>Rs {Math.round((productItem.plainGoldValue + productItem.makingCharges) * 100) / 100}</td>
                                            </tr>
                                            <tr>
                                                <td className='p-5 font-semibold text-gray-700'>GST</td>
                                                <td className='p-5'></td>
                                                <td className='p-5'></td>
                                                <td className='p-5'></td>
                                                <td className='p-5 font-bold text-gray-800 text-right'>Rs {productItem.GST}</td>
                                            </tr>
                                            <tr className='bg-[#832729] text-white'>
                                                <td className='p-5 font-bold text-lg'>Grand Total</td>
                                                <td className='p-5'></td>
                                                <td className='p-5'></td>
                                                <td className='p-5'></td>
                                                <td className='p-5 font-black text-xl text-right'>Rs {Math.round((productItem.plainGoldValue + productItem.makingCharges + productItem.GST) * 100) / 100}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className='mt-20 space-y-8 bg-gray-50 py-16'>
                <h1 className="font-bold text-2xl md:text-4xl text-center text-gray-800" >More Information</h1>
                <div className='px-4 md:px-10 lg:px-28'>
                    <img src="../Product Images/Poster.jpg" className='w-full rounded-2xl shadow-xl border-4 border-white' alt="" />
                </div>
            </div>

        </div>
    )
}

export default Detail
