 import ControlIcon  from '../assets/icons/controlIcon.svg'
 import ReservationsIcon from '../assets/icons/ReservationsIcon.svg'
 import SchedulesIcon from '../assets/icons/scheduleIcon.svg'
 import StudentsIcon from '../assets/icons/studentsIcon.svg'
 import TeachersIcon from '../assets/icons/teachersIcon.svg'
 import FinancesIcon from '../assets/icons/FinancesIcon.svg'
 import ReportsIcon from '../assets/icons/reportsIcon.svg'
 import SmsIcon from '../assets/icons/smsIcon.svg'
 import PermissionsIcon from '../assets/icons/PermissionsIcon.svg'

const navItems = [
        {
            label: 'لوحه التحكم', 
            icon: ControlIcon, 
            path: '/dashboard'
        },
        {
            label: 'الحجوزات', 
            icon: ReservationsIcon , 
            path: '/reservations'
        },
        {
            label: 'الجداول', 
            icon: SchedulesIcon, 
            path: '/schedules'
        },
        {
            label: 'الطلاب', 
            icon: StudentsIcon, 
            path: '/students'
        },
        {
            label: 'المدرسين', 
            icon: TeachersIcon, 
            path: '/teachers'
        },
        {
            label: 'الماليات', 
            icon: FinancesIcon, 
            path: '/finances'
        },
        {
            label: 'التقارير', 
            icon: ReportsIcon, 
            path: '/reports'
        },
        {
            label: 'sms', 
            icon: SmsIcon, 
            path: '/messages'
        },
        {
            label: 'شوؤن العاملين', 
            icon: PermissionsIcon, 
            path: '/permissions'
        },
    ]

    export default navItems