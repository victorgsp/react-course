import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';
import Menu from './template/menu';
import Routes from './main/routes';


function App() {
  return (
    <div>
      <Menu />
      <div className='container'>
      <Routes/>
      </div>
    </div>
  );
}

export default App;
