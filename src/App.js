import { useState, useEffect } from 'react';
import './App.css';
import Table from './Table';
import Header from './Header';

import checkExtensions from './utils/checkExtensions';

const App = () => {
  const [extensions, setExtensions] = useState();

  useEffect(() => {
    checkExtensions().then((extensionsArr) =>
      setExtensions(
        extensionsArr.sort((a, b) => Number(b.detected) - Number(a.detected))
      )
    );
  }, []);

  useEffect(() => {
    console.log(extensions);
  }, [extensions]);

  return (
    <div className="App">
      <div>
        <Header />
        {extensions ? <Table extensions={extensions} /> : 'loading'}
      </div>
    </div>
  );
};

export default App;