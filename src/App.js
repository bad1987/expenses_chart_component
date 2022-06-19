import React from 'react';
import './App.css';
import logo from "./logo.svg";

import Balance from './components/Balance';
import ChartBar from './components/ChartBar';

function App() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="w-5/12 space-y-8">
          <Balance />
          <ChartBar />        
        </div>
      </div>
    );
}

export default App;