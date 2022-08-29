
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './componets/pages/home';
import Game from './componets/pages/game';
// import Button from './componets/Button/Botton';





function App() {



  return (
    <div className=''>
      
{/* <Button text="Comenzar el Juego" onClick={() => alert('dieron click en el cuadro')}/> */}
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/game' element={<Game/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
