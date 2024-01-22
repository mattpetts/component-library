import React from 'react'
import styles from './Card.module.css'

interface CardProps {
  children: React.ReactNode
}

export const Card = (props: CardProps): JSX.Element => {
  return (
    <article className={styles.card}>
        {props.children}
    </article>
  )
}
