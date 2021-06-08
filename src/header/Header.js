import style from './Header.module.css'
import containStyle from '../common/styles/Contanier.module.css'
import {Nav} from '../nav/Nav'
import mainLogo from '../assets/image/main.png'

export function Header() {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div>
                    <img src={mainLogo}></img>
                </div>
                <Nav/>
            </div>
        </div>
    );
}


