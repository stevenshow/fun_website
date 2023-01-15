import { useState } from 'react';
import { useAPI } from '../utils/useAPI';
import Error from './Error';
import dayjs from 'dayjs';

const HumidityCard = () => {
  const api = useAPI();
  const [loading, setLoading] = useState(false);
  const [conditions, setConditions] = useState(undefined);
  const [error, setError] = useState({ code: undefined, message: undefined });

  const getHumidity = async () => {
    try {
      setConditions(undefined);
      setLoading(true);
      const res = await api.get('/pico/humidity');
      setConditions(res.data[0]);
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
      <div className="title">Crawlspace Conditions</div>
      <div className="content" style={{ display: 'flex', flexDirection: 'column' }}>
        <span>
          Please click the button to retrieve the current conditions (humidity and temperature) in
          the crawlspace of my home.
        </span>
        <em>
          I decided I needed to gather this to make sure that any cardboard I had stored down there
          was in ok conditions. I have a Raspberry Pi Pico that I hooked up to a DHT11 to gather the
          temperature and humidity, which is then sent to my Raspberry Pi4 via a POST request to my
          server where it is stored on a MariaDB database.
        </em>
        {loading && <div className="lds-dual-ring"></div>}
        {conditions && (
          <>
            <table className="conditions-table">
              <tbody>
                <tr>
                  <td>Humidity</td>
                  <td className="humidity">{conditions.humidity.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>Temperature</td>
                  <td className="temp">{conditions.temp.toFixed(2)}°F</td>
                </tr>
                <tr>
                  <td>Time of Reading</td>
                  <td className="time">
                    {dayjs(conditions.time).format('MMMM DD YYYY, h:mm:ss a')}
                  </td>
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
