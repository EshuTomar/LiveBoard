import { Route, Routes } from 'react-router-dom';
import './App.css';
import Forms from "./components/Forms";
import RoomPage from './components/WhiteBoard';

function App() {
  

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element= {<Forms/>} />
        <Route path='/:roomId' element= {<RoomPage/>} />
      </Routes>
        
    </div>
  )
}

export default App
