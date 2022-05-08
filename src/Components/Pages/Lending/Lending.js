import React from 'react';
import clock from "../icons/phone.svg"
import { ClockIcon,LocationMarkerIcon,PhoneIcon } from '@heroicons/react/solid'

const Lending = () => {
    return (
        <div className='w-full md:w-11/12 mx-auto py-10 grid grid-cols-1 px-6 md:grid-cols-3 gap-5'>
            <div className='flex p-2 bg-gradient-to-tr gap-5 py-8 rounded-md my-5 from-bg1 to-bg2'>
                <p className='text-white'><ClockIcon width={100} height={100} ></ClockIcon></p>
                <div>
                    <h3 className='text-xl font-semibold text-white'>Opening Hours</h3>
                    <p className='text-[16px] text-white'>Lorem Ipsum is simply dummy text of the pri</p>
                </div>

            </div>
            <div className='flex p-2 bg-primaryBlack gap-5 py-8 rounded-md my-5'>
                <p className='text-white'><LocationMarkerIcon width={100} height={100} ></LocationMarkerIcon></p>
                <div>
                    <h3 className='text-xl font-semibold text-white'>Opening Hours</h3>
                    <p className='text-[16px] text-white'>Lorem Ipsum is simply dummy text of the pri</p>
                </div>

            </div>
            <div className='flex p-2 bg-gradient-to-tr gap-5 py-8 rounded-md my-5 from-bg1 to-bg2'>
                <p className='text-white'><PhoneIcon width={100} height={100} ></PhoneIcon></p>
                <div>
                    <h3 className='text-xl font-semibold text-white'>Opening Hours</h3>
                    <p className='text-[16px] text-white'>Lorem Ipsum is simply dummy text of the pri</p>
                </div>

            </div>
         
          
            
        </div>
    );
};

export default Lending;