import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h2 className="nav-tab">Summary</h2>
      </Link>
      <Link to="/details/sales">
        <h2 className="nav-tab">Sales</h2>
      </Link>
      <Link to="/details/expenses">
        <h2 className="nav-tab">Expenses</h2>
      </Link>
    </nav>
  );
};

export default Nav;