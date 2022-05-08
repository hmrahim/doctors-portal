import React from 'react';

const Services = () => {
    return (
        <div className=' w-full md:w-11/12 mx-auto mt-28'>
        <h3 className='text-center font-bold text-bg1 text-xl'>OUR SERVICES</h3>
            <h1 className='text-4xl text-center text-primaryBlack capitalize mt-2'>Services we provide</h1>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
           <div className=''>
                <div className='flex flex-col justify-center items-center shadow-lg p-4 m-3 mt-16'>
                    <img src="https://i.ibb.co/8rYSPn8/fluoride.png" alt="" />
                    <h3 className='text-center text-xl text-primaryBlack mt-8 mb-2'>Fluoride Treatment</h3>
                    <p className='text-center text-primaryBlack text-[16px]'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
            </div>
            <div className=''>
                <div className='flex flex-col justify-center items-center shadow-lg p-4 m-3 mt-16'>
                    <img src="https://i.ibb.co/9HGT6X6/cavity.png" alt="" />
                    <h3 className='text-center text-xl text-primaryBlack mt-8 mb-2'>Cavity Filling</h3>
                    <p className='text-center text-primaryBlack text-[16px]'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
            </div>
            <div className=''>
                <div className='flex flex-col justify-center items-center shadow-lg p-4 m-3 mt-16'>
                    <img src="https://i.ibb.co/XCPnKL5/whitening.png" alt="" />
                    <h3 className='text-center text-xl text-primaryBlack mt-8 mb-2'>Teeth Whitening</h3>
                    <p className='text-center text-primaryBlack text-[16px]'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Services;