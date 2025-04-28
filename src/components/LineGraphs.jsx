import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { studentData } from '../data/data';
import { useState } from 'react';

const LineGraphs = () => {

  const [selectedYear, setSelectedYear] = useState("2025")
    const data =[...studentData[selectedYear]].reverse()
  

  return (
    <div className='w-[446px] mx-auto'>
      <div className='flex justify-between  mt-[21px]'>
            <h2 className='font-semibold text-[16px] '>معدل الأزدياد السنوي للطلاب </h2>
            <select 
             className="border-1 border-[#C8C9CC] text-[#010B3866] w-[108px] h-[32px] px-2 rounded-[4px]"
             value={selectedYear}
             onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="2025">سنه 2025</option>
              <option value="2024">سنه 2024</option>
          </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
          <linearGradient id="currentYearGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#CCCCCC" />
            <stop offset="20%" stopColor="#BB66EE" />
            <stop offset="40%" stopColor="#370093" />
            <stop offset="60%" stopColor="#370093" />
            <stop offset="80%" stopColor="#BB66EE" />
            <stop offset="100%" stopColor="#CCCCCC" />
          </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="0" />
                  <XAxis dataKey="name" />
                  <YAxis
                  orientation="right"
                  domain={[0, 4000]}
                  ticks={[0,1000,2000,3000,4000]}
                  tick={{fill:"#62636C", fontSize: 12}}
                  tickMargin={60}
                  axisLine={false}
                  />
          <Tooltip />
          
          <Line type="monotone" dataKey="السنه الحاليه" stroke="url(#currentYearGradient)" strokeWidth={4} dot={false} />
          <Line type="monotone" dataKey="السنه الماضيه" stroke="#30D9EF " strokeWidth={4} dot={false} />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-center  divide-x divide-[#CCCCCC]  ">
        <div className="flex items-center space-x-2 px-8">
            <div className="bg-[#4311A5] w-[6px] h-[6px] rounded"></div>
            <p>السنه الحاليه</p>
        </div>
        <div className="flex items-center space-x-2 px-8">
           <div className="bg-[#30D9EF] w-[6px] h-[6px] rounded"></div>
           <p>السنه الماضيه</p>
        </div>   
      </div>
    </div>
  )
}

export default LineGraphs