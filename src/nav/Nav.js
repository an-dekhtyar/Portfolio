import style from './Nav.module.css'

import { Link } from "react-scroll";

export function Nav() {

    const items =[ "Home", "Skills", "Projects", "Contacts" ]


    return (
        <div className={style.nav}>
            {items.map((items, index) => <Link
                key={index}
                activeClass={style.active}
                to={items}
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                className={style.navButton}
            >{items}</Link>)}
        </div>

    );
}


