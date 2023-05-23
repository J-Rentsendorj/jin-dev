import React from 'react'

export default function Home() {
    return (
        <div className="flex items-center justify-center relative h-screen w-screen overflow-hidden">
            <video autoPlay loop muted 
                className="absolute w-auto min-w-full min-h-full max-w-none z-0"
                style={{ 
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
            >
                <source src="/images/nomads.mp4" type="video/mp4"/> 
            </video>
            <div className="z-10 text-center">
                <h1 className=" text-white !text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl">BALJINNYAM &nbsp; RENTSENDORJ</h1>
            </div>
        </div>
    )
}