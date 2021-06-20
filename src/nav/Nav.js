import style from './Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GiHamburgerMenu } from '@fortawesome/free-brands-svg-icons'

import { useState } from 'react'

export function Nav() {



    return (
        <>
            <div className={style.nav}>
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
        </>
    );
}


