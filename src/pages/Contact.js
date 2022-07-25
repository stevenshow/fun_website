import { useEffect, useState } from 'react';
import { useAPI } from '../utils/useAPI';
import './Contact.scss';

const Contact = () => {
  const api = useAPI();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await api.get('/cards/contact');
      setCards(res.data);
    };
    getData();
  }, [api]);

  return (
    <div className="contact">
      <div className="card">
        <div className="title">Ways to contact me </div>
        <div className="content">
          {cards.map((card, i) => (
            <>
              <button className="ascii-button" onClick={() => window.open(`${card.link}`)}>
                <pre>
                  <code>{card.ascii}</code>
                </pre>
              </button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
