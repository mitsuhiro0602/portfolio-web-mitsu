import { useState, useEffect, FunctionComponent} from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

const NavItem: FunctionComponent<{
  activeItem: string,
  setActiveItem: Function,
  name: string,
  route: string
}> = ({activeItem, name, route, setActiveItem}) => {
  return (
    activeItem !== name ? (
      <Link href={route}>
        <a>
          <span 
            onClick={()=>setActiveItem(name)} 
            className="hover:text-green">
            {name}
          </span>
        </a>
      </Link>
    ):null
  )
}

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  const { pathname } = useRouter()

  useEffect(()=> {
    if(pathname === "/") setActiveItem('About')
    else if(pathname === "/projects") setActiveItem('Projects')
    else if(pathname === "/resume") setActiveItem('Resume')
    else if(pathname === "/contact") setActiveItem('Contact')

  }, [])
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg">
        <NavItem activeItem={activeItem} 
          setActiveItem={setActiveItem} 
          name='About' 
          route='/'
        />
        <NavItem activeItem={activeItem} 
          setActiveItem={setActiveItem} 
          name='Resume' 
          route='/resume'
        />
        <NavItem activeItem={activeItem} 
          setActiveItem={setActiveItem} 
          name='Projects' 
          route='/projects'
        />
        <Link href="https://chatbot-login-25188.web.app/">
          <a>
            <span className="hover:text-green">Contact</span>
          </a>
        </Link>
        <Link href="https://web-hack.net/">
          <a>
            <span className="hover:text-green">
              Blog
            </span>
          </a>
        </Link>
        {/* <a href="/blog">Blog</a> */}
      </div>
    </div>
  )
}

export default Navbar
