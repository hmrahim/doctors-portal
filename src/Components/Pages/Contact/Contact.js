import React from 'react';

const Contact = () => {
    return (
        <div className='w-full   mt-32 bg-[url("https://i.ibb.co/XW2ZxRb/appointment-bg.png")]  bg-no-repeat'>
      <div className=" bg-blcktranp  py-10 px-6 md:px-0">
          <h3 className='text-xl font-bold text-bg1 text-center py-3'>Contact Us</h3>
          <h1 className='text-4xl text-center text-white'>Stay connected with us</h1>
      <div className='w-full md:w-2/5 mx-auto'>
          <form className='mt-10 flex flex-col justify-center' action="">
              <input  className='w-full p-3 my-4 rounded-lg text-xl outline-0 border-2 border-bg1' placeholder='Email Address' type="text" name="" id="" />
              <input className='w-full p-3 my-4 rounded-lg text-xl outline-0 border-2 border-bg1' placeholder='Subject' type="text" name="" id="" />
              <textarea name="" className='w-full p-3 my-4 outline-0 border-2 border-bg1 rounded-lg text-xl' placeholder='Your message' id="" cols="30" rows="5"></textarea>
              <button className="px-5 py-3  mt-5 rounded-md font-bold text-white bg-gradient-to-r from-bg1 to-bg2 ">Submit</button>

          </form>
      </div>
      </div>
    </div>
    );
};

export default Contact;