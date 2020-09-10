import React, { Component } from 'react';
import Form from './Form';

export default function Home() {
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
