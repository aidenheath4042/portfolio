import "../button/button.scss"
import React from "react";

export default function Button({ variant, large, label, fullWidth, onClick, disabled, type, small }){

    const btnClassName = [
        'btnBaseStyle',
        variant,
        fullWidth,
        large,
        small,
    ].join(' ');


    return(

    <input className={btnClassName} onClick={onClick} disabled={disabled} type={type} value={label}></input>
)};