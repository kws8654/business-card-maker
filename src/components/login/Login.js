import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import styles from './Login.module.css'

function Login({ authService }) {
    const navigate = useNavigate();
    const location = useLocation();

    const goToMaker = (userId) => {
        navigate(
            "/maker",
            { id: userId, });
    };

    const onLogin = (e) => {
        authService
            .login(e.currentTarget.textContent)
            .then(data => goToMaker(data.user.uid));
    };

    useEffect(() => {
        authService
            .onAuthChange(user => {
                user && goToMaker(user.id);
            });
    });

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
