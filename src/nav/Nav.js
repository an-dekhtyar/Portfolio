import style from './Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GiHamburgerMenu } from '@fortawesome/free-brands-svg-icons'
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from 'react'

export function Nav() {

    const items =[ "Home", "Skills", "Projects", "Contacts" ]


    return (
        <div className={style.nav}>
            {items.map((items, index) => <Link
                key={index}
                activeClass=""
                to={items}
                spy={true}
                smooth={true}
                offset={items === "Contacts" ? -100 : 1}
                duration={500}
                className={style.navButton}
            >{items}</Link>)}
        </div>

    );
}


