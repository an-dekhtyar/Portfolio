import style from './Projects.module.css'
import containStyle from '../common/styles/Contanier.module.css'
import {Project} from "./project/Project";


export function Projects() {
    return (
        <div className={style.projectsContainer}>
            <div className={`${containStyle.container} ${style.projectsBlock}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={"Todolist"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Project title={"Social Network"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                </div>
            </div>
        </div>
    );
}

