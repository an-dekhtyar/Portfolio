import style from './Contacts.module.css'
import containStyle from '../common/styles/Contanier.module.css'
import mapPick from "../assets/image/mapBackGround.jpg";
import {Title} from "../common/components/title/Title";

export function Contacts() {

    /*const contactBackPick = {
        backgroundImage: `url(${mapPick})`,
    }*/

    return (
        <div id={'Contacts'} className={style.contactsContainer} /*style={contactBackPick}*/>
            <div className={`${containStyle.container} ${style.contactsBlock}`}>

                <Title firstColorText={'my '} text={'contacts'}/>

                <div className={style.contactBlockContent}>
                    <div className={style.contactBlockText}>
                        <div className={style.cityName}><span className={style.firstColor}>Minsk, </span>Belarus</div>
                        <p className={style.backgroundColor}><span className={style.firstColor}>► </span>I am considering the possibility of remote work.</p>
                        <p className={style.backgroundColor}><span className={style.firstColor}>► </span>Relocation is possible after 3 months of our cooperation.</p>
                        <div className={style.contacts}>antd3149@gmail.com</div>
                        <div className={style.contacts}>+375 29 173-5551</div>
                    </div>
                    <div className={style.formContainer}>
                        <Form/>
                    </div>
                </div>
            </div>


        </div>
    );
}


export const Form = () => {
    return (
        <>
            <form className={`${style.elementorColumnWrap} ${style.elementorElementPopulated}`}>
                <div className={style.vltFormRow}>
                    <div className={style.vltFormGroupInline}>
                        <span>
                            <input className={style.input2} type="text" size={"40"} placeholder={"Name"}/>
                            </span>
                    </div>
                    <div className={style.vltFormGroupInline}>
                        <span>
                            <input className={style.input2} type={"email"} size={40} placeholder={"Email"}/>
                            </span>
                    </div>
                </div>
                <div className={style.vltFormGroup}>
                    <span>
                        <input className={style.input2} type={"text"} size={40} placeholder={"Subject (Optional)"}/>
                        </span>
                </div>
                <div className={style.vltFormGroup}>
                    <textarea className={style.input2} cols={42} rows={6} placeholder="Message"/>
                </div>
                <button className={style.button}>Contact Me</button>
            </form>
        </>
    )
}