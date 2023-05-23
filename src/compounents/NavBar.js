import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`
        h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'}
        `}>&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter()

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-dark my-2`} onClick={handleClick}>
      {title}

      <span className={
          `h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300 
          ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`
        }>&nbsp;</span>
    </button>
  )
}


const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-full fixed px-32 py-8 z-10 ease-in font-medium flex items-center justify-between lg:px-16 md:px-12 sm:px-8'>

      {/* HAMBURGER PANEL */}
      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      <div className='w-full flex justify-between items-center lg:hidden text-light'>
        <nav>
          <CustomLink href="/" title="Home" className=' mr-4' />
          <CustomLink href="/about" title="About" className=' mx-4' />
          <CustomLink href="/projects" title="Projects" className=' mx-4' />

        </nav>
      </div>

      {/* MOBILE MENU */}
      {
        isOpen ?
          <div className='min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 bg-light/50 rounded-lg backdrop-blur-md py-32'>
            <nav className='flex items-center flex-col justify-center'>
              <CustomMobileLink href="/" title="Home" className=' ' toggle={handleClick} />
              <CustomMobileLink href="/about" title="About" className='' toggle={handleClick} />
              <CustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick} />
            </nav>
          </div>
          : null
      }

      <div className='absolute left-[90%] translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar