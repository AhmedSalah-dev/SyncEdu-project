import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.svg'
import logo_2 from '../assets/images/logo2.svg'
import stars from "../assets/images/stars.svg"
import navItems from '../data/navItems'

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* زرار فتح السايدنـاف */}
      <div className={`lg:hidden fixed top-4 z-50  ${isOpen ? 'left-9 top-7' : 'right-4 top-7'}`}>
          <button
            onClick={toggleSidebar}
            className="p-2 bg-[#4311A5] text-white rounded-md shadow-md"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
       </div>

      

      {/* Sidebar */}
      <aside className={`fixed flex flex-col w-full lg:w-[236px] lg:h-[891px] h-screen bg-[#F9F9FB] justify-between border-r border-b border-[#CCCCCC]
              lg:sticky  top-0 right-0 z-40 transition-transform duration-300
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
              lg:translate-x-0
              lg:mb-20
            `}>
          {/* هنا نضيف div حوالين كل المحتوى الداخلي مع overflow */}
          <div className="flex flex-col h-full  justify-between">


            
            
            {/* Logo */}
            <div className="mt-7 mx-10">
              <img className="w-[150px] h-[44px]" src={logo} alt="Logo" />
            </div>

            {/* Navigation Links */}
            <nav className="mt-10 mx-8 flex flex-col gap-5">
              {navItems.map(({ path, icon, label }) => (
                <NavLink
                  to={path}
                  key={label}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center pr-2 gap-2 w-full h-12 rounded-lg transition-colors font-bold ${
                      isActive
                        ? 'bg-[#4311A5] text-white'
                        : 'text-[#4311A5] hover:bg-[#4311A5] hover:text-white'
                    }`
                  }
                >
                  {icon}
                  <span>{label}</span>
                </NavLink>
              ))}
            </nav>

            {/* النجوم واللوجو التاني */}
            <div className="flex flex-col items-center pb-6 lg:mt-8 ">
              <img className="w-24" src={stars} alt="stars" />
            </div>

          </div>
       <div className='hidden absolute top-[908px] lg:flex justify-center pb-4 pr-5 '>
         <img className='w-[202px] h-[36px]' src={logo_2} alt="" />
       </div>
       </aside>
    </>
  )
}

export default SideNav
