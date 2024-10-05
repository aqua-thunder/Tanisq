import React from 'react'
import '../Footer.css'

const Footer = () => {
    
    return (
        <div className='footer px-28 bg-[#efe3e3] py-16 mt-16' id='footer'>
            <div className=' grid grid-cols-4 text-lg'>
                <ul className='space-y-7'>
                    <h1 className='text-[#832729] font-bold text-lg'>Useful Links</h1>
                    <li><a className='hover:underline hover:font-semibold ' href="">Delivery Information</a></li>
                    <li><a className='hover:underline hover:font-semibold ' href="">International Shipping</a></li>
                    <li><a className='hover:underline hover:font-semibold ' href="">Payment Options</a></li>
                    <li><a className='hover:underline hover:font-semibold ' href="">Track your Order</a></li>
                    <li><a className='hover:underline hover:font-semibold ' href="">Returns</a></li>
                    <li><a className='hover:underline hover:font-semibold ' href="">Find a Store</a></li>
                </ul>
                <ul className='space-y-7'>
                    <h1 className='text-[#832729] font-bold text-lg'>Information</h1>
                    <li><a className='hover:underline hover:font-semibold ' href="">Careers</a></li>
                    <li><a className='hover:underline hover:font-semibold ' href="">Blog</a></li>
                    <li><a className='hover:underline hover:font-semibold ' href="">Offers & Contest Details</a></li>
                    <li><a className='hover:underline hover:font-semibold ' href="">Help & FAQs</a></li>
                    <li><a className='hover:underline hover:font-semibold ' href="">About Tanishq</a></li>
                </ul>
                <ul className='space-y-7'>
                    <h1 className='text-[#832729] font-bold text-lg'>Contact Us</h1>
                    <li className='flex space-x-4 hover:underline hover:font-semibold'><img className='w-8' src="../images/mail-com.svg" alt="" /><a href="">Write to Us</a></li>
                    <li className='flex space-x-4 hover:underline hover:font-semibold'><img className='w-8' src="../images/call-com.svg" alt="" /><a href="">1800-266-235</a></li>
                    <li className='flex space-x-4 hover:underline hover:font-semibold'><img className='w-8' src="../images/chat1-com.svg" alt="" /><a href="">Chat With Us</a></li>
                </ul>
                <ul className='flex flex-col  items-center'>
                    <h1 className='font-bold'>Download the Tanishq App Now</h1>
                    <img className='w-[14vw] mt-6' src="../images/QR-code.webp" alt="" />
                    <div className='flex mt-9'>
                        <button><img className='w-32' src="../images/AppStore-btn.webp" alt="" /></button>
                        <button><img className='w-32 ml-8' src="../images/PlayStore-btn.webp" alt="" /></button>
                    </div>
                    <div className='flex space-x-7 mt-6'>
                        <span className='font-bold'>Follow Us On</span>
                        <img className='w-6' src="../images/facebook-com.svg" alt="" />
                        <img className='w-6' src="../images/logo-xing-com.svg" alt="" />
                        <img className='w-6' src="../images/instagram-com.svg" alt="" />
                    </div>
                </ul>
            </div>
            <div className="line bg-black h-[2px] w-[82vw]  mt-14"></div>
            <div className="flex justify-between items-center  mt-10">
                <div className='flex gap-5'>
                    <img className='w-16' src="./images/visa-com.svg" alt="" />
                    <img className='w-16' src="./images/paypal-com.svg" alt="" />
                    <img className='w-16' src="./images/visa-com.svg" alt="" />
                    <img className='w-16' src="./images/paypal-com.svg" alt="" />
                    <img className='w-16' src="./images/visa-com.svg" alt="" />
                    <img className='w-16' src="./images/paypal-com.svg" alt="" />
                    <img className='w-16' src="./images/visa-com.svg" alt="" />
                    <img className='w-16' src="./images/paypal-com.svg" alt="" />
                </div>
                <div className='flex flex-col text-[#772022] text-[15px]'>
                    <span>© 2024 Titan Company Limited. All Rights Reserved.</span>
                    <span>Terms & Conditions &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; Privacy Policy &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; Disclaimer</span>
                </div>

            </div>
        </div>
    )
}

export default Footer
