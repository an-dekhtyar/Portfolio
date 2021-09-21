import style from './Projects.module.scss'
import containStyle from '../common/styles/Contanier.module.css'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
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
        <div id={'Projects'} className={style.projectsContainer}>
            <div className={`${containStyle.container} ${style.projectsBlock}`}>
                <HeadShake >
                    <Title firstColorText={"My "} text={"Projects"} />
                </HeadShake>

                <div className={style.projects}>
                    <Fade bottom>
                        <Project link={'https://an-dekhtyar.github.io/todolist'} style={todoList} title={"Todolist"} description={"A to do list app helps you organize tasks and stay on top of your deadlines. You can use it to manage everything from grocery lists to work-related tasks and more."}/>
                    </Fade>
                    <Fade bottom>
                        <Project link={'https://an-dekhtyar.github.io/Social-Network/'} style={socialNetwork} title={"Social Network"} description={"In this age of digitisation, people have found ways to be socially active on the internet. Now, even relationships begin, grow and end on social media. People no longer need a personal handshake or face-to-face meeting."}/>
                    </Fade>
                    <Fade bottom>
                        <Project link={'https://github.com/an-dekhtyar/pizza'} style={pizza} title={"React Pizza"} description={"React Pizza is a pizza delivery service application. The ability to increase the number of orders and increase the average check, optimizing delivery processes and strengthening customer loyalty."}/>
                    </Fade>
                    <Fade bottom>
                        <Project link={'https://an-dekhtyar.github.io/cards-app/#/login'} style={cards}  title={"Cards"} description={"Whether you are an experienced programmer or not, this Cards app is intended for everyone who wishes to learn the JavaScript programming language and ove your Frontend Developer skills"}/>
                    </Fade>
                </div>

            </div>
        </div>
    );
}

