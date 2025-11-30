import { useState, useEffect } from 'react';

export const useFounders = () => {
  const [founders, setFounders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFounders = () => {
      const data = [
        {
          id: 1,
          name: 'Ковальчук О.І.',
          companies: 'EPAM Systems, Luxoft',
          experience: '12 років',
          education: 'КПІ ім. Ігоря Сікорського',
          level: 'Магістр'
        },
        {
          id: 2,
          name: 'Мельник С.П.',
          companies: 'SoftServe, GlobalLogic',
          experience: '10 років',
          education: 'Львівська політехніка',
          level: 'Бакалавр'
        },
        {
          id: 3,
          name: 'Шевченко І.В.',
          companies: 'Genesis, DataArt',
          experience: '8 років',
          education: 'КНУ ім. Т. Шевченка',
          level: 'Магістр'
        }
      ];

      setFounders(data);
      setLoading(false);
    };

    loadFounders();
  }, []);

  return { founders, loading };
};
