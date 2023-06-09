import './Toggle.css';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { themeContext } from '../../Context/Context';
import { useContext } from 'react';

const Toggle = () => {
  const { state, dispatch } = useContext(themeContext);
  const darkMode = state.darkMode;

  const handleClick = () => {
    dispatch({ type: 'toggle' });
  }

  return (
    <div className='toggle' onClick={handleClick}>
        <Moon />
        <Sun />
        <div 
            className='toggle-button'
            style={darkMode ? {left: '2px'} : {right: '2px'}}
        ></div>
    </div>
  )
}

export default Toggle;