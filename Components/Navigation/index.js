import styles from './Navigation.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"


export default function Navigation() {
    const [boolean, setBoolean] = useState(false)

    return (
        <>
            <div className={styles.page__navbar}>
                <Image width={40} height={30} src="/icons/menu-icon.png"
                    onClick={() => {
                        if (boolean) {
                            setBoolean(false)
                        } else {
                            setBoolean(true)
                        }
                    }}
                />
                <Image width={40} height={30} src="/icons/graduation-hat.png" />
            </div>

            {
                boolean ?
                    <div className={styles.popup__container}>
                        <h1
                            onClick={() => {
                                if (boolean) {
                                    setBoolean(false)
                                } else {
                                    setBoolean(true)
                                }
                            }}>X</h1>
                        <ul className={styles.popup__components}>
                            <li>
                                <Link className={styles.popup__link} href="/">Home</Link>
                            </li>
                            <li>
                                <Link className={styles.popup__link} href="/about">About</Link>
                            </li>
                            <li>
                                <Link className={styles.popup__link} href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div> : <></>
            }

        </>
    )
}