import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Gustavo Alves</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )
}
export default Header