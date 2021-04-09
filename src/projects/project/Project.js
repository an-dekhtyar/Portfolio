import style from './Project.module.css'


export function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.viewBlock}>
                <a href={''}>
                    <div className={style.button}>
                        <h3>
                            View Project
                        </h3>
                    </div>
                </a>
            </div>
            <div className={style.descriptionBlock}>
                <h4 className={style.title}>{props.title}</h4>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
}