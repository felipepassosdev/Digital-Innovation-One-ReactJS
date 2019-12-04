import React from 'react';
import './App.css';


const a = <button>Historico</button>
const b = <button></button>
const hasCustumer = true

function App() {
  return (
    <>
      <h1>Mostrar ou não usando if inline com operdador logico &&</h1>
      {hasCustumer && (
        <div>
          <h1>Clique para ver historico</h1>
          {a}
        </div>
      )}
    </>
  );
}

export default App;

