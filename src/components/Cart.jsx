import React, { useEffect } from 'react'
import { useState } from 'react'

const Cart = ({ AddCart, saveTLS }) => {
  let subTotal = 0;
  let total = 0;
  let dis = 0;

  {
    AddCart.forEach((productItem) => {
      subTotal += Math.round((productItem.plainGoldValue + productItem.makingCharges + productItem.GST) * 100) / 100;
      total = subTotal > 0 ? subTotal - 954 : 0;
      dis += (productItem.discount || 0);
    })
  }

  return (
    <div className='flex flex-col lg:flex-row px-4 md:px-10 lg:px-28 mt-10 md:mt-16 justify-between gap-10 mb-20'>
      <div className='flex-1 lg:max-w-[60%]'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
          <span className='text-[#832729] font-bold text-lg'>Check Delivery Info</span>
          <div className='flex flex-col sm:flex-row gap-3'>
            <div className='border border-gray-300 rounded-lg flex bg-white overflow-hidden'>
              <select className='w-full sm:w-32 py-2.5 px-3 outline-none text-gray-600 font-medium' name="Weight" id="cars">
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
            <div className='flex gap-2 flex-1 sm:flex-none'>
              <input className='pincode border border-gray-300 rounded-lg w-full sm:w-48 pl-5 outline-none focus:ring-2 focus:ring-[#832729]/20' placeholder='Pincode' type="number" name="pincode" id="" />
              <button className='bg-[#832729] text-white px-6 rounded-lg py-2.5 font-bold hover:bg-[#6c1f21] transition-colors'>Check</button>
            </div>
          </div>
        </div>

        <div className='flex items-center mt-8 p-4 bg-blue-50/50 rounded-xl border border-blue-100 gap-4'>
          <img className='w-10' src="../Images/cart.webp" alt="" />
          <span className='text-sm md:text-base font-medium text-gray-700'>You have one reward waiting for you! <span className='text-blue-600 font-bold cursor-pointer hover:underline'> Claim Now</span></span>
        </div>

        <div className="line bg-gray-200 h-[1px] w-full mt-10"></div>

        {AddCart.length === 0 ? (
          <div className='py-20 text-center'>
            <div className='text-gray-400 mb-4'>
              <svg className='w-20 h-20 mx-auto' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </div>
            <h2 className='text-2xl font-bold text-gray-800'>Your cart is empty</h2>
            <p className='text-gray-500 mt-2'>Looks like you haven't added anything yet.</p>
          </div>
        ) : (
          <div className='space-y-10 mt-10'>
            {AddCart.map((productItem, productIndex) => (
              <div key={productItem.id} className='group'>
                <div className='flex flex-col sm:flex-row gap-6 md:gap-10'>
                  <div className='relative overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-4 w-full sm:w-48 shrink-0'>
                    <img className='w-32 md:w-40 object-contain transition-transform group-hover:scale-110 duration-500' src={productItem.url} alt="" />
                  </div>
                  <div className='flex flex-col flex-1 space-y-4'>
                    <div className='flex justify-between items-start'>
                      <span className='font-bold text-[#832729] text-xl md:text-2xl leading-tight'>{productItem.name}</span>
                    </div>
                    <div className='flex items-center gap-6 text-sm text-gray-500 font-semibold'>
                      <span>Weight: <span className='text-gray-800'>{productItem.GrossWeight}g</span></span>
                      <span>Qty: <span className='text-gray-800'>1N</span></span>
                    </div>
                    <span className='text-2xl font-extrabold text-gray-900'>₹ {Math.round((productItem.plainGoldValue + productItem.makingCharges + productItem.GST) * 100) / 100}</span>

                    <div className='flex flex-wrap items-center gap-4 md:gap-8 pt-2'>
                      <button className='flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-red-600 transition-colors'>
                        <img className='w-4' src="../Images/diemond.svg" alt="" />
                        Remove
                      </button>
                      <div className='hidden sm:block bg-gray-300 h-4 w-[1px]'></div>
                      <button className='flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-[#832729] transition-colors'>
                        <img className='w-4' src="../Images/heart-navigation-com.svg" alt="" />
                        Move To WishList
                      </button>
                    </div>

                    <div className='flex items-center gap-3 pt-2'>
                      <input className='w-5 h-5 cursor-pointer accent-[#832729] rounded border-gray-300' type="checkbox" name="Add Gift Message" id={`gift-${productIndex}`} />
                      <label className='text-sm font-bold cursor-pointer text-[#832729]/80 flex items-center gap-2 px-3 py-1 bg-[#832729]/5 rounded-full' htmlFor={`gift-${productIndex}`}>
                        Add Gift Message
                      </label>
                    </div>
                  </div>
                </div>
                <div className='h-[1px] w-full bg-gray-100 mt-10'></div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='w-full lg:w-[32%] space-y-8'>
        <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 p-6 bg-[#fffbec] rounded-2xl border border-[#f5e4c3] items-center'>
          <div className='shrink-0'>
            <img className='h-24 lg:h-32' src="../images/redeem-bg.svg" alt="icon" />
          </div>
          <div className='text-center sm:text-left lg:text-center xl:text-left'>
            <div className='text-[#832729] font-bold text-lg mb-2'>
              <button className='hover:underline'>Login</button> / <button className='hover:underline'>Sign up</button>
            </div>
            <p className='text-gray-700 leading-snug'>To Unlock Exclusive Rewards With <span className='font-bold block text-[#832729]'>Personalized Offers</span></p>
          </div>
        </div>

        <div className='bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden'>
          <div className='p-6 md:p-8'>
            <div className='flex justify-between items-center mb-6'>
              <span className='font-bold text-gray-500 text-sm uppercase tracking-widest'>Have a coupon?</span>
              <span className='text-[#832729] font-bold text-xs cursor-pointer hover:underline'>View Promo Codes</span>
            </div>
            <div className='flex gap-3'>
              <input className='flex-1 border border-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#832729]/20 font-medium' type="text" placeholder='Coupon Code' />
              <button className='bg-[#832729] text-white px-6 rounded-xl font-bold hover:bg-[#6c1f21] transition-all transform active:scale-95'>Apply</button>
            </div>

            <h2 className='text-[#832729] font-black text-lg mt-10 mb-6 tracking-widest border-b border-[#832729]/10 pb-2'>ORDER SUMMARY</h2>

            <div className='space-y-4 font-medium'>
              <div className='flex justify-between text-gray-600'>
                <span>Sub Total</span>
                <span className='text-gray-900 font-bold'>₹ {subTotal.toLocaleString('en-IN')}</span>
              </div>
              <div className='flex justify-between text-green-600'>
                <span>Discount</span>
                <span className='font-bold'>- ₹ {dis.toLocaleString('en-IN')}</span>
              </div>
              <div className='flex justify-between text-gray-600 pb-4 border-b border-gray-200'>
                <span>Delivery Charges</span>
                <span className='text-green-600 font-bold'>FREE</span>
              </div>
              <div className='flex justify-between items-center pt-2'>
                <div className='flex flex-col'>
                  <span className='text-[#832729] font-black text-xl'>TOTAL</span>
                  <span className='text-[10px] text-gray-400 font-bold'>(Incl of all Taxes)</span>
                </div>
                <span className='text-[#832729] font-black text-2xl md:text-3xl'>₹ {(total > 0 ? total : 0).toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button className='w-full mt-10 bg-[#832729] text-white py-4 rounded-xl font-extrabold text-lg shadow-lg shadow-[#832729]/30 hover:bg-[#6c1f21] transition-all transform hover:-translate-y-1 active:translate-y-0'>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
