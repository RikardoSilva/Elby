import '../styles/footer.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FiMapPin, FiPhone } from 'react-icons/fi'

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Elby · Pastelaria Caseira</p>

            <div className="contact-info">
                <div className='contact-item'>
                    <FiMapPin size={20} />
                    <p>Câmara de Lobos</p>
                </div>
                <div className="contact-item">
                    <FiPhone size={20} />
                    <p>+351 936 543 245</p>
                </div>
            </div>

            <div className="socials">
                <a href="https://www.instagram.com/__elby___/" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <FaInstagram className="icon instagram" />
                </a>
                <a href="https://www.facebook.com/Elby2021" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <FaFacebook className="icon facebook" />
                </a>
            </div>
        </footer>
    )
}

export default Footer
