import style from './SkillsBlock.module.css'
import containStyle from '../common/styles/Contanier.module.css'
import { Skill } from './skill/Skill'

export function SkillsBlock() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${containStyle.container} ${style.skillsContainer}`}>
               
                    <h2 className={style.title}>My Skills</h2>
                
                <div className={style.skills}>
                    <Skill title={"JavaScript"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
                    <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
                     </div>
            </div>
        </div>
    );
}

