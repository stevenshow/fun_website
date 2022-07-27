import './Error.scss';

const Error = ({ errorMessage }) => {
  const { code, message } = errorMessage;
  return (
    <div className="card error">
      <div className="title">Sorry, we ran into an issue</div>
      <div className="content">This is what I could gather about this issue</div>
      <div className="content">
        {code}: {message}
      </div>
    </div>
  );
};

export default Error;
