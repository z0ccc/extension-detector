import Box from './Box';
import GitHubButton from 'react-github-btn';

const isSupported = () => {
  if (!window.chrome) {
    return false;
  }
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return false;
  }
  return true;
};

const Header = ({ hash }) => {
  return (
    <Box>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>Extension Fingerprints</h1>
        <GitHubButton
          href="https://github.com/z0ccc/extension-fingerprints"
          data-size="large"
          data-show-count="true"
          aria-label="Star z0ccc/extension-fingerprints on GitHub"
        >
          Star
        </GitHubButton>
      </div>
      <p>
        Chrome extensions can be detected by fetching their web-accessible
        resources. These are files inside an extension that can be accessed by
        web pages. The detected extensions can be used to track you through
        browser fingerprinting. Read more
      </p>
      <div style={{ textAlign: 'center', margin: '24px 0' }}>
        <h2>
          {isSupported()
            ? '0.01% of users share the same extensions'
            : 'Only Chromium desktop browsers are supported'}
        </h2>
        <p>Hash: {hash}</p>
      </div>
    </Box>
  );
};

export default Header;
