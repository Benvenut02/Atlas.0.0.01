import React, { useState } from 'react'
import { BiChevronRight, BiLogOut } from 'react-icons/bi'
import { FaHome } from 'react-icons/fa'
import { FaHistory } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'
 import { NavLink } from 'react-router-dom'

export const SidebarWidth = 80;
const Sidebar = () => {
    
    const [isSelected, setIsSelected] = useState(null);

    const handleSelect = (label) => {
        setIsSelected(label);
        console.log(isSelected);
    };


  return (
    <>
    <div className='flex flex-col 
        h-screen fixed top-0
        border-r-2
        border-gray-700 
        text-white 
        items-center 
        shadow-lg
    '
    style={{
        width: SidebarWidth,
    }}
    >
        <div className='text-3xl border-purple-700 w-17 m-4 p-1 bg-gradient-to-r from-gray-900 to-gray-800 rounded-full'>
        
            <img src="\images\Logo.jpg" alt="Logo" className='w-20 rounded-full ' />
            
        </div>
        <SidebarIcon icon={<FaHome />} path={"/home"} label={"Home"} />
        <SidebarIcon icon={<FaHistory />} path={"/history"} label={"History"}/>
    
        <footer className='mt-auto text-gray-500'>
            <SidebarIcon icon={<IoSettings />} path={"/settings"} label={"Settings"}/>
            <SidebarIcon icon={"?"} path={"/help"} label={"Help"}/>
            <p className='text-xs mt-4'>
            &copy; 2024 Atlas Inc.
            v1.0.0</p>
        </footer>
            
    
    </div>
    </>  
  )
}

const SidebarIcon = ({icon,path, label, active}) => {
    return (
            <NavLink to={path} 
                className={({isActive})=> {
                    return isActive ? 
                    "text-2xl w-full h-20 justify-center flex flex-col items-center text-white font-semibold text-xl bg-gray-700 border-l-4 border-lime-400 rounded-r-[5px]" : 
                    `flex flex-col 
                items-center text-2xl
                text-gray-400
                w-full
                hover:border-l-4
                hover:border-violet-600
                hover:rounded-l-none
                hover:text-white
                hover:font-semibold
                hover:text-xl
                hover:bg-gray-700
                hover:cursor-pointer
                transition-all
                duration-200
                ease-in-out
                py-3
                rounded-sm
            
                `
                }}
                >
                    
                    <div>
                        {icon}
                    </div>
                    <div className='text-sm my-1'>
                        {label}
                    </div>
            </NavLink>
    )}

export default Sidebar