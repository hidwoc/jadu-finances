import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h2 id="tab-summary">Summary</h2>
      </Link>
      <Link to="/details/sales">
        <h2 id="tab-sales">Sales</h2>
      </Link>
      <Link to="/details/expenses">
        <h2 id="tab-expenses">Expenses</h2>
      </Link>
    </nav>
  );
};

export default Nav;