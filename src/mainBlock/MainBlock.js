import style from './MainBlock.module.css'
import containStyle from '../common/styles/Contanier.module.css'
import mainPhoto from '../assets/image/main-photo.jpg'
import ParticleField from 'react-particles-js'
import Fabe from 'react-reveal/Fade'
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

const config = {
    particles: {
        number: {
            value: 400,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: '#c32865'
        },
        opacity: {
            value: 0.9,
            anim: {
                enable: true
            }
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 3
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            speed: 0.2
        }
    }
}


export function MainBlock() {

    let mainBackGrPhoto = {
        backgroundImage: `url(${mainPhoto})`
    }

    return (
        <div id={'Home'} className={style.mainBlock}>
            {/* <ParticleField params={config} className={style.particles}/> */}
            <div className={containStyle.container}>


                <Fabe left>
                    <div className={style.greeting}>
                        <span className={style.spanText}>Hi There,</span>
                        <h1 className={style.h1Text}>I am Anton Dekhtyar</h1>
                        <ReactTypingEffect text={"Frontend Developer"} className={style.pText}/>
                    </div>
                </Fabe>



                <Fabe right>
                    <Tilt options={{ max : 10}}>
                        <div className={style.photo}>
                            <div className={style.image} style={mainBackGrPhoto} />
                        </div>
                    </Tilt>
                </Fabe>
            </div>

        </div>
    );
}


