import GitHubButton from 'react-github-btn';

const Header = () => {
  return (
    <div
      style={{
        width: '600px',
        backgroundColor: '#fff',
        padding: '12px',
        boxSizing: 'border-box',
        border: '1px solid #ddd',
        marginBottom: '12px',
      }}
    >
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
        <h2>0.01% of users share the same extensions</h2>
        <p>Hash: 321cca8846c784b6f2d6ba628f8502a5fb0683ae</p>
      </div>
    </div>
  );
};

export default Header;
