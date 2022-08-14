import Head from 'next/head'
import styles from '../styles/Projects.module.css'
import { motion } from 'framer-motion'


export default function Projects() {
  return (
    <>
        <Head>
            <title>JP | Suguitan</title>
        </Head>
        <div className={styles.content}>
            <div id='projects' className={styles.project}>
                <motion.h1 animate={{color: 'blue'}}>Projects</motion.h1>
            </div>
        </div>
    </>
  )
}
