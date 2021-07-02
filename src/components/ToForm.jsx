import { Link } from "react-router-dom";

const ToForm = (props) => {

  return (
    <div id="add-entry">
      <Link to={`/details/${props.details}/form`}>
        <button>Add an Entry</button>
      </Link>
    </div>
  );
};

export default ToForm;
