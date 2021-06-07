import style from './Skill.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                {props.fortawesomeIcon
                    ?
                    <FontAwesomeIcon size={"4x"} color={"color:#c32865"} icon={props.fortawesomeIcon}/>
                    :
                    <img src={props.svgIcon}/>}
            </div>
            <h3 className={style.skillTitle}>{props.title}</h3>
            <span className={style.skillDescription}>{props.description}</span>
        </div>
    );
}