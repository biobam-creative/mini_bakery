import "./style.css";

const Card = ({ date, body, category, data, image, title }) => {
  return (
    <div className="card m-2">
      <a
        href={data.link ? data.link : "https://google.com"}
        target="_blank"
        rel="noreferrer"
        className="card-link"
      >
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div>
            <p>{date}</p> <span>{category}</span>
          </div>
          {/* <div className="card-text">{body}</div> */}
        </div>
      </a>
    </div>
  );
};

export default Card;
