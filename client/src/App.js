import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Allroutes from './Allroutes';
import { getAllquestionAction } from './actions/askQuestion';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllquestionAction())
  }, [dispatch])

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
