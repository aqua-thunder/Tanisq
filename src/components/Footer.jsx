import React from 'react'
import '../Footer.css'

const Footer = () => {

    return (
        <div className='footer px-4 md:px-10 lg:px-28 bg-[#efe3e3] py-10 md:py-16 mt-16 overflow-hidden' id='footer'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-base md:text-lg'>
                <ul className='space-y-4 md:space-y-7'>
                    <h1 className='text-[#832729] font-bold text-lg'>Useful Links</h1>
                    <li><a className='hover:underline hover:font-semibold transition-all' href="">Delivery Information</a></li>
                    <li><a className='hover:underline hover:font-semibold transition-all' href="">International Shipping</a></li>
                    <li><a className='hover:underline hover:font-semibold transition-all' href="">Payment Options</a></li>
                    <li><a className='hover:underline hover:font-semibold transition-all' href="">Track your Order</a></li>
                    <li><a className='hover:underline hover:font-semibold transition-all' href="">Returns</a></li>
                    <li><a className='hover:underline hover:font-semibold transition-all' href="">Find a Store</a></li>
                </ul>
                <ul className='space-y-4 md:space-y-7'>
                    <h1 className='text-[#832729] font-bold text-lg'>Information</h1>
                    <li><a className='hover:underline hover:font-semibold transition-all' href="">Careers</a></li>
                    <li><a className='hover:underline hover:font-semibold transition-all' href="">Blog</a></li>
                    <li><a className='hover:underline hover:font-semibold transition-all' href="">Offers & Contest Details</a></li>
                    <li><a className='hover:underline hover:font-semibold transition-all' href="">Help & FAQs</a></li>
                    <li><a className='hover:underline hover:font-semibold transition-all' href="">About Tanishq</a></li>
                </ul>
                <ul className='space-y-4 md:space-y-7'>
                    <h1 className='text-[#832729] font-bold text-lg'>Contact Us</h1>
                    <li className='flex space-x-4 hover:underline hover:font-semibold transition-all items-center'>
                        <img className='w-6 md:w-8' src="../images/mail-com.svg" alt="" />
                        <a href="">Write to Us</a>
                    </li>
                    <li className='flex space-x-4 hover:underline hover:font-semibold transition-all items-center'>
                        <img className='w-6 md:w-8' src="../images/call-com.svg" alt="" />
                        <a href="">1800-266-235</a>
                    </li>
                    <li className='flex space-x-4 hover:underline hover:font-semibold transition-all items-center'>
                        <img className='w-6 md:w-8' src="../images/chat1-com.svg" alt="" />
                        <a href="">Chat With Us</a>
                    </li>
                </ul>
                <ul className='flex flex-col items-center lg:items-start'>
                    <h1 className='font-bold text-center lg:text-left'>Download the Tanishq App Now</h1>
                    <img className='w-32 md:w-40 mt-6 shadow-md rounded-lg' src="../images/QR-code.webp" alt="" />
                    <div className='flex flex-wrap justify-center lg:justify-start gap-4 mt-9'>
                        <button className='hover:scale-105 transition-transform'><img className='w-28 md:w-32' src="../images/AppStore-btn.webp" alt="" /></button>
                        <button className='hover:scale-105 transition-transform'><img className='w-28 md:w-32' src="../images/PlayStore-btn.webp" alt="" /></button>
                    </div>
                    <div className='flex items-center space-x-4 md:space-x-7 mt-8'>
                        <span className='font-bold'>Follow Us On</span>
                        <div className='flex space-x-4'>
                            <img className='w-5 md:w-6 cursor-pointer hover:opacity-80 transition-opacity' src="../images/facebook-com.svg" alt="" />
                            <img className='w-5 md:w-6 cursor-pointer hover:opacity-80 transition-opacity' src="../images/logo-xing-com.svg" alt="" />
                            <img className='w-5 md:w-6 cursor-pointer hover:opacity-80 transition-opacity' src="../images/instagram-com.svg" alt="" />
                        </div>
                    </div>
                </ul>
            </div>
            <div className="line bg-black opacity-20 h-[1px] w-full mt-14"></div>
            <div className="flex flex-col lg:flex-row justify-between items-center mt-10 space-y-8 lg:space-y-0 text-center lg:text-left">
                <div className='grid grid-cols-4 sm:grid-cols-8 gap-4' id='contact'>
                    <img className='w-12 md:w-16' src="./images/visa-com.svg" alt="" />
                    <img className='w-12 md:w-16' src="./images/paypal-com.svg" alt="" />
                    <img className='w-12 md:w-16' src="./images/visa-com.svg" alt="" />
                    <img className='w-12 md:w-16' src="./images/paypal-com.svg" alt="" />
                    <img className='w-12 md:w-16' src="./images/visa-com.svg" alt="" />
                    <img className='w-12 md:w-16' src="./images/paypal-com.svg" alt="" />
                    <img className='w-12 md:w-16' src="./images/visa-com.svg" alt="" />
                    <img className='w-12 md:w-16' src="./images/paypal-com.svg" alt="" />
                </div>
                <div className='flex flex-col text-[#772022] text-sm md:text-[15px] space-y-1 font-medium'>
                    <span>© 2024 Titan Company Limited. All Rights Reserved.</span>
                    <span className='flex flex-wrap justify-center lg:justify-end gap-2'>
                        <span>Terms & Conditions</span>
                        <span>|</span>
                        <span>Privacy Policy</span>
                        <span>|</span>
                        <span>Disclaimer</span>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Footer
