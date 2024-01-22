import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homebackground">
      <div className="row h-100 align-items-center">
        <div className="col-12 text-center ml-8">
          <h1 className="display-2">Welcome to Freedemia Group of Schools</h1>
          <p className="tagline">
            We are commited to giving your ward the best of education
          </p>
          <Link className="links m-2" to="/login">
            Visit Our Portal
          </Link>
          <Link className="links m-2" to="/blog">
            More About Us
          </Link>
        </div>

        <div className="row align-items-center">
          <div className="col-sm-lg-6 text-center align-items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
