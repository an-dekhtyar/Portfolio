import style from './Header.module.css'
import containStyle from '../common/styles/Contanier.module.css'
import {Nav} from '../nav/Nav'


export function Header() {
  return (
    <div className={style.header}>
      <div className={style.container}>
      <Nav/>
      </div>
    </div>
  );
}


