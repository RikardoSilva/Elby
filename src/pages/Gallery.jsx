import React from 'react'
import '../styles/gallery.css'

function Gallery() {

    const cakes = [
        { img: '/images/BoloAnaFilipa.jpg', name: 'Bolo personalizado' },
        { img: '/images/BoloArtur.jpg', name: 'Bolo temático' },
        { img: '/images/BoloCerveja.jpg', name: 'Bolo chocolate' }
    ]

    const desserts = [
        { img: '/images/BoloEmilly.jpg', name: 'Cheesecake' },
        { img: '/images/BoloEva.jpg', name: 'Mousse' },
        { img: '/images/BoloJackDaniels.jpg', name: 'Tarte' }
    ]

    return (
        <section className='gallery-page'>

            <h1 className="gallery-title">Galeria</h1>

            {/* BOLOS */}
            <div className="gallery-section">
                <h2>Bolos</h2>

                <div className="gallery-grid">
                    {cakes.map((item, index) => (
                        <div key={index} className="gallery-card">
                            <img src={item.img} alt={item.name} className='gallery-card-img' />
                            <span className="gallery-label">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* SOBREMESAS */}
            <div className="gallery-sectiion">
                <h2>Sobremesas</h2>

                <div className="gallery-grid">
                    {desserts.map((item, index) => (
                        <div key={index} className="gallery-card">
                            <img src={item.img} alt={item.name} className='gallery-card-img' />
                            <span className="gallery-label">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Gallery
