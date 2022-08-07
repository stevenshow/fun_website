import { useState } from 'react';
import { useAPI } from '../utils/useAPI';
import Error from '../components/Error';
import './Api.scss';

const Api = () => {
  const api = useAPI();
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(undefined);
  const [error, setError] = useState({ code: undefined, message: undefined });

  const getPowerade = async () => {
    try {
      setPrice(undefined);
      setLoading(true);
      const res = await api.get('/products/powerade');
      console.log(res);
      setPrice(res.data);
      setLoading(false);
    } catch (e) {
      setError({ code: e.code, message: e.message });
    }
  };

  return (
    <>
      <div className="home">
        <div className="cardHolder">
          <div className="card" style={{ minHeight: 'fit-content' }}>
            <div className="title">Powerade Price</div>
            <div className="content" style={{ display: 'flex', flexDirection: 'column' }}>
              Please click the button to retrieve the prices for Mountain Berry Powerade at Smiths
              {loading && <div className="lds-dual-ring"></div>}
              {price && (
                <>
                  <div className="location" style={{ marginTop: '1rem' }}>
                    Location: <span>{price.location}</span>
                  </div>
                  <div className="price">
                    Price: <span>{price.pickup}</span>
                  </div>
                </>
              )}
              {error['code'] != null && <Error errorMessage={error} />}
              <button
                className="get-button"
                onClick={getPowerade}
                style={{ alignSelf: 'flex-end', marginTop: '1rem' }}
              >
                GET
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Api;
