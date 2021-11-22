import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import styles from './Maker.module.css'
import Editor from '../editor/Editor'
import Preview from '../preview/Preview'

function Maker({ authService }) {

    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'Ray',
            company: 'Dell',
            theme: 'light',
            title: 'FE Developer',
            email: 'kws8654@gmail.com',
            message: 'Go for it',
            fileName: 'ray',
            fileURL: null
        },
        {
            id: '2',
            name: 'Ray',
            company: 'Dell',
            theme: 'dark',
            title: 'FE Developer',
            email: 'kws8654@gmail.com',
            message: 'Go for it',
            fileName: 'ray',
            fileURL: 'ray.png'
        },
        {
            id: '3',
            name: 'Ray',
            company: 'Dell',
            theme: 'colorful',
            title: 'FE Developer',
            email: 'kws8654@gmail.com',
            message: 'Go for it',
            fileName: 'ray',
            fileURL: null
        }
    ])

    const navigate = useNavigate();

    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                navigate('/');
            }
        });
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Preview cards={cards} />
                <Editor cards={cards} />
            </div>
            <Footer />
        </section>
    );
}


export default Maker
