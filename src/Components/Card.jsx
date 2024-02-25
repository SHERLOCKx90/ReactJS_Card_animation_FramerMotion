import React from 'react'
import { motion } from 'framer-motion'
import Background from '../Assets/Background'

const Card = ({ price, plan, tagline, bgColor }) => {
    return (
        <motion.div
            whileHover="hover"
            variants={{
                hover: {
                    scale: 1.05,
                },
            }}
            transition={{
                duration: 1,
                ease: "easeInOut",
            }} className={`text-white text-2xl relative h-96 w-80 shrink-0 overflow-hidden rounded-xl p-8 bg-gradient-to-br from-pink-500 via-indigo-500 to-green-300`}>
            <div className='relative z-10 text-white'>
                <span className='bg-white/30 px-3 py-0.5 mb-3 block w-fit rounded-full text-sm font-light text-white'>Pro</span>
                <motion.span initial={{
                    scale: 0.85
                }}
                    variants={{
                        hover: {
                            scale: 1,
                        }
                    }}

                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                    }}
                    className='my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]'>{price}<br />{plan}</motion.span>
                <p className='text-sm'>{tagline}</p>
            </div>
            <button className='mt-5 absolute bottom-4 left-4 right-4 z-20 rounded-xl border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-900 backdrop-blur transition-colors hover:bg-white/30'>Get it now</button>
            <Background />
        </motion.div >
    )
}

export default Card
