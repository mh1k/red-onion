import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home/Home';
import Navbar from './components/shared/Navbar/Navbar';


function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
      </Routes>
    </div>
  );
}

export default App;
