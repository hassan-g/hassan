import logo from '../assets/images/G.png'
import d from '../assets/images/d.pdf'
import {FaBars, FaFacebook, FaGithub, FaLinkedin, FaTimes} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useState } from 'react'
import { Link } from 'react-scroll'
 function Navbar() {
  const [nav,setNav] = useState(false);
  const handlClick =()=> setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={logo} style={{width:"80px"}}/>
        </div>

        {/* menu  */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' duration={400} smooth={true}>Home</Link>
                </li>
                <li>
                   <Link to='about' duration={400} smooth={true}>About</Link>
                </li>
                <li>
                    <Link to='skills' duration={400} smooth={true}>Skills</Link>
                </li>
                <li>
                    <Link to='work' duration={400} smooth={true}>Projects</Link>
                </li>
                <li>
                  <Link to='contact' duration={400} smooth={true}>Concat</Link>
                </li>
            </ul>

        {/* Habmerger  */}
        <div onClick={handlClick} className='md:hidden z-10'>
            {
              !nav?<FaBars/> : <FaTimes/>
            }
        </div>

        {/* Mobail Menu  */}
            <ul className={!nav?'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handlClick}  to='home' duration={400} smooth={true}>Home</Link>
                </li>
                <li className='py-6 text-4xl'>
                   <Link onClick={handlClick} to='about' duration={400} smooth={true}>About</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handlClick} to='skills' duration={400} smooth={true}>Skills</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handlClick} to='work' duration={400} smooth={true}>Projects</Link>
                </li>
                <li className='py-6 text-4xl'>
                  <Link onClick={handlClick} to='contact' duration={400} smooth={true}>Concat</Link>
                </li>
            </ul>

          {/* Social Icons  */}
          <div  className='hidden lg:flex fixed flex-col top-[35%] left-0'>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900'>
                  <a className='flex justify-between items-center w-full text-gray-300' href='/'>Facebook <FaFacebook size={30}/> </a>
              </li>

              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                  <a className='flex justify-between items-center w-full text-gray-300' href='/'>LinkedIn <FaLinkedin size={30}/> </a>
              </li>

              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                  <a className='flex justify-between items-center w-full text-gray-300' href='/'>GitHub <FaGithub size={30}/> </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                  <a className='flex justify-between items-center w-full text-gray-300' download={d} href='/'>Resume <BsFillPersonLinesFill size={30}/> </a>
              </li>
          </div>
    </div>
  )
}

export default Navbar