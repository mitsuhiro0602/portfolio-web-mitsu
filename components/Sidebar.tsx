import { AiFillGithub, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';

const Sidebar = () => {
  
  const {theme, setTheme} = useTheme()

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <>
      <div>
        <img 
          src="./images/01.png" 
          alt="user avatar"
          className="w-32 h-32 mx-auto rounded-full"
        />
        <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
          <span>Mitsuhiro</span>
          Ookochi
        </h3>
        <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
          Web Developer
        </p>
        <a 
          className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500"
          href=""
          download="name">
          <GiTie  className="w-6 h-6" />Download Resume
        </a>
        {/* social icon */}
      </div>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
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
      {/* contacts */}
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500" style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
        <div className="flex justify-center space-x-2 item-center">
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
        onClick={changeTheme}
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  )
}

export default Sidebar
