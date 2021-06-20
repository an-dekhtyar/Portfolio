import style from './SlideNav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GiHamburgerMenu } from '@fortawesome/free-brands-svg-icons'
import menuLogo from '../assets/image/menuSlide.svg'
import mainLogo from '../assets/image/mainSlide.png'


export function SlideNav(props) {

    let image = {
        backgroundImage: `url(${menuLogo})`
    }


    return (
        <div className={style.slideNavContain}>
            <div className={style.head}>
                <div className={style.headerSlide}>
                    <div><img src={mainLogo}></img></div>
                    <div className={style.menuLogo} onClick={props.colapsedHandler} style={image} ></div>
                </div>
            </div>
            <div className={style.slideNavItems}>
                <a href={''}>
                    <div className={style.navButton}>Home</div>
                </a>
                <a href={''}>
                    <div className={style.navButton}>Skills</div>
                </a>
                <a href={''}>
                    <div className={style.navButton}>Projects</div>
                </a>
                <a href={''}>
                    <div className={style.navButton}>Contacts</div>
                </a>
            </div>

        </div>
    );
}


