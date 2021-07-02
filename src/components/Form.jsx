import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { baseURLExpenses, baseURLSales, config } from "../services";
/**
 * TODO: handle display none required inputs
 */
const Form = (props) => {
  const [className, setClassName] = useState("");
  const [batch, setBatch] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [chargedDeliveryFee, setChargedDeliveryFee] = useState("false");
  const [customer, setCustomer] = useState("");
  const [description, setDescription] = useState("");
  const [jarDiscount, setJarDiscount] = useState(0);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState("");
  const [quantitySold, setQuantitySold] = useState(0);
  const [vendor, setVendor] = useState("");
  const params = useParams();

  useEffect(() => {
    setClassName(params.id)
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id === "expenses") {
      const newEntry = {
        batch,
        description,
        quantity,
        category,
        price,
        vendor,
      };
      await axios.post(baseURLExpenses, { fields: newEntry }, config);
    }

    if (params.id === "sales") {
      const newEntry = {
        batch,
        customer,
        category,
        quantity: quantitySold,
        price,
        chargedDeliveryFee,
        jarDiscount,
      };
      await axios.post(baseURLSales, { fields: newEntry }, config);
    }

    setBatch("");
    setCategory("Select Category");
    setChargedDeliveryFee("false");
    setCustomer("");
    setDescription("");
    setJarDiscount(0);
    setPrice(0);
    setQuantity("");
    setQuantitySold(0);
    setVendor("");
    props.setToggleFetch((curr) => !curr);
  };

  // toggle visibility of salesOnly and expensesOnly inputs
  const expensesOnly = className === "expenses" ? null : { display: "none" };
  const salesOnly = className === "sales" ? null : { display: "none" };

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
        <div className={className} style={expensesOnly}>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            required={className === "expenses" ? true : false}
            autoComplete="off"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={className} style={salesOnly}>
          <label htmlFor="customer">Customer</label>
          <input
            id="customer"
            type="text"
            required={className === "sales" ? true : false}
            autoComplete="off"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={className} style={expensesOnly}>
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="text"
            autoComplete="off"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className={className} style={salesOnly}>
          <label htmlFor="quantitySold">Quantity</label>
          <input
            id="quantitySold"
            type="number"
            autoComplete="off"
            value={quantitySold}
            onChange={(e) => setQuantitySold(e.target.valueAsNumber)}
          />
        </div>
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
          <option className={className} style={expensesOnly} value="Supplies">
            Supplies
          </option>
          <option className={className} style={expensesOnly} value="Packaging">
            Packaging
          </option>
          <option className={className} style={expensesOnly} value="Delivery">
            Delivery
          </option>
        </select>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          required
          autoComplete="off"
          value={price}
          onChange={(e) => setPrice(e.target.valueAsNumber)}
        />
        <div className={className} style={salesOnly}>
          <label htmlFor="chargedDeliveryFee">Charged Delivery Fee?</label>
          <input
            id="chargedDeliveryFee"
            type="checkbox"
            value={chargedDeliveryFee}
            onChange={(e) => e.target.checked ? setChargedDeliveryFee("true") : setChargedDeliveryFee("false")}
          />
        </div>
        <div className={className} style={salesOnly}>
          <label htmlFor="jarDiscount">Jar Discount</label>
          <input
            id="jarDiscount"
            type="number"
            autoComplete="off"
            value={jarDiscount}
            onChange={(e) => setJarDiscount(e.target.valueAsNumber)}
          />  
        </div>
        <div className={className} style={expensesOnly}>
          <label htmlFor="vendor">Vendor</label>
          <input
            id="vendor"
            type="text"
            autoComplete="off"
            value={vendor}
            onChange={(e) => setVendor(e.target.value)}
          />
        </div>
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default Form;
