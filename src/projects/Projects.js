import style from './Projects.module.scss'
import containStyle from '../common/styles/Contanier.module.css'
import {Project} from './project/Project';
import common from '../App.css'
import {Title} from '../common/components/title/Title';
import todolistImage from '../assets/image/todolist.jpg'
import socialNetworkImage from '../assets/image/sw.jpg'

export function Projects() {

    const todoList = {
        backgroundImage: `url(${todolistImage})`,
    };

    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`,
    };


    return (
        <div className={style.projectsContainer}>
            <div className={`${containStyle.container} ${style.projectsBlock}`}>
                <Title text={"Projects"} firstColorText={"My "}/>
                <div className={style.projects}>
                    <Project style={todoList} title={"Todolist"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Project style={socialNetwork} title={"Social Network"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                </div>
            </div>
        </div>
    );
}

