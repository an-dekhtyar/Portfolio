import style from './SlideNav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GiHamburgerMenu } from '@fortawesome/free-brands-svg-icons'
import menuLogo from '../assets/image/menuSlide.svg'
import mainLogo from '../assets/image/mainSlide.png'
import { Link, animateScroll as scroll } from "react-scroll";

export function SlideNav(props) {

    let image = {
        backgroundImage: `url(${menuLogo})`
    }
    const items =[ "Home", "Skills", "Projects", "Contacts" ]

    return (
        <div className={style.slideNavContain}>
            <div className={style.head}>
                <div className={style.headerSlide}>
                    <div><img src={mainLogo}></img></div>
                    <div className={style.menuLogo} onClick={props.colapsedHandler} style={image} ></div>
                </div>
            </div>
            <div className={style.slideNavItems}>
                {items.map((items, index) => <Link
                    key={index}
                    activeClass=""
                    to={items}
                    spy={true}
                    smooth={true}
                    offset={items === "Contacts" ? -170 : -70}
                    duration={500}
                    className={style.navButton}
                >{items}</Link>)}
            </div>

        </div>
    );
}


