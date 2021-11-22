import React from 'react'
import CardEditForm from '../cardEditForm/CardEditForm'
import styles from './Editor.module.css'

function Editor({ cards }) {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            {cards.map(card => (
                <CardEditForm card={card} />
            ))}
        </section>
    )
}

export default Editor
