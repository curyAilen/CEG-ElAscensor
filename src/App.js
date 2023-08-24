import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" />
      </Routes>
      <Header></Header>
    </BrowserRouter>
  );
}

export default App;
