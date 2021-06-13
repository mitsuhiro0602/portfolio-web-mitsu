import { AiFillGithub, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
  return (
    <>
      <div>
        <img 
          src="./images/01.png" 
          alt="user avatar"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
          <span>Mitsuhiro</span>
          Ookochi
        </h3>
        <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
          Web Developer
        </p>
        <a 
          className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center"
          href=""
          download="name">
          <GiTie  className="w-6 h-6" />Download Resume
        </a>
        {/* social icon */}
      </div>
      <div className="flex justify-around my-5 text-green-500 w-9/12 md:w-full mx-auto">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div className="my-5 py-4 bg-gray-200" style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
        <div className="flex item-center justify-center space-x-2">
          <GoLocation />
          <span>神奈川県横浜市在住</span>
        </div>
          <p className="my-2">mail@hack-log.com</p>
          <p className="my-2">90530353850</p>
      </div>
      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
      >
        Email me
      </button>
      <button
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  )
}

export default Sidebar
