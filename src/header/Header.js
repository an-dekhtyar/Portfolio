import style from './Header.module.css'
import {Nav} from '../nav/Nav'
import mainLogo from '../assets/image/main.png'
import menuLogo from '../assets/image/menu.svg'
import {SlideNav} from '../nav/SlideNav'
import {useState} from 'react'
import {Transition} from "react-transition-group";


export function Header() {

    let image = {
        backgroundImage: `url(${menuLogo})`
    }

    const [collapsed, setCollapsed] = useState(false)

    const collapsedHandler = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div className={style.header}>
            <div className={style.contain}>
                <div
                    className={style.container}
                >
                    <div>
                        <img src={mainLogo} alt={'photo'}/>
                    </div>
                    <div style={image} onClick={collapsedHandler} className={style.menuLogo}/>
                    <Nav/>
                </div>
            </div>
            <Transition
                in={collapsed}
                timeout={500}
                mountOnEnter
                unmountOnExit
            >
                {state => <div className={`anim ${state}`}>
                    <SlideNav collapsedHandler={collapsedHandler}/>
                </div>}
            </Transition>

        </div>)
}


{/*<Transition
                in={collapsed}
                timeout={500}
            >
                {state => <SlideNav className={`${style.animation} ${state}`} collapsedHandler={collapsedHandler} />
                }
            </Transition>*/
}



