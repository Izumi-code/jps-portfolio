import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/button'
import styles from '../styles/Home.module.css'
import NextLink from 'next/link'
import { DownloadIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Button, Switch, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import {motion} from 'framer-motion'

const DarkModeSwitch = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
    return ( 
        // <motion.nav
        //             initial={{y: -100}}
        //             animate={{y: 0}}
        //             transition={{duration: 1.5}}
        //             className={styles.navbar}>
                        
        //                     <NextLink href="#home" className={styles.hoverUnderline}>Home</NextLink>
        //                     <NextLink href='#projects'><a className={styles.hoverUnderline}>Projects</a></NextLink>
        //                     <NextLink href="/" className={styles.hoverUnderline}>About</NextLink>
        //                     <NextLink href="/" className={styles.hoverUnderline}>Contact</NextLink>
                        
        //                 <button onClick={toggleColorMode}>
        //             { colorMode === 'light' ? <SunIcon/> :          <MoonIcon/> }
        //                 </button>
        // </motion.nav>

        <motion.nav initial={{y: -100}}
                 animate={{y: 0}}
                 transition={{duration: 1.5}}
                 className={styles.navbar}>
                    <Flex>
            <Flex
                position="relative"
                align="center"
            >
                {/* Desktop */}
                <Flex
                display={['none', 'none', 'flex','flex']}
                >
                <NextLink href="#home" className={styles.hoverUnderline}>Home</NextLink>
                            <NextLink href='#projects'><a className={styles.hoverUnderline}>Projects</a></NextLink>
                            <NextLink href="/" className={styles.hoverUnderline}>About</NextLink>
                            <NextLink href="/" className={styles.hoverUnderline}>Contact</NextLink>
                </Flex>

                {/* Mobile */}
                <IconButton
                aria-label="Open Menu"
                size="lg"
                mr={2}
                icon={
                    <HamburgerIcon />
                }
                onClick={() => changeDisplay('flex')}
                display={['flex', 'flex', 'none', 'none']}
                />
                <button onClick={toggleColorMode}>
                    { colorMode === 'light' ? <SunIcon/> :    <MoonIcon/> }
                </button>
                {/* <Switch
                    id='switch'
                    color="green"
                    isChecked={isDark}
                    onChange={toggleColorMode}
                /> */}
            </Flex>

            {/* Mobile Content */}
            <Flex
                pos='fixed'
                w='100%'
                display={display}
                bgColor="#e0e0e0"
                zIndex={20}
                h="100vh"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
                ps={80}
            >
                <Flex justify="flex-end">
                <IconButton
                    mt={2}
                    mr={2}
                    aria-label="Open Menu"
                    size="lg"
                    color='black'
                    icon={
                    <CloseIcon />
                    }
                    onClick={() => changeDisplay('none')}
                />
                </Flex>

                <Flex
                flexDir="column"
                align="center"
                >
                <NextLink href="/" passHref>
                    <Button
                    as="a"
                    variant="ghost"
                    aria-label="Home"
                    my={5}
                    w="100%"
                    color='black'
                    >
                    Home
                            </Button>
                </NextLink>

                <NextLink href="/about" passHref>
                    <Button
                    as="a"
                    variant="ghost"
                    aria-label="Projects"
                    my={5}
                    w="100%"
                    color='black'
                    >
                    Projects
                            </Button>
                </NextLink>

                <NextLink href="/contact" passHref>
                    <Button
                    as="a"
                    variant="ghost"
                    aria-label="About"
                    my={5}
                    w="100%"
                    color='black'
                    >
                    About
                    </Button>
                </NextLink>

                <NextLink href="/contact" passHref>
                    <Button
                    as="a"
                    variant="ghost"
                    aria-label="Contact"
                    my={5}
                    w="100%"
                    color='black'
                    >
                    Contact
                    </Button>
                </NextLink>

                </Flex>
            </Flex>
            </Flex>
        </motion.nav>
     );
}
 
export default DarkModeSwitch;