import { useEffect, useState } from 'react';
import { useAPI } from '../utils/useAPI';
import Error from '../components/Error';
import './Api.scss';

const Api = () => {
  const api = useAPI();
  const [price, setPrice] = useState({});
  const [error, setError] = useState({ code: undefined, message: undefined });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get('/products/powerade');
        console.log(res);
        setPrice(res.data);
      } catch (e) {
        setError({ code: e.code, message: e.message });
      }
    };
    getData();
  }, [api]);

  return (
    <>
      <div className="home">
        <div className="cardHolder">
          <div className="card" style={{ minHeight: 'fit-content' }}>
            <div className="title">Powerade Price</div>
            <div className="content" style={{ display: 'flex', flexDirection: 'column' }}>
              Please click the button to retrieve the prices for powerade at Smiths
              <div className="location">{price.location}</div>
              <div className="price">{price.pickup}</div>
              <button className="get-button" style={{ justifyContent: 'flex-end' }}>
                Hello
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Api;
