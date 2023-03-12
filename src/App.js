import './App.css';
import { NavBar, Hero, Skills, Portfolio, Certifications, Contact, Footer } from './components'
import { themeContext } from './Context/Context';
import { useContext } from 'react';

const App = () => {
  const {state } = useContext(themeContext);
  const darkMode = state.darkMode;

  return (
    <div 
    className='App'
    style={{
      background: darkMode ? 'black': '',
      color: darkMode ? '#fff': ''
    }}
    >
        <NavBar />
        <Hero />
        <Skills />
        <Portfolio />
        <Certifications />
        <Contact />
        <Footer />           
    </div>
  )
}

export default App;