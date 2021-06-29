import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">
        <h2>Summary</h2>
      </Link>
      <Link to="/details/sales">
        <h2>Sales</h2>
      </Link>
      <Link to="/details/expenses">
        <h2>Expenses</h2>
      </Link>
    </div>
  );
};

export default Nav;