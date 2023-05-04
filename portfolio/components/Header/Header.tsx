import styles from '../../styles/header.module.scss'
import Logo from "../Logo/Logo";


const Header = () => {
    return (
        <header>
            <div className={`container ${styles.header__container}`}>
                <Logo />
                <nav>

                </nav>

            </div>
        </header>
    )
}