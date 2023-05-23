import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedInIcon } from './Icons'

export const Footer = () => {
  return (
    <footer className='w-full text-light bg-dark font-medium text-lg sm:text-base'>
      <Layout className='py-6 flex items-center justify-between lg:flex-col lg:py-6'>
      <div className='flex justify-center lg:py-2 '>
        <motion.a href="https://github.com/J-Rentsendorj" target={'blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 1 }}
            className='w-6 mx-3'>
            <GithubIcon />
          </motion.a>

          <motion.a href="https://www.linkedin.com/in/baljinnyam-rentsendorj/" target={'blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 1 }}
            className='w-6 ml-3'>
            <LinkedInIcon />
          </motion.a>
        
         {/* Create one for Pacman and 3D Portfolio // https://react-svgr.com/playground/ */}
        </div>
        <Link href="/">Jin Rentsendorj</Link>
      </Layout>
    </footer>
  )
}
