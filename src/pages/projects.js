import AnimatedText from '@/compounents/AnimatedText'
import { GithubIcon } from '@/compounents/Icons'
import Layout from '@/compounents/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/program-and-control.png'

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid 
    border-dark bg-dark/50 shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <Link 
        href={link} 
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <Image 
          src={img} 
          alt={title} 
          className='w-full h-auto' 
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        {/* <span className='text-primary font-medium text-xl xs:text-base'>
          {type}
        </span> */}

        <Link 
          href={link} 
          target='_blank' 
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-light'>
          {summary}
        </p>
        <div className='mt-2 flex items-center '>
          <Link 
            href={github} 
            target='_blank' 
            className='w-10'> 
              <GithubIcon /> 
          </Link>
          <Link 
            href={link} 
            target='_blank' 
            className='ml-4 rounded-lg bg-black text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'> 
              Visit Project 
          </Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Jin Rentsendorj | Projects Page</title>
        <meta name='description' content='my about page' />
      </Head>

      <main className='relative h-screen w-full flex flex-col items-center justify-center'>
        <div className="absolute inset-0" style={{
            backgroundImage: "url('/images/nomads.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            zIndex: -1,
          }}></div>
        <Layout className='pt-16'>
          <AnimatedText 
            text="Projects" 
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' 
          />
          <div className='grid grid-12-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 text-light'>
            <div className='col-span-12' >
              <FeaturedProject 
              title = "Program and Control"
              img={project1}
              summary= "Pacman inspired React Three Fiber application. The game uses several dependencies including
                @react-three/drei for 3D rendering, @react-three/fiber for 3D rendering in a React environment, @react-three/rapier for physics, 
                howler for sound effects, leva for easy control management, react-use for custom hooks, three.js for 3D graphics, and zustand for 
                state management. The game is built to be played in a web browser and provides an immersive 3D gaming experience reminiscent of the 
                original Pac-Man game with an EDM twist. Mobile version is currently in development."
              link="https://program-and-control.vercel.app/"
              github="https://github.com/J-Rentsendorj/ProgramAndControl"
              type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects