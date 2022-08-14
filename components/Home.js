import Link from 'next/link'
import styles from '../styles/Home.module.css'
import DarkModeSwitch from './DarkModeSwitch'
import Particle from './Particles'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { DownloadIcon} from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import Typewriter from 'react-simple-typewriter'

export default function Navbar () {
    return (
        <div>
            <Particle />
                {/* <div className={styles.profilePic} style={{borderRadius: '30px', overflow: 'hidden'}}>
                    <Image src='/profile.jpg' width={306.25} height={448.25} alt=''/>
                </div> */}
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3}} className={styles.sidebar}>
            </motion.div>

            <div className={styles.home}>
                <h1 style={{fontSize: 30}}>Hello! Thank you for the visit.</h1>
                <span style={{color: '#9900b1', fontWeight: 'bold', fontSize: 20, fontStyle: 'italic'}}>
                    <Typewriter 
                    loop
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    words={['Sorry for the inconvenience.', 'I am still building my portfolio.', 'Under development. Please visit my website again next time!']}/>
                </span>
            </div>


            <div className={styles.info}>
                <motion.h1 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ duration: 1.5}} id={styles.firsth1}>Greetings, fellow struggler.</motion.h1>
                <motion.h1 initial={{opacity: 0, y: 150}} animate={{opacity: 1, y: 0}} transition={{ duration: 1.5}}  id={styles.secondh1}>John Patrick</motion.h1>
                <motion.section initial={{opacity: 0, y: 200}} animate={{opacity: 1, y: 0}} transition={{ duration: 1.5}}>
                  <motion.h1 whileHover={{scale: 1.08}} id={styles.thirdh1}>Suguitan</motion.h1>
                </motion.section>
                <motion.h1 initial={{opacity: 0, y: 250}} animate={{opacity: 1, y: 0}} transition={{ duration: 1.5}}  id={styles.fourthh1}>Aspiring Software Engineer</motion.h1>
                <motion.p initial={{opacity: 0, y: 300}} animate={{opacity: 1, y: 0}} transition={{ duration: 1.5}}  id={styles.intro}>Hey there! pleased to meet you, nice of you to look at my web portfolio. Thank you! I enjoy making web applications and other projects on my free time. Also, currently enhancing my backend skills.</motion.p>
                <motion.section 
                    initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4}}>
                    <Button as={motion.div} whileHover={{color: '#9900b1', scale: 1.1, transition: {duration: 0.1}}} whileTap={{ scale: 0.9 }} cursor='pointer' p={7} pl={5} pr={5} mt={3} colorScheme='' variant='outline'>
                        Get in touch!
                    </Button>
                    <Button as={motion.div} whileHover={{color: '#9900b1', scale: 1.1, transition: {duration: 0.1}}} whileTap={{ scale: 0.9 }} cursor='pointer' p={7} pl={5} pr={5} ml={3} mt={3} leftIcon={<DownloadIcon />} colorScheme='' variant='outline'>
                        Resume
                    </Button>
                </motion.section>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4}} id={styles.icons}>
                    <motion.a whileHover={{color: '#9900b1'}} animate={{rotate: 360}} href="">
                        <i className='bi bi-instagram'></i>
                    </motion.a>
                    <motion.a whileHover={{color: '#9900b1'}} href="">
                        <i className='bi bi-linkedin'></i>
                    </motion.a>
                    <motion.a whileHover={{color: '#9900b1'}} href="">
                        <i className='bi bi-github'></i>
                    </motion.a>
                </motion.div>
            </div>
        </div>
     );
}