import style from './MainBlock.module.css'
import containStyle from '../common/styles/Contanier.module.css'
import mainPhoto from '../assets/image/main-photo.jpg'
import * as url from "url";

export function MainBlock() {

    let mainBackGrPhoto = {
        backgroundImage:`url(${mainPhoto})`
    }

    return (
        <div className={style.mainBlock}>
            <div className={containStyle.container}>
                <div className={style.greeting}>
                    <span className={style.spanText}>Hi There,</span>
                    <h1 className={style.h1Text}>I am Anton Dekhtyar</h1>
                    <p className={style.pText}>Frontend Developer</p>
                </div>
                <div className={style.photo} style={mainBackGrPhoto}>
                    
                </div>
            </div>
        </div>
    );
}


