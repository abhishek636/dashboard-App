import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="container">
        <h2 className="heading">🚀 Welcome to Homepage!</h2>
        <div className="flex jc-sa">
            <div className="col">
                <h2>
                <Link to="/articles">Articles Page</Link>
                </h2>
            </div>
            <div className="col">
                <h2>
                <Link to="/peoples">Peoples Page</Link>
                </h2>
            </div>
            <div className="col">
                <h2>
                <Link to="/books">Books Page</Link>
                </h2>
            </div>
        </div>
    </div>
  );
}

export default Homepage;