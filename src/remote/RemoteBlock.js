import style from './RemoteBlock.module.css'
import containStyle from '../common/styles/Contanier.module.css'

export function RemoteBlock() {
    return (
        <div className={style.remoteBlock}>
            <div className={`${containStyle.container} ${style.remoteContainer}`}>
                <div className={style.title}>
                        <p className={style.text}>I am considering the possibility of remote work.</p>
                        <p className={style.text}>Relocation is possible after 3 months of our cooperation.</p>
                </div>
                    <a href={''}>
                        <div className={style.button}>
                            <h3>
                                Contact with me
                            </h3>
                        </div>
                    </a>
            </div>
        </div>
    );
}

