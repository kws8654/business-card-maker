import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import styles from './Login.module.css'

function Login({ authService }) {
    const onLogin = (e) => {
        authService
            .login(e.currentTarget.textContent)
            .then(console.log)
    };
    return (
        <section className={styles.login}>
            <Header />
            <section>
                <h1>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            Google
                        </button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            Github
                        </button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    )
}

export default Login
