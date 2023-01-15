import { useState } from 'react';
import { useAPI } from '../utils/useAPI';
import Error from './Error';

const PoweradeCard = () => {
  const api = useAPI();
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(undefined);
  const [error, setError] = useState({ code: undefined, message: undefined });

  const getPowerade = async () => {
    try {
      setPrice(undefined);
      setLoading(true);
      const res = await api.get('/products/powerade');
      setPrice(res.data);
      setLoading(false);
    } catch (e) {
      setError({ code: e.code, message: e.message });
    }
  };

  return (
    <div
      className="card"
      style={{ minHeight: 'fit-content', display: 'flex', flexDirection: 'column' }}
    >
      <div className="title">Powerade Price</div>
      <div className="content" style={{ display: 'flex', flexDirection: 'column' }}>
        <span>
          Please click the button to retrieve the prices for Mountain Berry Powerade at Smiths
        </span>
        <em>
          This data is collected by scraping the local smiths, which means the results can be hit or
          miss. If the data does not load, try again.
        </em>
        {loading && <div className="lds-dual-ring"></div>}
        {price && (
          <>
            <table className="powerade-table">
              <tbody>
                <tr>
                  <td>Location</td>
                  <td className="location">{price.location}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td className="price">{price.pickup}</td>
                </tr>
              </tbody>
            </table>
          </>
        )}
        {error['code'] != null && <Error errorMessage={error} />}
      </div>
      <button
        className="get-button"
        onClick={getPowerade}
        style={{ alignSelf: 'flex-end', margin: '1rem', marginTop: 'auto' }}
      >
        GET
      </button>
    </div>
  );
};

export default PoweradeCard;
