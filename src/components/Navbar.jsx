import React,{useState} from 'react'

import {logo,menu,close} from '../assets/assets'

import {navLinks} from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
   <nav className='w-full py-6 justify-between flex items-center navbar'>
      <img src={logo} alt='adubi-bank' className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex hidden justify-end flex-1 items-center'>
        {navLinks.map((nav,index)=>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-white text-[16px] mr-10 ${index === navLinks.length - 1 ? `mr-0` : `mr-10`} `}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex-1 flex justify-end items-center'>
        <img src={toggle ? close : menu} className='h-[28px] w-[28px] object-contain' alt="menu" onClick={()=>setToggle((prev)=>!prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

        <ul className='list-none flex flex-col justify-end flex-1 items-center'>
        {navLinks.map((nav,index)=>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-white text-[16px] mr-10 ${index === navLinks.length - 1 ? `mr-0` : `mb-4`} `}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
          </li>
        ))}
      </ul>


        </div>
      </div>
   </nav>
  )
}

export default Navbar
