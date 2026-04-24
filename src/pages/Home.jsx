import { FaBirthdayCake, FaHeart, FaBox } from 'react-icons/fa'
import '../styles/home.css'
import Cards from '../components/Cards'
import Card from '../components/Card'
import GalleryCarousel from '../components/GalleryCarousel'

function Home() {

    return (
        <>
            <section className="home">
                <h1>Bem-vindo(a) à Elby</h1>
                <div style={{ padding: '1rem' }}>
                    <h2>Bolos artesanais feitos à mão</h2>
                    <p>Bolos caseiros, receitas tradicionais e sabores autênticos, feitos por encomenda em Câmara de Lobos,
                        com ingredientes frescos e receitas tradicionais,
                        à distância de uma mensagem.</p>
                </div>

                <GalleryCarousel />

                <Cards section={"Quais os nossos serviços"}>
                    <Card
                        icon={<FaBirthdayCake size={28} />}
                        title="Bolos personalizados"
                        content="Criamos bolos por encomenda, adaptados ao seu gosto, ocasião e preferências."
                    />

                    <Card
                        icon={<FaHeart size={28} />}
                        title="Doces caseiros"
                        content="Receitas tradicionais feitas à mão, com ingredientes frescos e saborosos."
                    />

                    <Card
                        icon={<FaBox size={28} />}
                        title="Encomendas para eventos"
                        content="Produção artesanal para aniversários e celebrações."
                    />

                </Cards>
            </section>
        </>
    )
}

export default Home
