import React from 'react';

const Exception = () => {
    return (
        <div className="w-full md:w-11/12 md:px-32 mt-36 mx-auto flex flex-col md:flex-row px-6 md:px-6 gap-5 justify-center items-center">
            <div className='w-full md:w-2/4'>
                <img className='rounded-lg'  width={458} height={576} src="https://i.ibb.co/f0Stq1d/treatment.png" alt="" />
            </div>
            <div className='w-full md:w-2/4'>
                <h1 className='text-5xl font-bold text-primaryBlack my-7'>Exceptional Dental Care, on Your Terms</h1>
                <p className='text-[16px] text-primaryBlack'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="px-5 py-3  mt-5 rounded-md font-bold text-white bg-gradient-to-r from-bg1 to-bg2">GET STARTED</button>
            </div>
            
        </div>
    );
};

export default Exception;