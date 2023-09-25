import { useState, useEffect } from 'react'
import './App.css'
import Table from './Table'
import Header from './Header'
import Box from './Box'
import checkExtensions from './utils/checkExtensions'
import generateHash from './utils/generateHash'

function App() {
  const [extensions, setExtensions] = useState()
  const [percentage, setPercentage] = useState('loading')
  const [hash, setHash] = useState('Loading...')

  useEffect(() => {
    checkExtensions().then((extensionsArr) => {
      setExtensions(
        extensionsArr.sort((a, b) => Number(b.detected) - Number(a.detected))
      )

      const hashValue = generateHash(
        extensionsArr
          .filter((el) => el.detected === true)
          .map(({ id }) => id)
          .sort()
      )
      setHash(hashValue)

      fetch(`https://extensiondetector.vytal.io/?hash=${hashValue}`)
        .then((response) => response.json())
        .then((data) => {
          setPercentage(data.percentage)
        })
        .catch(() => {
          setPercentage('error')
        })
    })
  }, [])

  return (
    <div className="App">
      <div>
        <Header percentage={percentage} hash={hash} />
        {extensions ? (
          <Table extensions={extensions} />
        ) : (
          <Box>
            <div style={{ textAlign: 'center' }}>loading...</div>
          </Box>
        )}
      </div>
    </div>
  )
}

export default App
