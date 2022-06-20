import React from 'react';
import './App.css';

import Balance from './components/Balance';
import ChartBar from './components/ChartBar';

function App() {
    return (
      <div className="sm:min-h-screen w-screen flex flex-col sm:justify-center sm:items-center">
        <div className="flex flex-col mx-4 my-8 space-y-8">
          <Balance />
          <ChartBar />        
        </div>
      </div>
    );
}

export default App;