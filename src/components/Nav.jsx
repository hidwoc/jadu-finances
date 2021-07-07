import { Link } from "react-router-dom";

const Nav = (props) => {
  const { setColorTheme } = props;

  const handleClick = (e) => {
    setColorTheme(e.target.id)
  }

  return (
    <nav>
      <Link to="/">
        {/* <label htmlFor="summary" onClick={() => console.log("summary!")}>Summary</label>
        <input type="radio" className="tabs" id="summary" name="nav" value="Summary" /> */}
        <h2 className="nav-tab" id="summary" onClick={handleClick}>Summary</h2>
      </Link>
      <Link to="/details/sales">
        {/* <label htmlFor="sales">Sales</label>
        <input type="radio" className="tabs" id="sales" name="nav" value="Sales" /> */}
        <h2 className="nav-tab" id="sales" onClick={handleClick}>Sales</h2>
      </Link>

      <Link to="/details/expenses">
        {/* <label htmlFor="expenses">Expenses</label>
        <input type="radio" className="tabs" id="expenses" name="nav" value="Expenses" /> */}
        <h2 className="nav-tab" id="expenses" onClick={handleClick}>Expenses</h2>
      </Link>
    </nav>
  );
};

export default Nav;
