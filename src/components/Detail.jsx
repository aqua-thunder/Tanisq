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
    }, [ProductInfo])


    return (
        <>

            {
                Info?.map((productItem, productIndex) => {
                    return (
                        <div className='px-28' key={productItem.id}>

                            <div className=' pt-10 flex'>
                                <div className=' w-[50vw] '>
                                    <div className='space-x-2'>
                                        <Link to="/"><span className='text-gray-700'>Home</span></Link>
                                        <span className='text-gray-700'>|</span>
                                        <span className='text-gray-700'>Product</span>
                                        <span className='text-gray-700'>|</span>
                                        <span className='text-[#832729] font-semibold'>{productItem.name}</span>
                                    </div>
                                    <div className='flex items-center mt-16 space-x-32'>
                                        <div className='space-y-10'>
                                            <img className='w-[7rem]' src={productItem.url} alt="" />
                                            <img className='' src={productItem.url1} alt="" />
                                            <img className='' src={productItem.url2} alt="" />
                                        </div>
                                        <div className='flex flex-col items-end justify-center'>
                                            <img className='w-[24rem]' src={productItem.url} alt="" />
                                            <button className='mt-3 border px-8 rounded-md py-'>Try it On</button>
                                        </div>
                                    </div>
                                    <div className=" bg-[#fff1d6] w-[40vw] flex justify-between p-5 mt-7">
                                        <div className="">
                                            <img src="../images/Exchange.jpg" alt="Exchange Festival" />
                                            <a href="https://www.tanishq.co.in/exchange-terms-and-conditions.html?lang=en_IN" className='text-[10px] text-[#76500d] underline' >Terms &amp; Conditions Apply</a>
                                        </div>
                                        <div className="text-sm flex flex-col items-center space-y-2">
                                            <p className='font-semibold'>Get this product for just <span className=""> ₹<span >-2,851</span> </span><sup className="">*</sup></p>
                                            <p className='font-semibold'>with our exciting exchange offer</p>
                                            <p className='w-72 text-[13px] text-center '>When you bring in <span >1.08</span> grams of 22kt gold  to our store.</p>

                                            <a href='' className='bg-[#76500d] px-12 py-2 text-white'>Find Out How</a>
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[35vw]'>
                                    <div className='flex justify-between'>
                                        <div className='font-bold text-2xl'>{productItem.name}</div>
                                        <div className='flex space-x-3'>
                                            <img className='w-8 cursor-pointer' src="../images/Like.svg" alt="" />
                                            <img className='w-8 cursor-pointer' src="../images/Share-com.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className='flex space-x-2 cursor-pointer'>
                                        <img className='w-5' src="../images/star-com.svg" alt="" />
                                        <img className='w-5' src="../images/star-com.svg" alt="" />
                                        <img className='w-5' src="../images/star-com.svg" alt="" />
                                        <img className='w-5' src="../images/star-com.svg" alt="" />
                                        <img className='w-5' src="../images/star-com.svg" alt="" />
                                        <span className='text-gray-600'>Write a riview</span>
                                    </div>
                                    <div className="line w-[100%] h-[1px] bg-[#832729] mt-5"></div>
                                    <p className='mt-3 text-gray-600 text-[13px]'>{productItem.about}</p>
                                    <div className='space-x-3 mt-5 font-semibold'>
                                        <span>Offer Price</span>
                                        <span className='text-2xl'>₹ {Math.round((productItem.plainGoldValue + productItem.makingCharges + productItem.GST) * 100) / 100}</span>
                                        <span className='text-gray-500 line-through text-lg'>₹ {productItem.discount}</span>
                                    </div>
                                    <div className='flex  mt-5 space-x-10'>
                                        <div className='flex flex-col '>
                                            <span className='font-semibold text-sm'>Gross Weight</span>
                                            <div className=' w-32 mt-3'>
                                                <select className='w-32 transition-all font-semibold bg-slate-100  rounded-sm py-2 px-2 outline-none' name="Weight" id="cars">
                                                    <option value="1.469">{productItem.GrossWeight} g</option>
                                                    <option value="1.486">1.486 g</option>
                                                    <option value="1.482">1.482 g</option>
                                                    <option value="1.469">1.469 g</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <span className='font-semibold text-sm'>Qty</span>
                                            <div className='space-x-3 mt-3'>
                                                <button className='bg-gray-400 px-3 py-1 rounded-full text-white cursor-no-drop'>-</button>
                                                <span className='font-semibold'>1N</span>
                                                <button className='bg-gray-400 px-3 py-1 rounded-full text-white cursor-no-drop'>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-5 space-y-5'>
                                        <div className='font-semibold text-sm'>Gold Purity: {productItem.GoldPurity} Karat</div>
                                        <div className='text-gray-500 text-sm'>Not sure what to buy? Check out our <span className='hover:underline text-[#832729] font-semibold'>Buying Guides</span></div>
                                        <div className='flex justify-between'>
                                            <button className='py-3 px-20 text-lg rounded-md font-bold  border border-black' onClick={() => { addToCart(productItem), saveTLS() }} >Add to Cart</button>
                                            <button className='py-3 px-20 text-lg rounded-md font-bold text-white bg-[#832729]'>Buy Now</button>
                                        </div>
                                    </div>
                                    <div className="line w-[100%] h-[1px] bg-[#832729] mt-12"></div>
                                    <div className='flex mt-3 justify-between'>
                                        <div className='border border-[#908e8a] rounded-md w-[253px]  flex '>
                                            <select className='w-32 transition-all  rounded-sm py-2 px-2 outline-none text-[#908e8a] appearance-none' name="Weight" id="cars">
                                                <option value="India">India</option>
                                                <option value="UAE">UAE</option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Netherland">Netherland</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Italy">Italy</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="Canada">Canada</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Australia">Australia</option>
                                            </select>
                                        </div>
                                        <input className='pincode border border-[#908e8a] rounded-md w-[232px] pl-5' placeholder='Pincode' type="number" name="pincode" id="" min={1} max={5} />
                                    </div>
                                    <div className="line w-[100%] h-[1px] bg-[#832729] mt-5"></div>
                                    <div className='text-sm font-semibold mt-6 space-y-2'>
                                        <div className='flex space-x-2'><img className='w-5' src="../images.svg" alt="" /><span>Purity Guaranted</span></div>
                                        <div className='flex space-x-2'><img className='w-5' src="../images-com.svg" alt="" /><span>Exchange across all stores.</span></div>
                                        <div className='flex space-x-2'><img className='w-4' src="../images-com.svg" alt="" /><span>Free Shipping all across India</span></div>
                                    </div>
                                    <div className="line w-[100%] h-[1px] bg-[#832729] mt-5"></div>


                                </div>
                            </div>
                            <div className='flex mt-10'>
                                <div className='w-[50vw]'>
                                    <h1 className='font-bold text-2xl' >Product Details</h1>
                                    <div className='font-semibold mt-5 '>Specification</div>
                                    <div className='flex flex-col mt-3 text-[13px] space-y-3'>
                                        <div className='flex'>
                                            <span className='font-semibold'>Brand :</span>
                                            <span> {productItem.Brand}</span>
                                        </div>
                                        <div className='flex'>
                                            <span className='font-semibold'>Collection :</span>
                                            <span> {productItem.Collection}</span>
                                        </div>
                                        <div className='flex'>
                                            <span className='font-semibold'>Gender :</span>
                                            <span> {productItem.Gender}</span>
                                        </div>
                                        <div className='flex'>
                                            <span className='font-semibold'>Occasion :</span>
                                            <span> {productItem.Occasion}</span>
                                        </div>
                                        <div className='flex'>
                                            <span className='font-semibold'>Karatage :</span>
                                            <span> {productItem.GoldPurity}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[35vw]'>
                                    <img className='w-96' src={productItem.url} alt="" />
                                </div>
                            </div>
                            <div>
                                <h1 className='text-2xl font-semibold mt-7'>Price Breakup</h1>
                                <div className='grid grid-cols-5 mt-5'>
                                    <div className='space-y-5 '>
                                        <div className='text-[#832729] font-semibold'>Component</div>
                                        <div className="line w-[100%] h-[1px] bg-[#832729] "></div>
                                        <div>{productItem.GoldPurity}KT Plain Gold</div>
                                        <div>Making Charges</div>
                                        <div className="line w-[100%] h-[1px] bg-[#832729] mt-5"></div>
                                        <div>Sub Total</div>
                                        <div>GST</div>
                                        <div>Grand Total</div>
                                    </div>
                                    <div className='space-y-5 '>
                                        <div className='text-[#832729] font-semibold'>Gold Rate({productItem.GoldPurity}KT)</div>
                                        <div className="line w-[100%] h-[1px] bg-[#832729] "></div>
                                        <div>Rs {productItem.GoldRate}/g</div>
                                        <div>-</div>
                                        <div className="line w-[100%] h-[1px] bg-[#832729] mt-5"></div>
                                        <div>-</div>
                                        <div>-</div>
                                    </div>
                                    <div className='space-y-5 '>
                                        <div className='text-[#832729] font-semibold'>Weight (g)</div>
                                        <div className="line w-[100%] h-[1px] bg-[#832729] "></div>
                                        <div>{productItem.GrossWeight}g</div>
                                        <div>-</div>
                                        <div className="line w-[100%] h-[1px] bg-[#832729] mt-5"></div>
                                        <div>1.482g</div>
                                        <div>-</div>
                                    </div>
                                    <div className='space-y-5 '>
                                        <div className='text-[#832729] font-semibold'>Discount</div>
                                        <div className="line w-[100%] h-[1px] bg-[#832729] "></div>
                                        <div>-</div>
                                        <div>-</div>
                                        <div className="line w-[100%] h-[1px] bg-[#832729] mt-5"></div>
                                        <div>-</div>
                                    </div>
                                    <div className='space-y-5 '>
                                        <div className='text-[#832729] font-semibold'>Final Value</div>
                                        <div className="line w-[100%] h-[1px] bg-[#832729] "></div>
                                        <div>Rs {productItem.plainGoldValue}</div>
                                        <div>Rs {productItem.makingCharges}</div>
                                        <div className="line w-[100%] h-[1px] bg-[#832729] mt-5"></div>
                                        <div>Rs {Math.round((productItem.plainGoldValue + productItem.makingCharges) * 100) / 100}</div>
                                        <div>Rs {productItem.GST}</div>
                                        <div className='font-bold'>Rs {Math.round((productItem.plainGoldValue + productItem.makingCharges + productItem.GST) * 100) / 100}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className='mt-20 space-y-5'>
                <h1 className="font-bold text-2xl px-28" >More Information</h1>
                <img src="../Product Images/Poster.jpg" alt="" />
            </div>

        </>
    )
}

export default Detail
