import style from './SkillsBlock.module.css'
import containStyle from '../common/styles/Contanier.module.css'
import {Skill} from './skill/Skill'
import {Title} from "../common/components/title/Title";
import { faReact } from '@fortawesome/free-brands-svg-icons'
import {faJs} from '@fortawesome/free-brands-svg-icons'
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons'
import redux from '../assets/image/redux.svg'
import typeScript from '../assets/image/ts.svg'
import {faGitAlt} from '@fortawesome/free-brands-svg-icons'
import Fabe from 'react-reveal/Fade'
import HeadShake from 'react-reveal/HeadShake';

export function SkillsBlock() {

    let icons = {
        react:faReact,
        javaScript:faJs,
        css:faCss3Alt,
        redux:redux,
        typeScript:typeScript,
        git:faGitAlt
    }





    return (
        <div id={'Skills'} className={style.skillsBlock}>
            <div className={`${containStyle.container} ${style.skillsContainer}`}>
                <HeadShake >
                    <Title text={"Skills"} firstColorText={"My "}/>
                </HeadShake >
                <Fabe left>
                    <div className={style.skills}>
                        <Skill title={"JavaScript"} fortawesomeIcon={icons.javaScript}
                               description={"JS is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. JS can function as both a procedural and an object oriented language"}/>
                        <Skill title={"CSS"} fortawesomeIcon={icons.css}
                               description={"Cascading Style Sheets, is for adding styles, such as colors, font type, and spacing. Combined, they are the building blocks of any website"}/>
                        <Skill title={"React"} fortawesomeIcon={icons.react}
                               description={"React is a JavaScript library for building user interfaces. React can be used as a base in the development of single-page or mobile applications"}/>
                    </div>
                </Fabe>
                <Fabe right>
                    <div className={style.skills}>
                        <Skill title={"TypeScript"} svgIcon={icons.typeScript}
                               description={"TS is a strict syntactical superset of JavaScript and adds optional static typing to the language. TS is designed for the development of large applications and transcompiles to JavaScript"}/>
                        <Skill title={"Redux"} svgIcon={icons.redux}
                               description={"Redux is JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces"}/>
                        <Skill title={"Git"} fortawesomeIcon={icons.git}
                               description={"Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development"}/>
                    </div>
                </Fabe>
            </div>
        </div>
    );
}

