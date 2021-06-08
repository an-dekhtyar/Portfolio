import style from './Footer.module.css'
import containStyle from '../common/styles/Contanier.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faGitAlt} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faWhatsappSquare} from '@fortawesome/free-brands-svg-icons'

export function Footer() {

    let icons = {
        telegram: faTelegram,
        gitHub: faGitAlt,
        linkedIn: faLinkedin,
        whatsUp: faWhatsappSquare
    }


    return (
        <div className={style.footerBlock}>
            <div className={`${containStyle.container} ${style.footerContainer}`}>
                <h2 className={style.name}><span className={style.firstColor} >Anton</span> Dekhyar</h2>
                <div className={style.socialNetworkBlock}>
                    <a href={''}>
                        <div className={style.socialNetwork}>
                            <FontAwesomeIcon size={"3x"} icon={icons.telegram}/>
                        </div>
                    </a>
                    <a href={''}>
                        <div className={style.socialNetwork}>
                            <FontAwesomeIcon size={"3x"}  icon={icons.gitHub}/>
                        </div>
                    </a>
                    <a href={''}>
                        <div className={style.socialNetwork}>
                            <FontAwesomeIcon size={"3x"}  icon={icons.linkedIn}/>
                        </div>
                    </a>
                    <a href={''}>
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
