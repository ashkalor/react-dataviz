import { Link } from "react-router-dom";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="container__title">404</h1>
      <p className="container__desc">Page not found!</p>
      <Link className="container__link container__link--hover" to="/">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
