import React, { useEffect } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';

export default function Slug() {
  const { slug } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    async function checkSlug() {
      const res = await fetch(`http://localhost:5000/${slug}`);
      if (res.status === 404) {
        history.push('/');
      } else {
        const json = await res.json();
        window.location.replace(json);
      }
    }
    checkSlug();
  }, [location.pathname]);

  return <div>re-directing....</div>;
}
