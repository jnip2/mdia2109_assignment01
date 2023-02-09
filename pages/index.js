import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navigation from "../Components/Navigation"


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
        <Navigation />
        <div className={styles.content__container}>
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
          <div className={styles.arrow__container}>
            <Link href='/'>
              <span>
                <Image height={40} width={30} src="/icons/downwardArrow.png" />
              </span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
