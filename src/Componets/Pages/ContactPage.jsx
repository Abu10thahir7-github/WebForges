import React from 'react';

function ContactPage() {
  return (
    <div>
      <div class="bg-animation absolute">
        <div class=" z-[-1] noise-bg"></div>
        <div class="blob-cont">
          <div class="red blob"></div>
          <div class="darkBlue blob"></div>
          <div class="navy blob"></div>
          <div class="peach blob"></div>
          <div class="purple blob"></div>
        </div>
      </div>
      <div className="w-4/5 m-auto h-screen flex  justify-center items-center gap-20 text-white  ">
        <h1 className="text-sm sm:text-base md:text-lg lg:text-7xl z-10 text-white">
          Let's <br /> Collab
        </h1>
        <div className="w-[75%]">
          <div className=" py-10 border-t flex justify-between ">
            <p className=" z-10 text-sm">
              Reach out to collaborate or just <br /> to chat. We're here for you.
            </p>{' '}
            <a className="z-10  text-sm sm:text-base md:text-lg lg:text-3xl" href="">
              contact@capiproduct.com
            </a>
          </div>
          <div className=" flex justify-between border-t py-10">
            <p className=" z-10 text-sm">
              +84 965 657 893
              <br /> (WhatsApp/Telegram)
            </p>{' '}
            <a className="text-sm sm:text-base md:text-lg lg:text-3xl z-10" href="">
              Book a call
            </a>
          </div>
        </div>
      </div>
      <div className="w-4/5 m-auto flex flex-col justify-center p-12 bg-[#191919]">
        <p className="text-sm sm:text-base md:text-lg lg:text-3xl text-white"> Projects type</p>
        <div className="flex gap-5 mt-10 flex-wrap">
          <button>Logo / branding</button>
          <button>Landing Page Development</button>
          <button>No-code Development</button>
          <button>Web Desgin </button>
          <button>Mobile App Desgin</button>
          <button>Other</button>
        </div>

        <p className="text-sm sm:text-base md:text-lg lg:text-3xl  text-white mt-16">
          {' '}
          Your informatio
        </p>
        <form action="">
          <div className="flex justify-between flex-wrap  mt-10">
            <div className="w-full md:w-[49%]">
              <label htmlFor="firstName" className="block mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="w-full md:w-[49%]">
              <label htmlFor="lastName" className="block mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div className="  contact-form-input    mt-10  ">
            <div className="w-full md:full">
              <label htmlFor="email" className="block mb-1">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                placeholder="email"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="w-full md:full">
              <label htmlFor=" Phone" className="block mb-1">
                {' '}
                Phone{' '}
              </label>
              <input
                type="text"
                id=" Phone"
                placeholder=" Phone"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="w-full md:full">
              <label htmlFor="Company" className="block mb-1">
                Company{' '}
              </label>
              <input
                type="text"
                id="Company"
                placeholder="Company"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="w-full md:full">
              <label htmlFor="ProjectDetail" className="block mb-1">
                ProjectDetail{' '}
              </label>
              <textarea
                rows="5"
                type="text"
                id="ProjectDetail"
                placeholder="ProjectDetail"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </form>

        <div>
          <p className="text-sm sm:text-base md:text-lg lg:text-3xl  text-white mt-16"> Budget</p>
          <div className="flex gap-5 mt-10 flex-wrap">
            <button>Less than $2K</button>
            <button>$2K - $5K</button>
            <button>$5K - $7.5K</button>
            <button>$7.5K - $10K </button>
            <button>$10K +</button>
          </div>
          <div className="mt-6 flex items-center gap-2">
  <input
    type="checkbox"
    id="notRobot"
    className="w-4 h-4"
  />
  <label htmlFor="notRobot" className="text-sm select-none">
    I am not a robot
  </label>
</div>

        <button className='mt-10'>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
