import { useState } from "react";
import axios from "axios";
import { baseURLExpenses, config } from "../services";

const Form = (props) => {
  const [batch, setBatch] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [vendor, setVendor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEntry = {
      batch,
      description,
      quantity,
      category,
      price,
      vendor,
    };

    await axios.post(baseURLExpenses, { fields: newEntry }, config);
     setBatch("");
     setDescription("");
     setQuantity("");
     setCategory("")
     setPrice(0)
     setVendor("")
     
    props.setToggleFetch((curr) => !curr)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="batch">Batch</label>
        <input
          id="batch"
          type="text"
          required
          value={batch}
          onChange={(e) => setBatch(e.target.value.toUpperCase())}
        />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label htmlFor="category">Category</label>
        <select
          id="category"
          type="text"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled>Select Category</option>
          <option value="Kimchi">Kimchi</option>
          <option value="Jalapenos">Jalapenos</option>
          <option value="Beans">Beans</option>
          <option value="Supplies">Supplies</option>
          <option value="Packaging">Packaging</option>
          <option value="Delivery">Delivery</option>
        </select>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          required
          value={price}
          onChange={(e) => setPrice(e.target.valueAsNumber)}
        />
        <label htmlFor="vendor">Vendor</label>
        <input
          id="vendor"
          type="text"
          value={vendor}
          onChange={(e) => setVendor(e.target.value)}
        />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default Form;
