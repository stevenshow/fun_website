import { useEffect, useState } from 'react';
import { useAPI } from '../utils/useAPI';
import Error from '../components/Error';
import './Home.scss';

const Home = () => {
  const api = useAPI();
  const [cards, setCards] = useState([]);
  const [error, setError] = useState({ code: undefined, message: undefined });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get('cards');
        setCards(res.data);
      } catch (e) {
        setError({ code: e.code, message: e.message });
      }
    };
    getData();
  }, [api]);

  return (
    <>
      {cards.length > 0 ? (
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
      ) : (
        <></>
      )}
      {error['code'] != null && <Error errorMessage={error}></Error>}
    </>
  );
};

export default Home;
