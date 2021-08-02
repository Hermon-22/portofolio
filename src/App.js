import './App.css';
import  {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import About from './components/About';
import Footer from './components/Footer';
import Education from './components/Education'
import Repositories from './components/Repositories';
import Contact from './components/Contact';
import Intro from './components/Intro';
import 'semantic-ui-css/semantic.min.css'
import Skills from './components/Skills';
import logoImg from "./img/logoimg.png"

function App() {
return (
    <div className="App">
    <Router>
        <nav className="nav nav-pills navs ">
            <div>
                <Link to='/'><img src={logoImg} alt="logo"width='100px'height='60px' className='logoimg'/></Link>
            </div>                
            <div className='nav-left nav '>
                <Link to='/about' className='nav-link'>About</Link>
                <Link to='/skills' className='nav-link'>Skills</Link>
                <Link to='/education' className='nav-link'>Education</Link>
                <Link to='/repos' className='nav-link'>Repositories</Link>
                <Link to='/contact' className='nav-link'>Contact me</Link>
            </div>
        </nav>
        <Switch>
            <Route exact path='/' component={Intro} />
            <Route exact path='/about' component={About} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/education' component={Education} />
            <Route exact path='/repos' component={Repositories} />
            <Route exact path='/contact' component={Contact} />
        </Switch>
    </Router>
    <Footer />
            
    </div>
);
}

export default App;
