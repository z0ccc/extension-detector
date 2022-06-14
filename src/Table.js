function Table({ extensions }) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderBottom: 'none',
        boxSizing: 'border-box',
      }}
    >
      <table>
        <thead>
          <tr>
            <th>Extension</th>
            <th>Detected</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(extensions).map((key) => (
            <tr
              style={{
                backgroundColor: extensions[key].detected ? '#c3e6cb' : '#fff',
              }}
              key={key}
            >
              <td>{extensions[key].name}</td>
              <td
                style={{
                  textTransform: 'capitalize',
                }}
              >
                {`${extensions[key].detected}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
