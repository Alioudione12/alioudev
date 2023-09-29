import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'// Purpose: display contact information
const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 sm:p-10 p-4 py-16">
    <h1 className="text-4xl font-bold text-center text-[#001b5e]">Contact</h1>
        <form action="https://getform.io/f/99e06e87-e663-4630-a389-f01a6f2ea25f" method="POST" encType="multipart/form-data">
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                        type="text" 
                        name="name"/>
                </div>
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone</label>
                    <input 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                        type="text" 
                        name="phone"/>
                </div>
            </div>
            <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email</label>
                <input 
                    className="border-2 rounded-lg p-3 flex border-gray-300" 
                    type="email" 
                    name="email"/>
            </div>

            <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Subject</label>
                <input 
                    className="border-2 rounded-lg p-3 flex border-gray-300" 
                    type="text" 
                    name="subject"/>
            </div>

            <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea 
                    className="border-2 rounded-lg p-3 flex border-gray-300" 
                    name="message" 
                    rows="10">
                </textarea>
            </div>
            <button className="bg-[#001b5e] text-white mt-4 w-full p-4 rounded-lg">Send Message</button>
        </form>

        <div className="flex justify-between pt-6 max-w-[200px] m-auto text-[#001b5e]">
        <div className='flex justify-between pt-6 max-w-[200px] '>
            <a href='https://github.com/Alioudione12' className='m-2 cursor-pointer hover:scale-110 ease-in duration-300'>
            <BsGithub size={30}/>
            </a>
            <a href='https://www.linkedin.com/in/aliou-dione-b77263193/' className='m-2 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaLinkedinIn size={30}/>
            </a>
            </div>
        </div>
    </div>
  )
}

export default Contact