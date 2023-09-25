import GitHubButton from 'react-github-btn'
import Box from './Box'

const isSupported = () => {
  if (!window.chrome) {
    return false
  }
  // if (
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //     navigator.userAgent
  //   )
  // ) {
  //   return false;
  // }
  return true
}

const getPercentageText = (percentage) => {
  if (!isSupported()) {
    return 'Only Chromium desktop browsers are supported'
  }
  if (percentage === 'loading') {
    return 'Loading...'
  }
  if (percentage === 'error') {
    return 'Error'
  }
  const percentageRounded = percentage.toFixed(3)
  if (percentage < 0.001) {
    return '<0.001% of users share the same extensions'
  }
  return `${percentageRounded}% of users share the same extensions`
}

function Header({ percentage, hash }) {
  return (
    <Box>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>Extension Detector</h1>
        <GitHubButton
          href="https://github.com/z0ccc/extension-detector"
          data-size="large"
          data-show-count="true"
          aria-label="Star z0ccc/extension-detector on GitHub"
        >
          Star
        </GitHubButton>
      </div>
      <p>
        Chrome extensions can be detected by fetching their web accessible
        resources. These are files inside an extension that can be accessed by
        web pages. The detected extensions can be used to track you through
        browser fingerprinting. This scan only detects extensions from the
        Chrome Web Store.{' '}
        <a
          href="https://github.com/z0ccc/extension-detector#extension-detector"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#0069c2' }}
        >
          Read more
        </a>
      </p>
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <h2>{getPercentageText(percentage)}</h2>
        <p>Hash: {hash}</p>
      </div>
    </Box>
  )
}

export default Header
