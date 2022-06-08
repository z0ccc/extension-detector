import { useEffect } from 'react';
import './App.css';
import extensionScan from './utils/extensionScan';

const App = () => {
  useEffect(() => {
    extensionScan();
  }, []);
  return <div className="App"></div>;
};

export default App;
