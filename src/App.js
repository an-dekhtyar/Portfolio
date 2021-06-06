import './App.css';
import {Header} from './header/Header'
import {MainBlock} from './mainBlock/MainBlock'
import {SkillsBlock} from './skillsBlock/SkillsBlock';
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainBlock/>
            <SkillsBlock/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

