import './Info.css';

const Info = ({ Info }) => {
  return <div className="Info">
      <p>{Info.IMDB_Score}</p>
      <p>{Info.Genre}</p>
    </div>;
};

export default Info;