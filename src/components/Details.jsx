import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = (props) => {
  const [entries, setEntries] = useState([]);
  const params = useParams();
  
  useEffect(() => {
    console.log(params.id)
    params.id === "sales"
    ? setEntries(props.salesData)
    : setEntries(props.expensesData);

  }, [params.id, props.salesData, props.expensesData])

  return (
    <div>
      <h2>Details</h2>
      <main>
        {entries.map((entry) => (
          <h3 key={entry.id}>{entry.fields.entryID}</h3>
        ))}
      </main>
    </div>
  );
};

export default Details;