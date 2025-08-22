import "./style.css";

const Loader = () => {
  return (
    <div className="container">
      <div className="loader">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <h4>Loading</h4>
    </div>
  );
};

export default Loader;
