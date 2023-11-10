import styles from './Sobre.module.css'
import avatar from '../sobre/images/avatar.png'
import html from '../../assets/icons8-html.svg' 
import css from '../../assets/icons8-css.svg'
import react from '../../assets/icons8-react-100.svg'
import sql from '../../assets/icons8-sql-48.svg'
import js from '../../assets/js.svg'
import kotlin from '../../assets/kotlin.svg'
import swift from '../../assets/swift.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Gustavo Alves</span> <br />
                    <strong>UI/UX Designer</strong> </p>
                    <p>Estou estudando no colégio Cotemig para me tornar um Téncnico em Informática com foco em <br/> Desenvolvimento Web e Mobile.</p>
                    <p>Gosto do Desenvolvimento pois por meio dele crio soluções e resolvo problemas, como se fosse <br/> a forma própria de criar!</p>
                    <p>Espero continuar me desnvolvendo bastante nesta área tão abrangente.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do JavaScript" />
                    <img src={sql} alt="Ícone do sql" />
                    <img src={react} alt="Ícone do react" />
                    <img src={kotlin} alt="Ícone do Kotlin" />
                    <img src={swift} alt="Ícone do Swift" />
                </div>
            </div>
        </section>
    )
}

export default Sobre