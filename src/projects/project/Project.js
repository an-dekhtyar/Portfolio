import style from './Project.module.scss'
import viewMoreIcon from '../../assets/image/more.svg'

export function Project(props) {
    return (
        <div className={style.project}>
            <a href={''}>
                <div className={style.viewBlock} style={props.style}>
                    <img className={style.icon} src={viewMoreIcon}/>
                    {/*<button className={style.button}>View</button>*/}

                </div>
            </a>
            <div className={style.descriptionBlock}>
                <h3 className={style.title}>{props.title}</h3>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
}