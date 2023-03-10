import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import {Navbar} from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Contact Page</h1>
      <Navbar/>
      
      <main className={styles.main}>
       <h1 className={styles.title}>
        Ir a  
        <Link href="/">  
           Home
        </Link>
       </h1>

      </main>
    </>
  )
}
