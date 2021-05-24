import React from 'react'
import './Button.css'
const Button = (props) => {
    return (
        <div className={`button ${ props.imp==='secondary' ? 'btn_white' : '' }`}>
            <a href={props.link}>{props.text}</a>
        </div>
    )
}

export default Button
