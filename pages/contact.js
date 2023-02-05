import Head from "next/head"
import { useState } from "react"
import styles from '../styles/Contact.module.css'
import Link from "next/link"

export default function Contact() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    return (
        <>
            <Head>
                <title>Contact Us</title>
                <meta name='author' content='MDIA 2109' />
                <meta property="og:title" content="Assignment #1 - Contact Us Page" />
                <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className={styles.main}>
                <div>
                    <h1 className={styles.h1}>
                        Contact Us
                    </h1>
                </div>
                <div>
                    <p>
                        Want to discuss? Let's chat!
                    </p>
                </div>
                <div>
                    <form>
                        <fieldset>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>
                                        <label>First name</label>
                                        <input
                                            type="text"
                                            placeholder="First name here"
                                            value={firstName}
                                            onChange={e => setFirstName(e.target.value)}
                                            pattern="^[A-Z]"
                                        />
                                    </td>
                                    <td>
                                        <label>Last name</label>
                                        <input
                                            type="text"
                                            placeholder="Last name here"
                                            value={lastName}
                                            onChange={e => setLastName(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <thead>
                                    <tr>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            placeholder="Email here"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </td>
                                </tr>
                            </table>
                        </fieldset>
                    </form>
                </div>
                <div>
                    {
                        firstName
                    }
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