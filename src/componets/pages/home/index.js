import React from 'react'
import Button from '../../Button/Botton'
import './style.css'
import { useNavigate } from 'react-router-dom';


function Home() {
  
const navigate = useNavigate();

  const onClickButton = (url) => {
    navigate(url);
}
  return (
    <div className='Background'>
  <Button onClick={() => onClickButton('/game')} text='Comience el Juego' />
  </div>
  ) 
}

export default Home;



