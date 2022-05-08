import React, { useState } from 'react';
import { BeakerIcon, BriefcaseIcon,MenuIcon,XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open,setOpen] = useState(false)
    return (
        <div>
            <nav className='w-full py-2  md:w-11/12 mx-auto flex flex-col md:flex-row shadow-sm md:shadow-none justify-start md:justify-between items-center'>
                <div className="flex justify-between w-full md:w-1/4  px-2 md:px-0">
                    <h1 className='font-normal text-xl leading-6 select-none'>Doctors Protal</h1>
                    <p onClick={()=>setOpen(!open)} className='md:hidden cursor-pointer select-none'>
                        {
                            !open ?
                            <MenuIcon className="h-8 w-8 text-blue-500"/>
                            :
                            <XIcon className="h-8 w-8 text-blue-500"/>
                        }
                     
                     
                     </p>
                </div>
                <div className={`flex md:h-full transition flex-col justify-start md:justify-end  md:flex-row w-full md:w-9/12 overflow-hidden   ${!open ? "h-0" : 'h-full'}`}>
                    <a href="" className='text-left font-normal py-1 my-2 mx-2 px-3 hover:text-white hover:bg-hoberBg hover:rounded-lg  inline-block'>Home</a>
                    <a href="" className='text-left font-normal py-1 my-2 mx-2 px-3 hover:text-white hover:bg-hoberBg hover:rounded-lg  inline-block'>About</a>
                    <a href="" className='text-left font-normal py-1 my-2 mx-2 px-3 hover:text-white hover:bg-hoberBg hover:rounded-lg  inline-block'>Appointment</a>
                    <a href="" className='text-left font-normal py-1 my-2 mx-2 px-3 hover:text-white hover:bg-hoberBg hover:rounded-lg  inline-block'>Reviews</a>
                    <a href="" className='text-left font-normal py-1 my-2 mx-2 px-3 hover:text-white hover:bg-hoberBg hover:rounded-lg  inline-block'>Contact Us</a>
                    <a href="" className='text-left font-normal py-1 my-2 mx-2 px-3 hover:text-white hover:bg-hoberBg hover:rounded-lg  inline-block'>Login</a>
                    
                    </div>
            </nav>
          
            
        </div>
    );
};

export default Header;