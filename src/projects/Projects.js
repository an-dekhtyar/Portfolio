import style from './Projects.module.scss'
import containStyle from '../common/styles/Contanier.module.css'
import {Project} from './project/Project';
import common from '../App.css'
import {Title} from '../common/components/title/Title';
/* import todolistImage from '../assets/image/todolist.jpg'
import socialNetworkImage from '../assets/image/sw.jpg'
import pizzaImage from '../assets/image/pizza.jpg'
import cardsImage from '../assets/image/cards.jpg' */
import todolistImage from '../assets/image/todo.png'
import socialNetworkImage from '../assets/image/socialnetwork2.png'
import pizzaImage from '../assets/image/pizza2.png'
import cardsImage from '../assets/image/card2.png'
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

export function Projects() {

    const todoList = {
        backgroundImage: `url(${todolistImage})`,
    };

    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`,
    };
    const pizza = {
        backgroundImage: `url(${pizzaImage})`,
    };
    const cards = {
        backgroundImage: `url(${cardsImage})`,
    };







    return (
        <div className={style.projectsContainer}>
            <div className={`${containStyle.container} ${style.projectsBlock}`}>
                <HeadShake >
                    <Title text={"Projects"} firstColorText={"My "}/>
                </HeadShake>

                <div className={style.projects}>
                    <Fade bottom>
                        <Project style={todoList} title={"Todolist"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    </Fade>
                    <Fade bottom>
                        <Project style={socialNetwork} title={"Social Network"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    </Fade>
                    <Fade bottom>
                        <Project style={pizza} title={"React Pizza"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    </Fade>
                    <Fade bottom>
                        <Project style={cards}  title={"Cards"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    </Fade>
                </div>

            </div>
        </div>
    );
}

