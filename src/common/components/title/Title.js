import style from '../../../projects/Projects.module.css'

export function Title(props) {
    return (
        <div className={style.title}>
            <h2><span className={style.firstColor}>{props.firstColorText}</span>{props.text}</h2>
        </div>
    );
}

