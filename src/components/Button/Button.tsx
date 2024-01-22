import React from 'react'
import style from './Button.module.css'

interface ButtonProps {
  label: string
}

export const Button = (props: ButtonProps): JSX.Element => {
  return <button className={style.button}>{props.label}</button>
}
