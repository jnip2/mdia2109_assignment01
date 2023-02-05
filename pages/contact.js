import Head from "next/head"
import { useState } from "react"
import styles from '../styles/Contact.module.css'
import Link from "next/link"
import Image from "next/image"

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
                <div className={styles.content__container}>
                    <div className={styles.page__navbar}>
                        <Image width={40} height={30} src="/icons/menu-icon.png" />
                        <Image width={40} height={30} src="/icons/graduation-hat.png" />
                    </div>
                    <div className={styles.page__header}>
                        <div className={styles.header__text}>
                            <hr className={styles.header__hr} />
                            <h1 className={styles.h1}>
                                Contact Us
                            </h1>
                            <hr className={styles.header__hr} />
                        </div>
                        <p className={styles.page__description}>
                            Want to discuss? Let's chat!
                        </p>
                    </div>
                    <div className={styles.page__form}>
                        <div className={styles.form__box}>
                            <form>
                                <fieldset className={`${styles.border} ${styles.form__size}`}>
                                    <table className={styles.table__layout}>
                                        <thead>
                                            <tr>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tr className={styles.row__layout}>
                                            <td className={styles.input__layout}>
                                                <label className={styles.form__label}>First name:</label>
                                                <input
                                                    type="text"
                                                    placeholder="First name here"
                                                    value={firstName}
                                                    onChange={e => setFirstName(e.target.value)}
                                                    pattern="^[A-Z]"
                                                />
                                            </td>
                                            <td className={styles.input__layout}>
                                                <label className={styles.form__label}>Last name:</label>
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
                                            <td className={styles.input__layout}>
                                                <label className={styles.form__label}>Email:</label>
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
                    </div>
                    <div className={styles.belowform__container}>
                        <div className={styles.errorMessage__container}>
                            {
                                firstName.length > 0 && !/^[A-Z]/.test(firstName) || firstName.length > 0 && /[0-9]{1,}/.test(firstName) ? <div className={styles.errorMessage}>First name error. First letter must be capital. Must use alphabets only.</div> : <></>
                            }
                            {
                                lastName.length > 0 && !/^[A-Z]/.test(lastName) || lastName.length > 0 && /[0-9]{1,}/.test(lastName) ? <div className={styles.errorMessage}>Last name error. First letter must be capital. Must use alphabets only.</div> : <></>
                            }
                            {
                                email.length > 0 && !/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) ? <div className={styles.errorMessage}>Email is invalid</div> : <div></div>
                            }
                        </div>
                        <div className={styles.arrow__container}>
                            <Link href='#top'>
                                <span>
                                    <Image height={40} width={40} src="/icons/upwardArrow.png" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}