import style from './Contacts.module.css'
import containStyle from '../common/styles/Contanier.module.css'


export function Contacts() {
    return (
        <div className={style.contactsContainer}>
            <div className={`${containStyle.container} ${style.contactsBlock}`}>
                    <h2 className={style.contactsTitle}>Contacts</h2>
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

        </div>
    );
}

