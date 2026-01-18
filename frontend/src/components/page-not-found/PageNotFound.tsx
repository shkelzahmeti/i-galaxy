import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="page-not-found">
      <h2>404</h2>
      <p>Oops! The page you’re looking for does not exist.</p>
      <Link to="/" className="home-button" onClick={scrollToTop}>
        Back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
