import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'
import name from '../../public/images/name.png'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-20'>
      <MotionLink href="/"
        className='w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold bg-light'
        whileHover={{
          backgroundColor:["#f5f5f5", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#f5f5f5"],
          transition:{duration: 1, repeat: Infinity}
        }}> 
        <Image src={name} alt='logo'/>
      </MotionLink>
    </div>
  )
}

export default Logo