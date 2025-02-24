import React from 'react'

function Hero() {
    return (
        <>
            <section className="w-full h-full">
                <img src="./hero.jpg" alt="hero img" className='absolute z-0 h-[100vh] w-full' />
                <button className='absolute w-30 h-9 z-1 text-white bg-cyan-500 border rounded-[30px] mt-[72vh] ml-[47vw] cursor-pointer'>Get Started</button>
            </section>
        </>
    )
}

export default Hero 