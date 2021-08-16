import style from './Footer.module.css'
import containStyle from '../common/styles/Contanier.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faTelegram, faLinkedin, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons'

export function Footer() {

    let icons = {
        telegram: faTelegram,
        gitHub: faGithub,
        linkedIn: faLinkedin,
        whatsUp: faWhatsappSquare
    }


    return (
        <div className={style.footerBlock}>
            <div className={`${containStyle.container} ${style.footerContainer}`}>
                <h2 className={style.name}><span className={style.firstColor} >Anton</span> Dekhyar</h2>
                <div className={style.socialNetworkBlock}>
                    <a href={'https://t.me/antndkhtr'}>
                        <div className={style.socialNetwork}>
                            <FontAwesomeIcon size={"3x"} icon={icons.telegram}/>
                        </div>
                    </a>
                    <a href={'https://github.com/an-dekhtyar'}>
                        <div className={style.socialNetwork}>
                            <FontAwesomeIcon size={"3x"}  icon={icons.gitHub}/>
                        </div>
                    </a>
                    <a href={'https://www.linkedin.com/in/anton-dekhtyar-08379a1a0/'}>
                        <div className={style.socialNetwork}>
                            <FontAwesomeIcon size={"3x"}  icon={icons.linkedIn}/>
                        </div>
                    </a>
                    <a href={'https://wa.me/375293273433'}>
                        <div className={style.socialNetwork}>
                            <FontAwesomeIcon size={"3x"}  icon={icons.whatsUp}/>
                        </div>
                    </a>
                </div>
                <h4 className={style.copyright}>Copyright © All rights reserved.</h4>
            </div>
        </div>
    );
}
