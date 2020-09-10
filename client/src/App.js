import React, { useState } from 'react';
import './App.css';

import Form from './component/Form';

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <div
        style={{
          background: 'rgb(23, 47, 65)',
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Form />
      </div>
    </div>
  );
}

export default App;
