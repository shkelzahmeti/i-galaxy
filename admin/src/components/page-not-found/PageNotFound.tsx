import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    window.scrollTo({ top: 0 });
    navigate("/");
  };

  return (
    <div className="page-not-found">
      <h2>404</h2>
      <p>Oops! The page you’re looking for does not exist.</p>
      <button className="home-button" onClick={goHome}>
        Back to Home
      </button>
    </div>
  );
}

export default PageNotFound;
