import { useEffect, useState } from 'react';
import { getSkips } from '../services/skipService';

export const useSkips = (postcode, area) => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getSkips(postcode, area);
        setSkips(data);
      } catch (err) {
        console.error('API Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [postcode, area]);

  return { skips, loading, error };
};
