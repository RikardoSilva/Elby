import React from 'react'
import { PiWarning } from 'react-icons/pi'
import '../styles/orders.css'

function Orders() {
    const googleMapsKey = import.meta.env.VITE_GOOGLE_MAPS_KEY
    return (
        <section className="orders">
            <div className="orders-hero">
                <h1>Encomendas</h1>
                <p>
                    Fale connosco para encomendas personalizadas, datas e mais informações.
                </p>
                <a
                    href="https://www.instagram.com/__elby___/"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='orders-btn'
                >
                    Encomendar no Instagram
                </a>
            </div>

            <div className="orders-content">
                <div className="orders-info">
                    <h2>Como Funciona</h2>
                    <ol>
                        <li>Escolha o tipo de bolo ou produto que quer</li>
                        <li>Indique sabores, tamanho (quantas pessoas), extras e a data</li>
                        <li>Envie uma imagem como referência visual</li>
                        <li>Respondemos logo que possível com a confirmação da encomenda e disponibilidade</li>
                    </ol>
                    <div className="orders-warning">
                        <PiWarning
                           size={40}
                           color='#a85c4d' 
                        />
                        <p>
                            Por favor tenha em atenção que recomendamos que nos contacte no mínimo 48 horas antes para termos
                            a certeza que há disponibilidade na nossa agenda!
                        </p>
                    </div>

                    <h2>Localização</h2>
                    <p>Câmara de Lobos, Madeira</p>
                    <p>
                        Entregas e recolhas mediante disponibilidade e confirmação
                    </p>
                </div>

                <div className="orders-map">
                    <iframe
                        title='Localização Elby'
                        width='100%'
                        height='100%'
                        style={{ border: 0 }}
                        loading='lazy'
                        allowFullScreen
                        referrerPolicy='no-referrer-when-downgrade'
                        src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsKey}&q=32.657370, -16.973339&zoom=17                                                        `}
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Orders
