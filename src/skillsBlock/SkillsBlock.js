import style from './SkillsBlock.module.css'
import containStyle from '../common/styles/Contanier.module.css'
import {Skill} from './skill/Skill'
import {Title} from "../common/components/title/Title";
import { faReact } from '@fortawesome/free-brands-svg-icons'
import {faJs} from '@fortawesome/free-brands-svg-icons'
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons'
import redux from '../assets/image/redux.svg'
import typeScript from '../assets/image/ts.svg'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'

export function SkillsBlock() {

    let icons = {
        react:faReact,
        javaScript:faJs,
        css:faCss3Alt,
        redux:redux,
        typeScript:typeScript,
        faHtml5:faHtml5
    }





    return (
        <div className={style.skillsBlock}>
            <div className={`${containStyle.container} ${style.skillsContainer}`}>

                <Title text={"Skills"} firstColorText={"My "}/>

                <div className={style.skills}>
                    <Skill title={"JavaScript"} fortawesomeIcon={icons.javaScript}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill title={"CSS"} fortawesomeIcon={icons.css}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill title={"React"} fortawesomeIcon={icons.react}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                </div>
                <div className={style.skills}>
                    <Skill title={"TypeScript"} svgIcon={icons.typeScript}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill title={"Redux"} svgIcon={icons.redux}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill title={"HTML"} fortawesomeIcon={icons.faHtml5}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                </div>
            </div>
        </div>
    );
}

