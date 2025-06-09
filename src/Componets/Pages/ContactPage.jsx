import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import swal from 'sweetalert';
function ContactPage() {
  const [selected, setSelected] = useState(null);
  const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [company, setCompany] = useState('');
const [projectDetail, setProjectDetail] = useState('');
const [budget, setBudget] = useState('');


  const time = new Date().toLocaleString(); // submission time

  const message = `*New Contact Form Submission*\n\n` +
    `Service: ${selected || "Not selected"}\n` +
    `First Name: ${firstName+" "+lastName}\n` +
    `Last Name: ${lastName}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Company: ${company}\n` +
    `Details: ${projectDetail}\n` +
    `Budget: ${budget || "Not specified"}\n` +
    `Submitted At: ${time}`;

 const handleSend = async (e) => {
  e.preventDefault();

fetch('https://hooks.zapier.com/hooks/catch/23284036/uyuaotx/', {
  method: 'POST',
  // Don't set 'Content-Type' explicitly to avoid CORS preflight
  body: JSON.stringify({
  "firstName": firstName,
  "lastName": lastName,
  "email": email,
  "phone": phone,
  "company": company,
  "service": selected,
  "details": projectDetail,
  "budget": budget,
  "submittedAt": time
}),
})
.then(response => {
  if (response.ok) {
    console.log('✅ Data sent successfully');
    swal("Good job!", "We have received your message and will get back to you soon!", "success");
    setFirstName(''); // Reset the form
    setLastName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setSelected(null);
    setProjectDetail('');
    setBudget('');

  } else {
    console.error('❌ Failed to send data');
    window.blank
  }
})
.catch(error => {
  console.error('❌ Error sending data:', error);
  swal("Oops!", "Something went wrong! Please try again later.", "error");
});
};




  const services = [
    'Logo / branding',
    'Landing Page Development',
    'No-code Development',
    'Web Design',
    'Mobile App Design',
    'Other',
  ];

  const handleSelect = service => {
    setSelected(service);
    console.log('Selected service:', service);
    // You can do more actions here (API calls, filtering, etc.)
  };
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
<div className="px-4 pt-32 w-[90%] md:w-4/5 mx-auto min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 text-white">

        <motion.h1
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className="text-3xl sm:text-3xl md:text-3xl lg:text-7xl z-10 text-white"
        >
          Let's <br /> Collab
        </motion.h1>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className="w-[75%]"
        >
          <div className=" py-10 border-t flex flex-col md:flex-row  justify-between ">
            <motion.p
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className=" z-10 text-sm"
            >
              Reach out to collaborate or just <br /> to chat. We're here for you.
            </motion.p>{' '}
            <motion.a
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="z-10  text-sm sm:text-base md:text-lg lg:text-3xl hover:text-yellow-400 mt-14 md:mt-0"
              href="mailto:webforges.site@gmail.com"
            >
              webforges.site@gmail.com
            </motion.a>
          </div>
          <div className=" flex justify-between border-t py-10   flex-col md:flex-row ">
            <motion.p
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className=" z-10 text-sm"
            >
              <a className="hover:text-yellow-400" href="tel:+919037435846">
                +91 90374 35846
              </a>
              <br />
              <a
                className="hover:text-yellow-400"
                href="https://wa.me/918921966289"
                target="_blank"
              >
                +91 89219 66289 (WhatsApp)
              </a>
            </motion.p>{' '}
            <motion.a
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="text-sm sm:text-base md:text-lg lg:text-3xl z-10 hover:text-yellow-400 mt-14 md:mt-0"
              href="tel:+919037435846"
            >
              Book a call
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="w-4/5 m-auto flex flex-col mt-16 justify-center p-12 bg-[#191919]">
        <motion.p
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className="text-sm sm:text-base md:text-lg lg:text-3xl text-white"
        >
          {' '}
          Projects type:
        </motion.p>
        <div className="flex contact-form-projectType gap-5 mt-10 flex-wrap">
          {services.map((service, index) => (
            <motion.button
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              key={index}
              onClick={() => handleSelect(service)}
              className={`text-sm sm:text-2xl   px-4 py-2 rounded-lg border ${
                selected === service ? 'bg-blue-600 text-white' : 'bg-white text-black'
              } transition`}
            >
              {service}
            </motion.button>
          ))}
        </div>

        <motion.p
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          className="text-sm sm:text-base md:text-lg lg:text-3xl  text-white mt-16"
        >
          {' '}
          Your informatiom:
        </motion.p>
        <motion.form
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
          action=""
        >
          <div className="flex justify-between flex-wrap  mt-10">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="w-full md:w-[49%]"
            >
              <label htmlFor="firstName" className="block mb-1">
                First Name
              </label>
<input
  type="text"
  id="firstName"
  className="w-full p-2 text-yellow-400"
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
/>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="w-full md:w-[49%]"
            >
              <label htmlFor="lastName" className="block mb-1">
                Last Name
              </label>
              <input type="text" id="lastName"
               value={lastName}
  onChange={(e) => setLastName(e.target.value)}
   className="w-full p-2 text-yellow-400 " />
            </motion.div>
          </div>

          <div className="  contact-form-input    mt-10  ">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="w-full md:full"
            >
              <label htmlFor="email" className="block mb-1">
                Email Address
              </label>
              <input type="text" id="email"
              value={email}
  onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 text-yellow-400" />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="w-full md:full"
            >
              <label htmlFor=" Phone" className="block mb-1">
                {' '}
                Phone{' '}
              </label>
              <input type="text" id=" Phone"
              value={phone}
  onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 text-yellow-400 " />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="w-full md:full"
            >
              <label htmlFor="Company" className="block mb-1">
                Company{' '}
              </label>
              <input type="text" id="Company"
              value={company}
  onChange={(e) => setCompany(e.target.value)}
              className="w-full p-2 text-yellow-400" />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="w-full md:full"
            >
              <label htmlFor="ProjectDetail" className="block mb-1">
                ProjectDetail{' '}
              </label>
              <textarea rows="5" type="text" id="ProjectDetail"
              value={projectDetail}
  onChange={(e) => setProjectDetail(e.target.value)}
              className="w-full p-2 text-yellow-400" />
            </motion.div>
          </div>
        </motion.form>

        <div>
          <p className="text-sm sm:text-base md:text-lg lg:text-3xl  text-white mt-16"> Budget:</p>
          <div className="flex contact-form-Budget gap-5 mt-10 flex-wrap">
            <label>
              {' '}
              <input
                type="checkbox"
  checked={budget === 'Less than $5K'}
  onChange={() => setBudget('Less than $5K')}
                class="appearance-none w-3 h-3 bg-gray-300 rounded-[50px] checked:bg-yellow-400  transition"
              />
              Less than $5K
            </label>
            <label>
              {' '}
              <input
                type="checkbox"
  checked={budget === '$5K - $15K'}
  onChange={() => setBudget('$5K - $15K')}
                class="appearance-none w-3 h-3 bg-gray-300 rounded-[50px] checked:bg-yellow-400  transition"
              />
              $5K - $15K
            </label>
            <label>
              <input
                type="checkbox"
  checked={budget === '$15K - $25K'}
  onChange={() => setBudget('$15K - $25K')}
                class="appearance-none w-3 h-3 bg-gray-300 rounded-[50px] checked:bg-yellow-400  transition"
              />
              $15K - $25K
            </label>
            <label>
              <input
               type="checkbox"
  checked={budget === '$25K - $35K'}
  onChange={() => setBudget('$25K - $35K')}
                class="appearance-none w-3 h-3 bg-gray-300 rounded-[50px] checked:bg-yellow-400  transition"
              />
              $25K - $35K{' '}
            </label>
            <label>
              <input
               type="checkbox"
  checked={budget === '$35K +'}
  onChange={() => setBudget('$35K +')}
                class="appearance-none w-3 h-3 bg-gray-300 rounded-[50px] checked:bg-yellow-400  transition"
              />
              $35K +
            </label>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <input type="checkbox" id="notRobot" className="w-4 h-4" />
            <label htmlFor="notRobot" className="text-sm select-none">
              I am not a robot
            </label>
          </div>

         <button
  type="submit"
  onClick={handleSend}
  className="mt-8 px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
>
  Submit
</button>

        </div>
      </div>
    </div>
  );
}

export default ContactPage;
