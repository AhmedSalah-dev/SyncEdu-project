import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import { moneyData } from "../data/data";
import { useState } from "react";



const BarCharts = () => {
  const [selectedYear, setSelectedYear] = useState("2025")
  const data =[...moneyData[selectedYear]].reverse()

  return (
    <div className=" w-[446px] mx-auto ">
      <div className='flex justify-between  mt-[21px]'>
            <h2 className='font-semibold text-[16px] '>معدل الازدياد المالي</h2>
            <select 
             className="border-1 border-[#C8C9CC] text-[#010B3866] w-[108px] h-[32px] px-2 rounded-[4px]"
             value={selectedYear}
             onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="2025">سنه 2025</option>
              <option value="2024">سنه 2024</option>
          </select>
      </div>
      <ResponsiveContainer width={"100%"} height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="0" />
        <XAxis dataKey="name" />
        <YAxis
        orientation="right"
        domain={[0, 40000]}
        ticks={[0,10000,20000,30000,40000]}
        tick={{fill:"##62636C", fontSize: 12}}
        tickMargin={60}
        axisLine={false}
        />
        
        <Tooltip />
        <Bar
          dataKey="الأستهلاك"
          fill="#30D9EF"
          barSize={15}
          radius={[3,3,0,0]}
        />
        <Bar
          dataKey="المكاسب"
          fill="#4311A5"
          barSize={15}
          radius={[3,3,0,0]}
        />
      </BarChart>
      </ResponsiveContainer>

      <div className="flex justify-center  divide-x divide-[#CCCCCC]  ">
        <div className="flex items-center space-x-2 px-8">
            <div className="bg-[#4311A5] w-[6px] h-[6px] rounded"></div>
            <p>المكاسب</p>
        </div>
        <div className="flex items-center space-x-2 px-8">
           <div className="bg-[#30D9EF] w-[6px] h-[6px] rounded"></div>
           <p>الاستهلاك</p>
        </div>   
      </div>

    </div>
  )
}

export default BarCharts