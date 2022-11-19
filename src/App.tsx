import React from 'react';
import './index.css';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <div className="App bg-background min-h-screen text-white">
      <Dashboard />
    </div>
  );
}

export default App;
