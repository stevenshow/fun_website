import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAPI } from '../utils/useAPI';
import Error from '../components/Error';
import './Home.scss';
import io from 'socket.io-client';

const Home = () => {
  const api = useAPI();
  const location = useLocation();
  const [cards, setCards] = useState([]);
  const [error, setError] = useState({ code: undefined, message: undefined });

  useEffect(() => {
    const socket = io('http://localhost:3000');
    socket.on('serverValue', (data) => {
      console.log(data);
    });

    setInterval(() => {
      socket.emit('getPiStats', {}, (serverValue) => {
        console.log(serverValue);
        console.log(`Received value from server: ${serverValue.value}`);
      });
    }, 3000);

    return () => socket.disconnect();
  }, [location]);

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
      <div></div>
      {cards.length > 0 ? (
        <div className="home">
          <div className="card-holder">
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
