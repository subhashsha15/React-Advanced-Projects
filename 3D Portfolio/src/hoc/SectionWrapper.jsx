import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idName) => {
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className='hash-span' id={idName}>  {/*here,this span tag is written because on click of rectangle white button*/}
                    &nbsp;                                 {/*it will scroll to "About" section.and that's why it's id is "about" */}
                </span>                                      
                <Component />
            </motion.section>
        )
    }

    return HOC;
}

export default SectionWrapper;