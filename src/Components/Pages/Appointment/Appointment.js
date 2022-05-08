import React from "react";

const Appointment = () => {
  return (
    <div className='w-full  mt-32 bg-[url("https://i.ibb.co/XW2ZxRb/appointment-bg.png")]  bg-no-repeat'>
      <div className=" bg-blcktranp  ">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row px-6 md:px-0 justify-center items-center">
          <div className="md:w-2/4 w-full hidden md:block">
            <img
              className="bottom-0"
              src="https://i.ibb.co/NZZQLYZ/doctor-small.png"
              alt=""
            />
          </div>
          <div className="md:w-2/4 w-full  md:mt-0 py-10 md:py-0">
            <h3 className="font-bold text-xl text-bg1">Appointment</h3>
            <h2 className="text-4xl text-white my-3">Make an appointment Today</h2>
            <p className="text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="px-5 py-3  mt-5 rounded-md font-bold text-white bg-gradient-to-r from-bg1 to-bg2">GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
