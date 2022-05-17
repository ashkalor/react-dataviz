import { Link } from "react-router-dom";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <div className="nfcontainer">
      <h1 className="nfcontainer__title">404</h1>
      <p className="nfcontainer__desc">Page not found!</p>
      <Link className="nfcontainer__link nfcontainer__link--hover" to="/">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
