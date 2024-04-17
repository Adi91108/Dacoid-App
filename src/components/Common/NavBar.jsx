import React from 'react'
import camera from '../../../public/images/camera.svg'
import profile from '../../../public/images/profile.svg'
import search from '../../../public/images/search.svg'
import statistics from '../../../public/images/statistics.svg'
import home from '../../../public/images/home.svg'
const NavBar = () => {
  return (
    <div className='flex bg-white fixed z-10 px-4 bottom-0 flex-row  max-w-[375px] w-[calc(100%-20px)] border-blue-600  justify-between items-center'>
        <img src={home} className='cursor-pointer' alt="home" /> 
        <img src={statistics} className='cursor-pointer' alt="stats" />
        <img src={search} className='-translate-y-[40%] cursor-pointer' alt="search" /> 
       <img src={camera} className='cursor-pointer' alt="camera" /> 
       <img src={profile} className='cursor-pointer' alt="profile" /> 
    </div>
  )
}

export default NavBar