import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { colorTheme, setColorTheme, styleColor } = props;
  const [selectedFont, setSelectedFont] = useState("black");

  useEffect(() => {
    if (colorTheme === "summary") {
      setSelectedFont("black");
    } else {
      setSelectedFont("white");
    }
  }, [colorTheme]);

  const handleClick = (e) => {
    setColorTheme(e.target.id);
  };

  return (
    <ul className="tabrow">
      <Link to="/">
        <li
          className=""
          style={
            colorTheme === "summary" ? { backgroundColor: styleColor } : null
          }
        >
          <h5
            id="summary"
            onClick={handleClick}
            style={colorTheme === "summary" ? { color: selectedFont } : null}
          >
            Summary
          </h5>
        </li>
      </Link>
      <Link to="/details/sales">
        <li
          className=""
          style={
            colorTheme === "sales" ? { backgroundColor: styleColor } : null
          }
        >
          <h5
            id="sales"
            onClick={handleClick}
            style={colorTheme === "sales" ? { color: selectedFont } : null}
          >
            Sales
          </h5>
        </li>
      </Link>
      <Link to="/details/expenses">
        <li
          className=""
          style={
            colorTheme === "expenses" ? { backgroundColor: styleColor } : null
          }
        >
          <h5
            id="expenses"
            onClick={handleClick}
            style={colorTheme === "expenses" ? { color: selectedFont } : null}
          >
            Expenses
          </h5>
        </li>
      </Link>
    </ul>
  );
};

export default Nav;
