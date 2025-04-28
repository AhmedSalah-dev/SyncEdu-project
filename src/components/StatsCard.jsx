import React from 'react'

const StatsCard = ({title, count, change, percent, type,name, icon,isActive, onClick, showChange = true}) => {
  
  const isPositive = type == 'increase';

  return (
    <div 
      onClick={onClick}
      className={`flex-1 min-w-[354px] h-[200px] rounded-[8px] border p-4 flex flex-col justify-between shadow-sm cursor-pointer
        ${isActive ? "border-[#4311A5] bg-[#F9F9FB] text-[#4311A5]" : "border-[#CCCCCC] bg-[#F9F9FB] hover:bg-[#4311A5] hover:text-white group"}
      `}
   >

  {/* الأيقونة */}
  <div 
    className={`
    w-[50px] h-[50px] rounded-full flex items-center justify-center 
    ${isActive ? "bg-[#4311A5] text-white" : "bg-white text-[#4311A5] group-hover:bg-white group-hover:text-[#4311A5]"}
    `}
  >
    {icon}
  </div>

  {/* العنوان */}
  <p className={`text-[14px] font-semibold ${isActive ? "text-[#4311A5]" : "text-[#4311A5] group-hover:text-white"}`}>
    {title}
  </p>

  {/* العداد */}
  <h3 className={`text-[24px] font-bold ${isActive ? "text-[#2E2E2E]" : "text-[#2E2E2E] group-hover:text-white"}`}>
    {count} {name}
  </h3>

  {/* نسبة التغيير */}
  {showChange && (
  <p className="text-sm flex items-center gap-1">
    <span className={`${isPositive ? "text-[#4CAF4F]" : "text-[#FF4B4B]"} font-semibold ${!isActive && "group-hover:text-white"}`}>
      {isPositive ? "⬈" : "⬊"} {percent}%
    </span>

    <span className={`font-semibold ${isActive ? "text-[#4311A5]" : "text-[#4311A5] group-hover:text-white"}`}>
      ({change > 0 ? "+" : ""}{change})
    </span>

    <span className={`font-semibold ${isActive ? "text-[#62636C]" : "text-[#62636C] group-hover:text-white"}`}>
      {isPositive ? "زياده اخر 30 يوما" : "انخفاض اخر 30 يوما"}
    </span>
  </p>
)}

</div>

  )
}

export default StatsCard