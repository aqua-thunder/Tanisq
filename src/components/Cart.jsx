import React, { useEffect } from 'react'
import { useState } from 'react'

const Cart = ({ AddCart, saveTLS }) => {
  let subTotal = 0;
  let total = 0;
  let dis = 0;


  return (
    <div className='flex  px-28 mt-16 justify-between'>
      <div>
        <div className='flex items-center  justify-between w-[50vw]'>
          <span className='text-[#832729] font-semibold'>Check Delivery Info</span>
          <div className='flex  space-x-5'>
            <div className='border border-[#908e8a] rounded-md flex '>
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
            <button className='bg-[#832729] text-white px-6 rounded-md py-3'>Check</button>
          </div>
        </div>
        <div className='flex items-center mt-6 space-x-5'>
          <img className='w-10' src="../Images/cart.webp" alt="" />
          <span>You have one reward waiting for you! <span className='text-blue-500'> Claim Now</span></span>
        </div>
        <div className="line bg-gray-300 h-[1px] w-[100%] mt-7"></div>
        {
          AddCart.map((productItem, productIndex) => {
            return (
              <div key={productItem.id}>
                <div className='flex mt-5 '>
                  <img className='w-40' src={productItem.url} alt="" />
                  <div className='flex flex-col pl-10 space-y-3'>
                    <span className='font-semibold text-[#832729] text-2xl'>{productItem.name}</span>
                    <span className='text-gray-500 text-sm'>Weight: {productItem.GrossWeight}</span>
                    <span className='text-[1.5rem] font-semibold'>₹ {Math.round((productItem.plainGoldValue + productItem.makingCharges + productItem.GST) * 100) / 100}</span>
                    <div className='flex text-[12px] font-semibold space-x-5'>
                      <span className='bg-red-500 '></span>
                      <img className='w-5 ' src="../Images/diemond.svg" alt="" /><button>Remove</button>
                      <div className='bg-gray-400 h-5 w-[1px]'></div>
                      <img className='w-5' src="../Images/heart-navigation-com.svg" alt="" /><button>Move To WishList</button>
                    </div>
                    <div className='space-x-3 flex'>
                      <input className='w-4 cursor-pointer ' type="checkbox" name="Add Gift Message" id="" />
                      <label className='text-sm font-semibold cursor-pointer text-[#832729]' htmlFor="">Add Gift Message</label>
                    </div>
                  </div>
                </div>
                <div className='h-[1px] w-[100%] bg-gray-300 mt-10'></div>

              </div>

            )
          })
        }
      </div>
      <div className=''>
        <div className='flex w-[32vw] space-x-5 py-2 px-3 bg-[#fffbec]'>
          <div>
            <span className=""><img className='h-[8rem]' src="../images/redeem-bg.svg" alt="icon" /></span>
          </div>
          <div className=' text-center mt-7'>
            <div className='text-[#832729] font-semibold'>
              <button>Login / </button>
              <button>sign up</button>
            </div>
            <span>To Unlock <br />
              <span className='font-semibold'>Exclusive Rewards With</span> </span>
          </div>
        </div>
        <div className='bg-[#f4f3f3] mt-5 py-3 px-8'>
          <div className='flex justify-around'>
            <span>Enter Code</span>
            <span>View Promo Codes</span>
          </div>
          <div className='flex  justify-around mt-5'>
            <input className='border border-black px-3 w-60 rounded-lg' type="number" placeholder='Enter Coupon Code' />
            <button className='bg-[#832729] text-white px-6 rounded-md py-3'>Apply</button>
          </div>
          <h1 className='text-[#832729] font-semibold mt-5'>ORDER SUMMARY</h1>
          {
            AddCart.map((productItem, productIndex) => {
              subTotal += Math.round((productItem.plainGoldValue + productItem.makingCharges + productItem.GST) * 100) / 100;
              total = subTotal - 954
              dis += productItem.discount
              return (
                <div className='' key={productIndex}>

                </div>
              )
            })

          }
          <div>
            <div className='space-y-3 mt-3 text-sm text-gray-500' >
              <ul className='flex justify-between'>
                <li>Sub Total</li>
                <li>₹ {subTotal}</li>

              </ul>
              <ul className='flex justify-between'>
                <li>Discount</li>
                <li>₹ -{dis}</li>
              </ul>
              <ul className='flex justify-between'>
                <li>Delivery Charges</li>
                <li>FREE</li>
              </ul>
              <ul className='flex text-lg justify-between text-[#832729] font-semibold'>
                <li>TOTAL (Incl of all Taxes.)</li>
                <li>₹ {total}</li>
              </ul>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
