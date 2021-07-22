import style from './Project.module.scss'


export function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.viewBlock} style={props.style}>
                <a href={''}>
                    {/*  <button className={style.button}>View Project</button> */}
                </a>
            </div>
            <div className={style.descriptionBlock}>
                <h3 className={style.title}>{props.title}</h3>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
}