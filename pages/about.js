import Head from "next/head"
import Link from "next/link"
import styles from '../styles/About.module.css'
import Image from "next/image"
import Navigation from "../Components/Navigation"
import data from "../data/words.json"
import { useState, useEffect } from "react"

export default function About() {
    const [number, setNumber] = useState(0)
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        let interval

        if (trigger) {
            interval = setInterval(() => {
                setTrigger(false)
            }, 500)
        }
        console.log(number)
        console.log(trigger)
        return () => clearInterval(interval)
    }, [trigger])

    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name='author' content='MDIA 2109' />
                <meta property="og:title" content="Assignment #1 - About Us Page" />
                <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className={styles.main}>
                <Navigation />
                <div>
                    <h1 className={styles.header}>
                        About Us
                    </h1>
                </div>
                <div>
                    <p>
                        We are proud to deliver an education that goes beyond textbooks and classrooms.
                    </p>
                    <p>
                        Our students gain the technical skills, real-world experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.
                    </p>
                    <p>
                        Through close collaboration with industry, our network of alumni and partners continue to achieve global success.
                    </p>
                </div>
                <div>
                    <h2>
                        Information Sessions
                    </h2>
                    <p>
                        Information sessions are a simple way to figure out the next step along your career path. Learn more about the programs that interest you.
                    </p>
                </div>
                <div>
                    <h3>
                        Big Info
                    </h3>
                    <p>
                        Big Info is the largest program expo and information session at BCIT. It's your chance to find out all about our programs - from business, computing, and health to engineering, trades, and applied sciences.
                    </p>
                    <p>
                        If you missed our fall event the next Big Info session is scheduled to return February 15, 2023.
                    </p>
                </div>
                <div>
                    <h2>
                        Campus Tours
                    </h2>
                </div>
                <div>
                    <p>
                        Tours run weekdays from September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life.
                    </p>
                </div>

                <div id="carouselImage" className={styles.carousel__container}
                    style={{
                        height: "200px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "40px 0px",
                        backgroundImage: `url(./carousel-images/${number}.jpg)`
                    }}>
                        <Image height={30} width={40} src="/icons/leftArrow.png" 
                            onClick={() => {
                                setNumber((number - 1) % 5)
                                setTrigger(true)
                            }
                            }
                        />
                        <div id="testOnImageHere"
                            style={{
                                backgroundColor: "var(--quinary-color)",
                                padding: "10px",
                                margin: "0px 50px"
                            }}>
                            {data[number % 5].value}
                        </div>
                        <Image height={30} width={40} src="/icons/rightArrow.png"
                            onClick={() => {
                                setNumber((number + 1) % 5)
                                setTrigger(true)
                            }}
                        />
                    </div>

                <div>
                        DEPARTMENTS
                </div>

                <ul className={styles.departments__list}>
                    <li>Applied & Natural Sciences</li>
                    <li>Business & Media</li>
                    <li>Computing & IT</li>
                    <li>Engineerin</li>
                    <li>Health Sciences</li>
                    <li>Trades & Apprenticeships</li>
                </ul>
                <a>
                    <span>
                        <div className={styles.arrow__container}>
                            <Link href='#top'>
                                <span>
                                    <Image height={40} width={30} src="/icons/upwardArrow.png"/>
                                </span>
                            </Link>
                            <Link href='#top'>
                                <span>
                                    <Image height={40} width={30} src="/icons/downwardArrow.png"/>
                                </span>
                            </Link>
                        </div>
                    </span>
                </a>
            </main>
        </>
    )
}