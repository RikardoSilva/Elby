import React from 'react'
import '../styles/cards.css'

function Card({ icon, title, content }) {
    return (
        <div className='card'>
            {icon}
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default Card
