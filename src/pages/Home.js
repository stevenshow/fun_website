import { useEffect, useState } from 'react';
import { useAPI } from '../utils/useAPI';
import './Home.scss';

const Home = () => {
  const api = useAPI();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await api.get('cards');
      setCards(res.data);
    };
    getData();
  }, [api]);

  return (
    <>
      {cards.length > 1 && (
        <div className="home">
          <div className="cardHolder">
            {cards.map((card, i) => (
              <div className="card" key={i}>
                <div className="title">{card.name}</div>
                <div className="content">
                  <p>{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
