import React from 'react';
import './App.css';

import Balance from './components/Balance';
import ChartBar from './components/ChartBar';

function App() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="w-full xl:w-6/12 2xl:w-5/12 lg:w-8/12 md:my-8 space-y-8">
          <Balance />
          <ChartBar />        
        </div>
      </div>
    );
}

export default App;