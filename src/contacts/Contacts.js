import style from './Contacts.module.css'
import containStyle from '../common/styles/Contanier.module.css'
import {RemoteBlock} from "../remote/RemoteBlock";
import mapPick from "./map.jpg";


export function Contacts() {

    const contactBackPick = {
        backgroundImage:`url(${mapPick})`,
    }

    return (
        <div className={`${style.contactsContainer} ${style.background}`} style={contactBackPick}>
            <div className={`${containStyle.container} ${style.contactsBlock}`}>
                <div className={style.contactsTitle}>
                    <h2>Contacts</h2>
                </div>
                    <form className={style.formContainer}>
                        <input type={'text'}/>
                        <input type={'text'}/>
                        <textarea type={'text'}/>
                    </form>
                    <a href={''}>
                    <div className={style.button}>
                        <h3>
                            Send
                        </h3>
                    </div>
                </a>
                </div>
            {/*<RemoteBlock/>*/}
        </div>
    );
}

