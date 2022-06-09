import { useState, useEffect } from 'react';
import './App.css';
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
      {extensions ? (
        <table>
          <tbody>
            {Object.keys(extensions).map((key) => (
              <tr
                style={{
                  backgroundColor: extensions[key].detected
                    ? '#00ff00'
                    : '#ff0000',
                }}
                key={key}
              >
                <td>{extensions[key].name}</td>
                <td>{`${extensions[key].detected}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        'loading'
      )}
    </div>
  );
};

export default App;
