import { Link } from "react-router-dom";

const ToForm = () => {
  return (
    <div>
      <Link to="/details/expenses/form">
        <button>Add an Entry</button>
      </Link>
    </div>
  );
};

export default ToForm;
