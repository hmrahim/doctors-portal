import React from "react";

const Banner = () => {
  return (
    <div className='w-full     md:w-11/12 mx-auto flex justify-center items-center bg-[url("https://i.ibb.co/hZm21rF/chair.png")] bg-cover   bg-no-repeat '>
      <div className="bg-transpBg flex flex-col gap-6 md:flex-row justify-center items-center md:px-4 md:py-30 py-20  w-full px-6">
        <div className="w-full order-2 md:order-1 md:w-1/2 ">
          <h1 className="text-5xl font-bold my-3 text-primaryBlack">
            Your New Smile Starts Here
          </h1>
          <p className="text-primaryBlack">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="px-5 py-3  mt-5 rounded-md font-bold text-white bg-gradient-to-r from-bg1 to-bg2">GET STARTED</button>
        </div>
        <div className="w-full order-1 md:order-2 my-20 md:my-0 md:w-1/2 md:px-6">
          <img src="https://i.ibb.co/hZm21rF/chair.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
