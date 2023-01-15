import PoweradeCard from '../components/PoweradeCard';
import HumidityCard from '../components/HumidityCard';
import './Api.scss';

const Api = () => {
  return (
    <>
      <div className="api">
        <div className="card-holder">
          <PoweradeCard />
          <HumidityCard />
        </div>
      </div>
    </>
  );
};

export default Api;
