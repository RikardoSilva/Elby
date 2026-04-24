import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { BiHomeHeart, BiSolidMagicWand } from 'react-icons/bi'
import { TbTruckDelivery } from 'react-icons/tb'
import Cards from '../components/Cards'
import Card from '../components/Card'
import '../styles/about.css'

function FAQItem({ index, title, body, activeIndex, setActiveIndex }) {
    const isOpen = activeIndex === index

    const toggle = () => {
        setActiveIndex(isOpen ? null : index)
    }

    return (
        <div className={`faq-item ${isOpen ? "open" : ""}`}>
            <button onClick={toggle} className='faq-title'>
                <span>{title}</span>
                <span className="arrow">
                    <FiChevronDown size={25} />
                </span>
            </button>

            <div className='faq-body'>
                <p>{body}</p>
            </div>
        </div>
    )
}

function About() {
    const [activeIndex, setActiveIndex] = useState(null)

    return (
        <>
            <section className="about">
                <h1>Sobre a Elby</h1>
                <p>
                    Nascida em 2021, a Elby nasceu da paixão pela pastelaria caseira e pelo prazer de criar bolos que sabem a amor e que
                    fazem parte de momentos especiais!
                </p>

                <Cards section={"Como trabalhamos"}>
                    <Card
                        icon={<BiSolidMagicWand size={28} />}
                        title="Planeamos sobre sabores e detalhes"
                        content="Aquando do seu pedido, perguntamos pelos detalhes que pretende para o seu bolo,
                        de maneira que fique a seu gosto, a nível de estética, como a nível de uma mistura de 
                        sabores muito deliciosos."
                    />

                    <Card
                        icon={<BiHomeHeart size={28} />}
                        title="Produzimos artesanalmente"
                        content="Toda a nossa pastelaria é feita artesanalmente sempre virada para o 
                    gosto do cliente com ingredientes saborosos."
                    />

                    <Card
                        icon={<TbTruckDelivery size={28} />}
                        title="Entrega ou recolha a combinar"
                        content="Após todos os detalhes acertados, o cliente decide como e onde quer que seja a entrega.
                    Tenha em atenção que se pretende que levemos o seu pedido até si, terá um custo extra, dependendo 
                    da sua localização."
                    />

                </Cards>

                <div className="faq-content">
                    <h2>Dúvidas Frequentes</h2>
                    <FAQItem
                        index={0}
                        title="Como funcionam as entregas?"
                        body="As entregas são feitas na Rua Fonte da Saraiva (estrada ao lado da saída de Câmara de Lobos, 
                        sentido Ribeira Brava-Funchal, onde se localiza o antigo Nicos). Podemos também combinar um local à sua escolha,
                        se nos for possível, e mediante um custo extra, a avaliar dependendo do local escolhido."
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />

                    <FAQItem
                        index={1}
                        title="Como posso fazer o meu pedido?"
                        body="Você pode nos contactar diretamente pelas redes sociais, pesquisando por Elby, ou diretamente pelo contacto
                        +351 936 543 245, via WhatsApp."
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />

                    <FAQItem
                        index={2}
                        title="Fazem produtos personalizados?"
                        body="Sim, fazemos bolos personalizados conforme o seu gosto, como bolos em andares (em esferovite ou em bolo), 
                        trabalhos em pasta de açúcar, toppers, pastelaria fina como Macarrons, Cookies, entre muitas outras.
                        Veja o separador 'Menu' para saber mais detalhes sobre os produtos que realizamos."
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />

                    <FAQItem
                        index={3}
                        title="Como posso fazer o pagamento?"
                        body="O pagamento é feito em dinheiro aquando da entrega, ou via MBWay (tenha em atenção que esta última opção
                        depende dos limites do mês recorrente)."
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />
                </div>
            </section>
        </>
    )
}

export default About
