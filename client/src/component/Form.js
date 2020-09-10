import React, { useState } from 'react';

export default function Form() {
  const [Err, setErr] = useState(null);
  const [Slug, setSlug] = useState('');
  const [Url, setUrl] = useState('');
  const [Succ, setSucc] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const url = 'https://amanly-server.vercel.app/add';
    const body = {
      slug: Slug,
      url: Url,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (res.status !== 200) {
      setErr('Slug Already Exist');
      setTimeout(() => {
        setErr(null);
        setSlug('');
        setUrl('');
      }, 3000);
    } else {
      setSucc('Slug Created');
      setTimeout(() => {
        setSucc(null);
        setSlug('');
        setUrl('');
      }, 3000);
    }
  }

  return (
    <div style={{ width: '700px' }}>
      <form onSubmit={handleSubmit}>
        <input
          style={{ padding: '25px', fontSize: '17px' }}
          required
          placeholder="Slug Name"
          className="u-half-width"
          type="text"
          value={Slug}
          onChange={(e) => {
            setSlug(e.target.value);
          }}></input>
        <input
          style={{ padding: '25px', fontSize: '17px' }}
          required
          placeholder="URL"
          className="u-full-width"
          type="text"
          value={Url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}></input>
        <button
          style={{ fontSize: '13px', color: 'white' }}
          type="submit"
          className="u-full-width">
          Create
        </button>
      </form>
      {Err ? (
        <div
          style={{
            background: 'red',
            color: 'white',
            fontSize: '17px',
            padding: '10px',
            fontWeight: 'bold',
            borderRadius: '4px',
          }}>
          {Err}
        </div>
      ) : null}
      {Succ ? (
        <div
          style={{
            background: 'green',
            color: 'white',
            fontSize: '17px',
            padding: '10px',
            fontWeight: 'bold',
            borderRadius: '4px',
          }}>
          {Succ}
        </div>
      ) : null}
    </div>
  );
}
