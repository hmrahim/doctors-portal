import React from "react";

const Testimonial = () => {
  return (
    <div className="w-full px-6 md:px-0 md:w-11/12 mx-auto mt-28">
      <h3 className="font-bold text-lg rounded-lg text-bg1">Testimonial</h3>
      <h1 className="text-4xl text-primaryBlack">What Our Patients Says</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-36">
        <div className="shadow-xl py-4 px-4">
          <p className="text-[16px] text-primaryBlack">
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex gap-5 items-center mt-5 py-4 ">
            <img
              className="w-16 h-16 border-2 border-bg1 rounded-full"
              src="https://i.ibb.co/6XDktqf/people-1.png"
              alt=""
            />
            <div>
              <h2>Winson Herry</h2>
              <h3>California</h3>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-lg py-4 px-4">
          <p className="text-[16px] text-primaryBlack">
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex gap-5 items-center mt-5 py-4 ">
            <img
              className="w-16 h-16 border-2 border-bg1 rounded-full"
              src="https://i.ibb.co/6XDktqf/people-1.png"
              alt=""
            />
            <div>
              <h2>Winson Herry</h2>
              <h3>California</h3>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-lg py-4 px-4">
          <p className="text-[16px] text-primaryBlack">
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex gap-5 items-center mt-5 py-4 ">
            <img
              className="w-16 h-16 border-2 border-bg1 rounded-full"
              src="https://i.ibb.co/6XDktqf/people-1.png"
              alt=""
            />
            <div>
              <h2>Winson Herry</h2>
              <h3>California</h3>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Testimonial;
