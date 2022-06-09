import { useState, useEffect } from 'react';
import './App.css';
import Table from './Table';
import Header from './Header';
import Box from './Box';
import checkExtensions from './utils/checkExtensions';
import generateHash from './utils/generateHash';

const App = () => {
  const [extensions, setExtensions] = useState();
  const [hash, setHash] = useState('Loading...');

  useEffect(() => {
    checkExtensions().then((extensionsArr) => {
      setExtensions(
        extensionsArr.sort((a, b) => Number(b.detected) - Number(a.detected))
      );

      const hash = generateHash(
        extensionsArr
          .filter((el) => el.detected === true)
          .map(({ id }) => id)
          .sort()
      );
      setHash(hash);
    });
  }, []);

  useEffect(() => {
    console.log(extensions);
  }, [extensions]);

  return (
    <div className="App">
      <div>
        <Header hash={hash} />
        {extensions ? (
          <Table extensions={extensions} />
        ) : (
          <Box>
            <div style={{ textAlign: 'center' }}>loading...</div>
          </Box>
        )}
      </div>
    </div>
  );
};

export default App;
