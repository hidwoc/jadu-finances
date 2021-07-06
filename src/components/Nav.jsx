import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <label for="summary">Summary</label>
        <input type="radio" className="tabs" id="summary" name="nav" value="Summary" />
        {/* <h2 className="nav-tab">Summary</h2> */}
      </Link>
      <Link to="/details/sales">
        <label for="sales">Sales</label>
        <input type="radio" className="tabs" id="sales" name="nav" value="Sales" />
        {/* <h2 className="nav-tab">Sales</h2> */}
      </Link>

      <Link to="/details/expenses">
        <label for="expenses">Expenses</label>
        <input type="radio" className="tabs" id="expenses" name="nav" value="Expenses" />
        {/* <h2 className="nav-tab">Expenses</h2> */}
      </Link>
    </nav>
  );
};

export default Nav;
