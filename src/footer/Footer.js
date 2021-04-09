import style from './Footer.module.css'
import containStyle from '../common/styles/Contanier.module.css'

export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${containStyle.container} ${style.footerContainer}`}>
               <h2 className={style.name}>Anton Dekhyar</h2>
                <div className={style.socialNetworkBlock}>
                    <a href={''}>
                        <div className={style.socialNetwork}>L</div>
                    </a>
                    <a href={''}>
                        <div className={style.socialNetwork}>I</div>
                    </a>
                    <a href={''}>
                        <div className={style.socialNetwork}>T</div>
                    </a>
                    <a href={''}>
                        <div className={style.socialNetwork}>G</div>
                    </a>
                </div>
                <h4 className={style.name}>Copyright © All rights reserved.</h4>
            </div>
        </div>
    );
}
