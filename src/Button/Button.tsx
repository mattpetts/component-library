import React from "react";
import style from './Button.module.css'

export interface ButtonProps {
    label: string;
    handleClick: () => void;
}

export const Button = (props: ButtonProps) => {
    return <button className={style.button} onClick={() => props.handleClick()}>{props.label}</button>;
};
