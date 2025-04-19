import {  NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import logo_2 from '../assets/images/logo2.svg'
import stars from "../assets/images/stars.svg"
import navItems from '../data/navItems'
const SideNav = () => {

    

  return (
    <>
    <aside className=" flex flex-col w-59 h-[891px] bg-[#F9F9FB]   justify-between border-l-1 border-b-1 border-[#CCCCCC]">
        {/* Logo */}
        <div  className='mt-[29px] mx-[42.635px]'>
            <img className='w-[150.37px] h-[44.67px]' src={logo} alt="Logo" />
        </div>
        {/* Navigation Links */}
        
        <nav className=' w-[173px] h-[592px] absolute top-[102px] mx-[31.5px] space-y-[20px] ' >
          {navItems.map(({path,icon,label}) => {
            return(
              <NavLink
              to={path} 
              key={label}
              className={({isActive}) => {
                return `flex items-center pr-[16px] space-x-[8px]  w-[173px] h-[48px] rounded-[8px] transition-colors font-bold ${
                  isActive
                  ? 'bg-[#4311A5] text-[#ffffff] '
                  : 'text-[#4311A5]  hover:bg-[#4311A5] hover:text-[#ffffff]'
                  }`
                }}
                >
                <img 
                  src={icon} 
                  alt={label}
                  className=''
                />
                <span>{label}</span>
                </NavLink>
            )
            })}
          </nav>

            <div className='flex justify-center pb-7'>
              <img className='w-[99.58px] h-[138px]'  src={stars} alt="" />
            </div>
        
    </aside>

    <div className=' absolute top-[908px] flex justify-center pb-4 pr-5'>
      <img className='w-[202px] h-[36px]' src={logo_2} alt="" />
    </div>
    </>
  )
}

export default SideNav