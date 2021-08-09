import style from './SlideNav.module.css'
import menuLogo from '../assets/image/menuSlide.svg'
import mainLogo from '../assets/image/mainSlide.png'
import { Link} from "react-scroll";

export function SlideNav(props) {

    let image = {
        backgroundImage: `url(${menuLogo})`
    }
    const items =[ "Home", "Skills", "Projects", "Contacts" ]

    return (
        <div className={style.slideNavContain}>
                <div className={style.headerSlide}>
                    <div><img src={mainLogo}/></div>
                    <div className={style.menuLogo} onClick={()=>{props.collapsedHandler()}} style={image} />
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


