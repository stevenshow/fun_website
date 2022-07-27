import errors from '../utils/errors.json';
import './Error.scss';

const Error = ({ errorMessage }) => {
  const { code, message } = errorMessage;
  let errorExists = false;

  if (errors.hasOwnProperty(code)) {
    errorExists = true;
  }

  return (
    <div className="card error">
      <div className="title">It seems the website has run into an issue</div>
      <div className="content">This is what I could gather about this issue:</div>
      <div>
        <li className="content error">
          {code}: {message}
        </li>
      </div>
      <div className="content">Likely Cause(s):</div>
      {errorExists ? (
        errors[code].Causes.map((cause, i) => (
          <li className="content cause" key={i}>
            {cause}
          </li>
        ))
      ) : (
        <>Cannot find cause</>
      )}
      <div className="content">Possible Solution(s):</div>
      {errorExists ? (
        errors[code].Solution.map((solution, i) => (
          <li className="content solution" key={i}>
            {solution}
          </li>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Error;
