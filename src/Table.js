const Table = ({ extensions }) => {
  return (
    <div style={{ border: '1px solid #ddd', boxSizing: 'border-box' }}>
      <table>
        <tr>
          <th>Extension</th>
          <th>Detected</th>
        </tr>
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
              >{`${extensions[key].detected}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
