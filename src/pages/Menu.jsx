import React from 'react'
import '../styles/menu.css'
import { useState } from 'react'

function Menu() {
    const [openMenu, setOpenMenu] = useState("")

    const toggleMenu = (menuName) => {
        setOpenMenu((prev) => (prev === menuName ? null : menuName))
    }
    return (
        <section className="menu">
            <h1 className="menu-title">O Nosso Menu</h1>

            <div className="menu-wrapper">
                {/* Menu Principal */}
                <div className="menu-main-list">
                    <button
                        className={`menu-main-item ${openMenu === "bolos" ? "active" : ""}`}
                        onClick={() => toggleMenu("bolos")}>
                        Bolos
                    </button>

                    <button
                        className={`menu-main-item ${openMenu === "brigadeiros" ? "active" : ""}`}
                        onClick={() => toggleMenu("brigadeiros")}>
                        Brigadeiros
                    </button>

                    <button
                        className={`menu-main-item ${openMenu === "diversos" ? "active" : ""}`}
                        onClick={() => toggleMenu("diversos")}>
                        Diversos
                    </button>

                    <button
                        className={`menu-main-item ${openMenu === "sobremesas" ? "active" : ""}`}
                        onClick={() => toggleMenu("sobremesas")}>
                        Sobremesas
                    </button>
                </div>

                {/* Conteúdo */}
                <div className="menu-content">
                    {openMenu === "bolos" && (
                        <div className="menu-panel">
                            <div className="menu-subgroup">
                                <h2>Massas</h2>
                                <ul className='menu-grid-list menu-grid-list--two'>
                                    <li>Bolo chocolate/Filadélfia e côco</li>
                                    <li>Bolo iogurte</li>
                                    <li>Bolo mármore</li>
                                    <li>Bolo xadrez</li>
                                    <li>Bolo laranja</li>
                                    <li>Bolo chocolate</li>
                                    <li>Bolo red velvet</li>
                                    <li>Bolo Lima/limão</li>
                                    <li>Bolo caramelo</li>
                                    <li>Bolo baunilha</li>
                                    <li>Bolo cenoura</li>
                                    <li>Bolo noz</li>
                                    <li>Bolo pão de ló</li>
                                </ul>
                            </div>

                            <div className="menu-subgroup">
                                <h2>Recheios</h2>
                                <ul className='menu-grid-list menu-grid-list--two'>
                                    <li>Creme Filadélfia e Lima</li>
                                    <li>Creme Filadélfia com baunilha</li>
                                    <li>Creme brigadeiro</li>
                                    <li>Creme pasteleiro de baunilha</li>
                                    <li>Creme pasteleiro de caramelo</li>
                                    <li>Ganache de Oreo</li>
                                    <li>Ganache montada de chocolate de leite</li>
                                    <li>Ganache montada de chocolate negro</li>
                                    <li>Doce de ovos</li>
                                    <li>Compota de morango</li>
                                </ul>
                            </div>

                            <div className="menu-subgroup">
                                <h2>Extras</h2>
                                <ul className="menu-grid-list menu-grid-list--two">
                                    <li>Topper</li>
                                    <li>Macarrons</li>
                                    <li>Brigadeiros</li>
                                    <li>Flores</li>
                                    <li>Trabalho em pasta de açúcar</li>
                                    <li>Drip</li>
                                    <li>Suspiros</li>
                                    <li>Chocolates</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {openMenu === 'brigadeiros' && (
                        <div className="menu-panel">
                            <div className="menu-subgroup">
                                <h2>Brigadeiros</h2>
                                <ul className="menu-grid-list menu-grid-list--three">
                                    <li>Brigadeiro de Kinder</li>
                                    <li>Brigadeiro de Oreo</li>
                                    <li>Brigadeiro de chocolate negro</li>
                                    <li>Brigadeiro de chocolate branco</li>
                                    <li>Brigadeiro de caramelo salgado</li>
                                    <li>Brigadeiro de M&M'S</li>
                                    <li>Brigadeiro de côco</li>
                                    <li>Brigadeiro de Lima/limão</li>
                                    <li>Brigadeiro de filipinos</li>
                                    <li>Brigadeiro de Pistachio/Lima/hortelã</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {openMenu === "diversos" && (
                        <div className="menu-panel">
                            <div className="menu-subgroup">
                                <h2>Donuts</h2>
                                <ul className="menu-grid-list menu-grid-list--two">
                                    <li>Oreo</li>
                                    <li>Kinder</li>
                                    <li>Nutella</li>
                                    <li>M&M'S</li>
                                </ul>
                            </div>

                            <div className="menu-subgroup">
                                <h2>Brownie</h2>
                                <ul className="menu-grid-list menu-grid-list--two">
                                    <li>Cobertura Oreo</li>
                                    <li>Cobertura Brigadeiro</li>
                                    <li>Cobertura Doce de Leite</li>
                                </ul>
                            </div>

                            <div className="menu-subgroup">
                                <h2>Macarrons</h2>
                                <ul className="menu-grid-list menu-grid-list--three">
                                    <li>Recheio de Oreo</li>
                                    <li>Recheio de Brigadeiro</li>
                                    <li>Recheio de Doce de Leite</li>
                                    <li>Recheio de Pistachio</li>
                                    <li>Recheio de Côco</li>
                                    <li>Recheio de Chocolate Branco</li>
                                    <li>Recheio de Nutella</li>
                                    <li>Recheio de Baunilha</li>
                                    <li>Recheio de Chocolate de Leite</li>
                                </ul>
                            </div>

                            <div className="menu-subgroup">
                                <h2>Corações Recheados</h2>
                                <ul className="menu-grid-list menu-grid-list--three">
                                    <li>Recheio de Oreo</li>
                                    <li>Recheio de Brigadeiro</li>
                                    <li>Recheio de Doce de Leite</li>
                                    <li>Recheio de Pistachio</li>
                                    <li>Recheio de Côco</li>
                                    <li>Recheio de Chocolate Branco</li>
                                    <li>Recheio de Nutella</li>
                                </ul>
                            </div>

                            <div className="menu-subgroup">
                                <h2>Cones</h2>
                                <ul className="menu-grid-list menu-grid-list--two">
                                    <li>Oreo</li>
                                    <li>M&M'S</li>
                                </ul>
                            </div>

                            <div className="menu-subgroup">
                                <h2>Lolipop</h2>
                                <ul className="menu-grid-list menu-grid-list--two">
                                    <li>Chocolate Negro</li>
                                    <li>Chocolate Branco</li>
                                    <li>Chocolate Baunilha</li>
                                    <li>Chocolate Nutella</li>
                                    <li>Chocolate Oreo</li>
                                </ul>
                            </div>

                            <div className="menu-subgroup">
                                <h2>Outros</h2>
                                <ul className="menu-grid-list menu-grid-list--two">
                                    <li>Bolacha decorada com pasta de açúcar</li>
                                    <li>Cookies</li>
                                    <li>Cupcakes</li>
                                    <li>Bolacha simples</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {openMenu === "sobremesas" && (
                        <div className="menu-panel">
                            <div className="menu-subgroup">
                                <h2>Sobremesas</h2>
                                <ul className="menu-grid-list menu-grid-list--two">
                                    <li>Cheesecake Manga</li>
                                    <li>Cheesecake Oreo</li>
                                    <li>Cheesecake Maracujá</li>
                                    <li>Cheesecake Morango</li>
                                    <li>Mousse Manga</li>
                                    <li>Mousse Chocolate</li>
                                    <li>Mousse Oreo</li>
                                    <li>Mousse Maracujá</li>
                                    <li>Tarte de Natas</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Menu
