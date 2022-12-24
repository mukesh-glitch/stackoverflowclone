import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Allroutes from './Allroutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Allroutes />
      </BrowserRouter>
    </>
  );
}

export default App;
