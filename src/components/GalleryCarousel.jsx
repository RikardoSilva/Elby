import { useState } from 'react'
import "../styles/gallerycarousel.css"

function GalleryCarousel() {

    const itemsPerPage = 3
    const [direction, setDirection] = useState('next')

    const images = [
        '/images/BoloAnaFilipa.jpg',
        '/images/BoloArtur.jpg',
        '/images/BoloCerveja.jpg',
        '/images/BoloEmilly.jpg',
        '/images/BoloEva.jpg',
        '/images/BoloJackDaniels.jpg',
        '/images/BoloMartim.jpg',
        '/images/BoloMoana.jpg',
        '/images/BoloOhBaby.jpg'
    ]

    const [startIndex, setStartIndex] = useState(0)

    const totalPages = Math.ceil(images.length / itemsPerPage)

    const handlePrev = () => {
        setDirection('next')
        setStartIndex(prev => prev === 0 ? images.length - 1 : prev - 1)
    }

    const handleNext = () => {
        setDirection('prev')
        setStartIndex(prev => prev === images.length - 1 ? 0 : prev + 1)
    }

    return (
        <>
            <div className='gallery-container'>
                {/* Botão Previous */}
                <button className="arrow left" onClick={handlePrev}>
                    &lt;
                </button>

                {/* Lógica Galeria */}
                <div className="gallery-row">
                    <div
                        key={startIndex}
                        className={`gallery-slide slide-${direction}`}
                    >
                        {Array.from({ length: itemsPerPage }).map((_, i) => {
                            const imgIndex = (startIndex + i) % images.length
                            return (
                                <img
                                    key={imgIndex}
                                    src={images[imgIndex]}
                                    alt={`img-${imgIndex}`}
                                    className='gallery-img'
                                />
                            )
                        })}
                    </div>
                </div>

                {/* Botão Next */}
                <button className="arrow right" onClick={handleNext}>
                    &gt;
                </button>
            </div>

            <div className="gallery-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === startIndex ? 'active' : ''}`}
                        onClick={() => setStartIndex(index)}
                    />
                ))}
            </div>
        </>
    )
}

export default GalleryCarousel
