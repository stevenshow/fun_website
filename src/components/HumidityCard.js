import { useState } from 'react';
import { useAPI } from '../utils/useAPI';
import Error from './Error';

const HumidityCard = () => {
  const api = useAPI();
  const [loading, setLoading] = useState(false);
  const [conditions, setConditions] = useState();
  const [error, setError] = useState({ code: undefined, message: undefined });

  const getHumidity = async () => {
    try {
    } catch (e) {}
  };
  return (
    <div
      className="card"
      style={{ minHeight: 'fit-content', display: 'flex', flexDirection: 'column' }}
    >
      <div className="title">Crawlspace Conditions</div>
      <div className="content" style={{ display: 'flex', flexDirection: 'column' }}>
        <span>
          Please click the button to retrieve the current conditions (humidity and temperature) in
          the crawlspace in my home.
        </span>
        <em>If the data does not load, try again</em>
        {loading && <div className="lds-dual-ring"></div>}
        {conditions && (
          <>
            <table className="conditions-table">
              <tbody>
                <tr>
                  <td>Humidity</td>
                  <td className="humidity">{conditions.humidity}</td>
                </tr>
                <tr>
                  <td>Temperature</td>
                  <td className="temp">{conditions.temp}</td>
                </tr>
                <tr>
                  <td>Time of Reading</td>
                  <td className="time">{conditions.time}</td>
                </tr>
              </tbody>
            </table>
          </>
        )}
        {error['code'] != null && <Error errorMessage={error} />}
      </div>
      <button
        className="get-button"
        onClick={getHumidity}
        style={{ alignSelf: 'flex-end', margin: '1rem', marginTop: 'auto' }}
      >
        GET
      </button>
    </div>
  );
};
export default HumidityCard;
