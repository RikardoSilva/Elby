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

                    <h2>Preços</h2>
                    <div className="prices-grid">
                        <div className="price-item">
                            <span>Entrega</span>
                            <strong>Recolha gratuita</strong>
                            <strong>Entregas em toda a ilha da Madeira, mediante disponibilidade. O valor
                                será calculado consoante a distância.
                            </strong>
                        </div>
                        <div className="price-item">
                            <span>Bolos personalizados</span>
                            <strong>€20/Kg</strong>
                        </div>

                        <div className="price-item">
                            <span>Brigadeiros</span>
                            <strong>Sob consulta</strong>
                        </div>

                        <div className="price-item">
                            <span>Sobremesas</span>
                            <strong>Sob consulta</strong>
                        </div>

                        <div className="price-item">
                            <span>Diversos</span>
                            <strong>Sob consulta</strong>
                        </div>
                    </div>

                    <p className="prices-note">
                        * Os valores podem variar conforme o tamanho, decoração, quantidade, personalização e entrega.
                    </p>

                    <h2>Localização</h2>
                    <p>Câmara de Lobos, Madeira</p>
                    <p>
                        Entregas e recolhas mediante disponibilidade e confirmação
                    </p>

                    <div className="orders-map">
                        <iframe
                            title='Localização Elby'
                            width='100%'
                            height='100%'
                            style={{ border: 0 }}
                            loading='lazy'
                            allowFullScreen
                            referrerPolicy='no-referrer-when-downgrade'
                            src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsKey}&q=32.657370, -16.973339&zoom=17`}></iframe>
                    </div>

                    <h2>Horários das entregas</h2>
                    <div className="delivery-hours">
                        <div className="delivery-item">
                            <span>Segunda a Sábado</span>
                            <strong>09:00 - 19:00</strong>
                        </div>

                        <div className="delivery-item">
                            <span>Domingos</span>
                            <strong>09:00 - 13:00</strong>
                        </div>

                        <p className="delivery-note">
                            * Horários sujeitos a alterações e confirmação no momento da encomenda.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Orders
