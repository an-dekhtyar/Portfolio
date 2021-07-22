import style from './Header.module.css'
import { Nav } from '../nav/Nav'
import mainLogo from '../assets/image/main.png'
import menuLogo from '../assets/image/menu.svg'
import { SlideNav } from '../nav/SlideNav'
import { useState } from 'react'


export function Header() {

    let image = {
        backgroundImage: `url(${menuLogo})`
    }
    let width = {
        width: '100%'
    }

    const [colapsed, setColapsed] = useState(true)

    const colapsedHandler = () => {
        setColapsed(!colapsed)
    }
    return (
        <div className={style.header}>
            {colapsed
                ?
                <div className={style.container} style={!colapsed ? width : null}>
                    <div>
                        <img src={mainLogo} alt={'photo'}/>
                    </div>
                    <div style={image} onClick={colapsedHandler} className={style.menuLogo}/>
                    <Nav />
                </div>
                :
                <div className={style.animation}>
                    <SlideNav colapsedHandler={colapsedHandler} />
                </div>
            }
            {/*<Transition
                in={colapsed}
                timeout={500}
            >
                {state => <div className={`${style.animation} ${state}`}>
                    <SlideNav colapsedHandler={colapsedHandler} />
                </div>}
            </Transition>*/}
        </div>






    );
}


