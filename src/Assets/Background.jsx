import React from 'react'
import { motion } from 'framer-motion'
const Background = () => {
    return (
        <motion.svg width="320" height="384" viewBox="0 0 320 384" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute inset-0 z-0'
            variants={{
                hover: {
                    scale: 1.5,
                },
            }}
            transition={{
                duration: 1,
                ease: "backInOut",
            }}
        >
            <motion.circle cx="160" cy="136" r="85" fill="black"
                variants={{
                    hover: {
                        scaleY: 0.5,
                        y: -25,
                    },
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    delay: 0.2,
                }}
            />
            <motion.ellipse cx="159.5" cy="287" rx="105.5" ry="46" fill="black"
                variants={{
                    hover: {
                        scaleY: 2,
                        y: -25,
                    },
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    delay: 0.3,
                }}
            />
        </motion.svg>
    )
}

export default Background
