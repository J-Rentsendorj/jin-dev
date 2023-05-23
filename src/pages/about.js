import AnimatedText from '@/compounents/AnimatedText'
import Layout from '@/compounents/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profilePic from '../../public/images/profile/profile-pic.png'

const about = () => {
  return (
    <>
      <Head>
        <title>Jin Rentsendorj | About Page</title>
        <meta name='description' content='my about page' />
      </Head>

      <div className='relative w-full min-h-screen flex-grow'>
        <div className="absolute inset-0" style={{
          backgroundImage: "url('/images/mongol-invasion.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          // zIndex: -1,
        }}></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <main className='flex w-full flex-col items-center text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="About Me"
              className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
            <div className='grid w-full grid-cols-8 gap-40 sm:gap-8 '>
              <div className='col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                <h2 className='mb-4 text-lg font-bold uppercase text-light/75'>
                  Biography
                </h2>
                <p className=' mb-4 text-2xl font-bold'>Im Jin, a passionate UI/UX developer and U.S. Army Veteran
                  with technical expertise in modern web technologies to inlcude but not limited too Next.JS, TailwindCSS and Three.JS. Furthermore, 
                  I have experience in building full stack applications with Java and Python.
                </p>
                <p className=' my-4 text-2xl font-bold'>I've optimized hospital software infrastructure for the Veteran's Administration, 
                  gaining valuable insights into large-scale solutions. Front-end development is my true passion, and I enjoy crafting 
                  visually stunning web applications that merge form and function seamlessly.
                </p>
                <p className='text-2xl font-bold'>Having served as a reconnaissance squad leader for over a decade, I mastered the art of navigating through 
                  challenging scenarios, and developed an ability to adapt swiftly to rapidly changing situations. These skills have 
                  been invaluable in the ever-evolving world of web development and tech, enabling me to approach every project with a 
                  unique blend of strategic thinking, leadership, and resilience.
                </p>
              </div>
              <div className='col-span-4 relative xl:col-span-4 md:order-1 md:col-span-8'>
                <div className='absolute' />
                  <Image src={profilePic} alt="Jin-Pic" 
                  className='rounded-[2rem] opacity-80 border border-black'
                  priority 
                  width={600}
                  height={600}
                  />
              </div>
            </div>
          </Layout>
        </main>
      </div>
    </>
  )
}

export default about