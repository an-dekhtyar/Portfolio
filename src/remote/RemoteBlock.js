import style from './RemoteBlock.module.css'
import containStyle from '../common/styles/Contanier.module.css'

export function RemoteBlock() {
    return (
        <div className={style.remoteBlock}>
            <div className={`${containStyle.container} ${style.remoteContainer}`}>
                <div className={style.contactContain}>
                    <div className={style.aaa}>
                        <div className={style.cb}></div>
                        <div className={style.cb}></div>
                    </div>
                    <div className={style.cb}></div>
                    <div className={style.cb}></div>
                </div>

            </div>
        </div>
    );
}


{/*<p className={style.text}>I am considering the possibility of remote work.</p>
                        <p className={style.text}>Relocation is possible after 3 months of our cooperation.</p>*/
}
