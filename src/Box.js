function Box({ children }) {
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
      {children}
    </div>
  )
}

export default Box
