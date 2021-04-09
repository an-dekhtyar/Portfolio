import style from './MainBlock.module.css'
import containStyle from '../common/styles/Contanier.module.css'

export function MainBlock() {
    return (
        <div className={style.mainBlock}>
            <div className={containStyle.container}>
                <div className={style.greeting}>
                    <span>Hi There</span>
                    <h1>I am Anton Dekhtyar</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}>
                    
                </div>
            </div>
        </div>
    );
}


