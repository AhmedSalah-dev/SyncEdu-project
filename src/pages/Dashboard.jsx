import {  BriefcaseBusiness, ChartNoAxesColumn, ChevronDownIcon, ChevronUpIcon, UsersRound, UsersRoundIcon } from 'lucide-react'
import React, { useState } from 'react'
import BarCharts from '../components/BarCharts';
import LineGraphs from '../components/LineGraphs';
import StatsCard from '../components/StatsCard';
import { statsData,statsMoneyData,statsTeachersData, statsResourceData, statsStaffData } from '../data/data';
import { GrUserWorker } from 'react-icons/gr';
import { TbMoneybag } from 'react-icons/tb';


const Dashboard = () => {

  const  [activeStatId, setActiveStatId] = useState(null);
  const  [showAllStats, setShowAllStats] = useState(false)
  const [showAllMoney, setShowAllMoney] = useState(false);
  const [showAllTeachers, setShowAllTeachers] = useState(false);
  const [showAllResource, setShowAllResource] = useState(false);
  const [showAllStaff, setShowAllStaff] = useState(false);


  return (
    <div className=' lg:overflow-y-auto mx-auto h-full '>

        <div className="flex flex-col items-center px-4 lg:px-0 w-full max-w-[1177px] mx-auto">
            {/* Header section */}
            <div className="flex flex-col lg:flex-row items-center gap-4 mt-32 w-full">
              <div className="lg:flex-1 h-10 px-3 lg:px-0 bg-[#4311A5] rounded-[8px] text-white flex justify-center items-center gap-3">
                <ChartNoAxesColumn className="border-[1.5px] rounded-md w-5 h-5" />
                <p className="font-semibold text-[18px]">الإحصائيات الكلية</p>
              </div>
              <select className="w-full lg:max-w-[212px] h-10 bg-[#A576ff] text-white rounded-[8px] px-3">
                <option>فلترة الجميع : اخر 30 يوما</option>
              </select>
            </div>

            {/* Charts section */}
            <div className="bg-[#ffffff] flex flex-col lg:flex-row gap-6 my-6 w-full">
              <div className="w-full lg:w-1/2 h-[393px] border border-[#c8c9cc] rounded-[8px]">
                <BarCharts />
              </div>
              <div className="w-full lg:w-1/2 h-[393px] border border-[#c8c9cc] rounded-[8px]">
                <LineGraphs />
              </div>
            </div>
        </div>


            {/*       احصائيات الحضور       */}

        <div className="relative flex flex-col items-center w-full max-w-[1177px] mx-auto border-1 border-[#C8C9CC] rounded-[8px] px-5 pb-5 mb-16">

            {/* Header section */}
            <div className="flex flex-col lg:flex-row items-center gap-4 mt-8 w-full mb-5">
              <div className="lg:flex-1 h-10 px-3 lg:px-0 bg-[#4311A5] rounded-[8px] text-white flex justify-center items-center gap-3">
                <UsersRound className=" w-5 h-5" />
                <p className="font-semibold text-[18px]">احصائيات الحضور</p>
              </div>
              <select className="w-full lg:max-w-[311px] h-10 text-[#999999] border-1 border-[#4311A5] rounded-[8px] px-3">
                <option>بيانات الجميع : اخر 30 يوما</option>
              </select>
            </div>

            {/* Stats section */}
            <div className='flex flex-wrap gap-8 w-full'>
              {statsData.slice(0, showAllStats ? statsData.length : 3).map((stat) => (
                <StatsCard 
                key={`attendance-${stat.id}`}
                title={stat.title}
                count={stat.count}
                name={stat.name}
                change={stat.change}
                percent={stat.percent}
                type={stat.type}
                isActive={activeStatId===`attendance-${stat.id}`}
                onClick={() => setActiveStatId(`attendance-${stat.id}`)}
                icon={ <UsersRoundIcon />} 
                />
              ))}
            </div>
            
                <button 
                  onClick={()=> setShowAllStats(!showAllStats)}
                  className='bg-[#ffffff]  text-[#4311A5] absolute bottom-[-40px] px-8 py-2 rounded-b-full border border-t-0 border-[#C8C9CC] shadow-md flex items-center gap-2 z-10 transition-all cursor-pointer'
                >
                    {showAllStats ? (
                      <>
                        <ChevronUpIcon className="w-6 h-6" />
                      </>
                    ) : 
                    (
                      <>
                        <ChevronDownIcon className="w-6 h-6" />
                      </>
                    )
                    }
                </button>
        </div>

            {/*       احصائيات الماليات   */}
         
         <div className="relative flex flex-col items-center w-full  max-w-[1177px] mx-auto border-1 border-[#C8C9CC] rounded-[8px] px-5 pb-5 mb-16">

            {/* Header section */}
            <div className="flex flex-col lg:flex-row items-center gap-4 mt-8 w-full mb-5">
              <div className="lg:flex-1 h-10 px-3 lg:px-0 bg-[#4311A5] rounded-[8px] text-white flex justify-center items-center gap-3">
                <TbMoneybag className=" w-5 h-5" />
                <p className="font-semibold text-[18px]">احصائيات الماليات</p>
              </div>
              <select className="w-full lg:max-w-[311px] h-10 text-[#999999] border-1 border-[#4311A5] rounded-[8px] px-3">
                <option>بيانات الجميع : اخر 30 يوما</option>
              </select>
            </div>

            {/* Stats section */}
            <div className='flex flex-wrap gap-8 w-full'>
              {statsMoneyData.slice(0, showAllMoney ? statsMoneyData.length : 3).map((stat) => (
                <StatsCard 
                key={`money-${stat.id}`}
                title={stat.title}
                count={stat.count}
                name={stat.name}
                change={stat.change}
                percent={stat.percent}
                type={stat.type}
                isActive={activeStatId===`money-${stat.id}`}
                onClick={() => setActiveStatId(`money-${stat.id}`)}
                icon={ <TbMoneybag />} 
                />
              ))}
            </div>
            
                <button 
                  onClick={()=> setShowAllMoney(!showAllMoney)}
                  className='bg-[#ffffff]  text-[#4311A5] absolute bottom-[-40px] px-8 py-2 rounded-b-full border border-t-0 border-[#C8C9CC] shadow-md flex items-center gap-2 z-10 transition-all cursor-pointer'
                >
                    {showAllMoney ? (
                      <>
                        <ChevronUpIcon className="w-6 h-6" />
                      </>
                    ) : 
                    (
                      <>
                        <ChevronDownIcon className="w-6 h-6" />
                      </>
                    )
                    }
                </button>
         </div>    

            {/*       احصائيات المدرسين   */}

          
        <div className="relative flex flex-col items-center w-full  max-w-[1177px] mx-auto border-1 border-[#C8C9CC] rounded-[8px] px-5 pb-5 mb-16">

          {/* Header section */}
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-8 w-full mb-5">
            <div className="lg:flex-1 h-10 px-3 lg:px-0 bg-[#4311A5] rounded-[8px] text-white flex justify-center items-center gap-3">
              <BriefcaseBusiness  className=" w-5 h-5" />
              <p className="font-semibold text-[18px]">احصائيات المدرسين</p>
            </div>
            <select className="w-full lg:max-w-[311px] h-10 text-[#999999] border-1 border-[#4311A5] rounded-[8px] px-3">
              <option>بيانات الجميع : اخر 30 يوما</option>
            </select>
          </div>

          {/* Stats section */}
          <div className='flex flex-wrap gap-8 w-full'>
            {statsTeachersData.slice(0, showAllTeachers ? statsTeachersData.length : 3).map((stat) => (
              <StatsCard 
              key={`money-${stat.id}`}
              title={stat.title}
              count={stat.count}
              name={stat.name}
              change={stat.change}
              percent={stat.percent}
              type={stat.type}
              isActive={activeStatId===`teachers-${stat.id}`}
              onClick={() => setActiveStatId(`teachers-${stat.id}`)}
              icon={ <BriefcaseBusiness  />} 
              />
            ))}
          </div>

              <button 
                onClick={()=> setShowAllTeachers(!showAllTeachers)}
                className='bg-[#ffffff]  text-[#4311A5] absolute bottom-[-40px] px-8 py-2 rounded-b-full border border-t-0 border-[#C8C9CC] shadow-md flex items-center gap-2 z-10 transition-all cursor-pointer'
              >
                  {showAllTeachers ? (
                    <>
                      <ChevronUpIcon className="w-6 h-6" />
                    </>
                  ) : 
                  (
                    <>
                      <ChevronDownIcon className="w-6 h-6" />
                    </>
                  )
                  }
              </button>
         </div>

                  {/* احصائيات الموارد */}

         <div className="relative flex flex-col items-center w-full  max-w-[1177px] mx-auto border-1 border-[#C8C9CC] rounded-[8px] px-5 pb-5 mb-16">

            {/* Header section */}
            <div className="flex flex-col lg:flex-row items-center gap-4 mt-8 w-full mb-5">
              <div className="lg:flex-1 h-10 px-3 lg:px-0 bg-[#4311A5] rounded-[8px] text-white flex justify-center items-center gap-3">
                <BriefcaseBusiness  className=" w-5 h-5" />
                <p className="font-semibold text-[18px]">احصائيات الموارد</p>
              </div>
              <select className="w-full lg:max-w-[311px] h-10 text-[#999999] border-1 border-[#4311A5] rounded-[8px] px-3">
                <option>بيانات الجميع : اخر 30 يوما</option>
              </select>
            </div>

            {/* Stats section */}
            <div className='flex flex-wrap gap-8 w-full'>
              {statsResourceData.slice(0, showAllResource ? statsResourceData.length : 3).map((stat) => (
                <StatsCard 
                key={`resource-${stat.id}`}
                title={stat.title}
                count={stat.count}
                name={stat.name}
                icon={stat.icon} 
                isActive={activeStatId===`resource-${stat.id}`}
                onClick={() => setActiveStatId(`resource-${stat.id}`)}
                showChange={false}
                />
              ))}
            </div>

                <button 
                  onClick={()=> setShowAllResource(!showAllResource)}
                  className='bg-[#ffffff]  text-[#4311A5] absolute bottom-[-40px] px-8 py-2 rounded-b-full border border-t-0 border-[#C8C9CC] shadow-md flex items-center gap-2 z-10 transition-all cursor-pointer'
                >
                    {showAllResource ? (
                      <>
                        <ChevronUpIcon className="w-6 h-6" />
                      </>
                    ) : 
                    (
                      <>
                        <ChevronDownIcon className="w-6 h-6" />
                      </>
                    )
                    }
                </button>
         </div> 

                  {/* احصائيات العاملين */}
         <div className="relative flex flex-col items-center w-full  max-w-[1177px] mx-auto border-1 border-[#C8C9CC] rounded-[8px] px-5 pb-5 mb-16">

            {/* Header section */}
            <div className="flex flex-col lg:flex-row items-center gap-4 mt-8 w-full mb-5">
              <div className="lg:flex-1 h-10 px-3 lg:px-0 bg-[#4311A5] rounded-[8px] text-white flex justify-center items-center gap-3">
                <GrUserWorker  className=" w-5 h-5" />
                <p className="font-semibold text-[18px]">احصائيات العاملين</p>
              </div>
              <select className="w-full lg:max-w-[311px] h-10 text-[#999999] border-1 border-[#4311A5] rounded-[8px] px-3">
                <option>بيانات الجميع : اخر 30 يوما</option>
              </select>
            </div>

            {/* Stats section */}
            <div className='flex flex-wrap gap-8 w-full'>
              {statsStaffData.slice(0, showAllStaff ? statsStaffData.length : 3).map((stat) => (
                <StatsCard 
                key={`staff-${stat.id}`}
                title={stat.title}
                count={stat.count}
                name={stat.name}
                icon= {<GrUserWorker size={25} />}
 
                isActive={activeStatId===`staff-${stat.id}`}
                onClick={() => setActiveStatId(`staff-${stat.id}`)}
                showChange={false}
                />
              ))}
            </div>

                <button 
                  onClick={()=> setShowAllStaff(!showAllStaff)}
                  className='bg-[#ffffff]  text-[#4311A5] absolute bottom-[-40px] px-8 py-2 rounded-b-full border border-t-0 border-[#C8C9CC] shadow-md flex items-center gap-2 z-10 transition-all cursor-pointer'
                >
                    {showAllStaff ? (
                      <>
                        <ChevronUpIcon className="w-6 h-6" />
                      </>
                    ) : 
                    (
                      <>
                        <ChevronDownIcon className="w-6 h-6" />
                      </>
                    )
                    }
                </button>
           </div> 
    </div>
    
  )
}

export default Dashboard