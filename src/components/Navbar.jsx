import React from 'react'
import logo from '../assets/navbar/1-bg-r.png'
import bell from '../assets/navbar/bell.svg'
import user from '../assets/navbar/user.svg'

const Navbar = () => {
    return (
        <div>
            <div className='p-2 sm:p-1 bg-c-black text-c-blue flex justify-between items-center'>
                <div className='mx-0 sm:mx-4 flex items-center p-1' >
                    <img src={logo} alt='logo' />
                    <p className='text-lg sm:text-2xl lg:text-3xl font-semibold mx-1 sm:mx-3 border-3 border-blue cursor-pointer'><a href='#'>UnFluke</a></p>
                </div>
                <div>
                    <ul className='flex items-center '>
                        <li><img src={bell} alt='bell' className='h-5 w-6 mr-7 sm:h-7 sm:w-10 sm:mr-10 cursor-pointer' /></li>
                        <li><img src={user} alt='user' className='h-5 w-6 mr-2 sm:h-7 sm:w-10 sm:mr-10 cursor-pointer' /></li>
                    </ul>
                </div>
            </div>
            <div className='p-0 sm:p-1 bg-c-black text-c-blue flex justify-between items-center border-2 border-c-black border-b-c-grey w-90'>
                <ul className='flex items-center justify-evenly items-center border-3 border-blue mx-0 font-semibold '>
                    <li className='ml-16 mr-6'><a href='#'>LeaderBoard</a></li>
                    <li className='mx-6'><a href='#'>Historical Trading</a></li>
                    <li className='mx-6'><a href='#'>Historical Chart</a></li>
                    <li className='mx-6'><a href='#'>Scanner</a></li>
                    <li className='mx-6'><a href='#'>Alerts</a></li>
                    <li className='mx-6'><a href='#'>Basic Backtest</a></li>
                    <li className='mx-6'><a href='#'>Advanced Backtest</a></li>
                    <li className='mx-6'><a href='#'>Pricing</a></li>
                    <li className='mx-6'><a href='#'>My Earning</a></li>
                </ul>
            </div>
        </div >


    )
}

export default Navbar
