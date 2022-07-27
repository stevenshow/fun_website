import { useEffect, useState } from 'react';
import { useAPI } from '../utils/useAPI';
import Error from '../components/Error';
import './Contact.scss';

const Contact = () => {
  const api = useAPI();
  const [cards, setCards] = useState([]);
  const [error, setError] = useState({ code: undefined, message: undefined });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get('/cards/contact');
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
        <div className="contact">
          <div className="card">
            <div className="title">Ways to contact me </div>
            <div className="content">
              {cards.map((card, i) => (
                <>
                  <button
                    className="ascii-button"
                    key={i}
                    onClick={() => window.open(`${card.link}`)}
                  >
                    <pre>
                      <code>{card.ascii}</code>
                    </pre>
                  </button>
                </>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Error errorMessage={error} />
      )}
    </>
  );
};

export default Contact;
