import { CiCalendar } from "react-icons/ci"
import { GrUserWorker } from "react-icons/gr"
import { LuBriefcaseBusiness, LuLayoutDashboard, LuUsersRound } from "react-icons/lu"
import { PiBookLight, PiEnvelopeOpenBold } from "react-icons/pi"
import { TbFileReport, TbMoneybag } from "react-icons/tb"

 

const navItems = [
        {
            label: 'لوحه التحكم', 
            icon: <LuLayoutDashboard size={25} /> , 
            path: '/dashboard'
        },
        {
            label: 'الحجوزات', 
            icon:  <PiBookLight size={25}/>, 
            path: '/reservations'
        },
        {
            label: 'الجداول', 
            icon: <CiCalendar size={25}/> , 
            path: '/schedules'
        },
        {
            label: 'الطلاب', 
            icon: <LuUsersRound size={25}/>
            , 
            path: '/students'
        },
        {
            label: 'المدرسين', 
            icon: <LuBriefcaseBusiness size={25}/>
            , 
            path: '/teachers'
        },
        {
            label: 'الماليات', 
            icon: <TbMoneybag size={25}/>
            , 
            path: '/finances'
        },
        {
            label: 'التقارير', 
            icon: <TbFileReport size={25}/>
            , 
            path: '/reports'
        },
        {
            label: 'sms', 
            icon: <PiEnvelopeOpenBold size={25}/>
            , 
            path: '/messages'
        },
        {
            label: 'شوؤن العاملين', 
            icon: <GrUserWorker size={25}/>, 
            path: '/permissions'
        },
    ]

    export default navItems