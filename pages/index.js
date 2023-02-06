import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Contact from './contact'
import About from './about'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.text__container}>
          <h1 className={`${styles.h1}`}>An investment in knowledge pays the best interest.</h1>
          <hr className={styles.hr} />
          <p>
            Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.
          </p>
          <Link href='/about'>
            <button className={styles.button}>
              More About Us
            </button>
          </Link>
          <Link href='/contact'>
            <button className={styles.button}>
              Contact Us
            </button>
          </Link>
        </div>
        <Link href='/'>
          <span>
            <img></img>
          </span>
        </Link>

      </main>

    </>
  )
}
