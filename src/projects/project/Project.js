import style from './Project.module.scss'


export function Project(props) {
    return (
        <div className={style.project}>
            <a href={''}>
            <div className={style.viewBlock} style={props.style}>

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