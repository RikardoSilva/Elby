import React from 'react'
import '../styles/cards.css'

function Cards({ section, children }) {
    return (
        <div>
            <section className="main-card">
                <h2>{section}</h2>

                <div className="cards">
                    {children}
                </div>
            </section>
        </div>
    )
}

export default Cards
