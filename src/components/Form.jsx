import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { baseURLExpenses, baseURLSales, config } from "../services";
import "../componentsCSS/Form.css";

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
  const history = useHistory();

  const exitForm = () => {
    history.push(`/details/${params.id}`);
  };
  
  useEffect(() => {
    setClassName(params.id);
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

    // setBatch("");
    // setCategory("Select Category");
    // setChargedDeliveryFee("false");
    // setCustomer("");
    // setDescription("");
    // setJarDiscount(0);
    // setPrice(0);
    // setQuantity("");
    // setQuantitySold(0);
    // setVendor("");
    props.setToggleFetch((curr) => !curr);
    exitForm();
  };


  // toggle visibility of salesOnly and expensesOnly inputs
  const expensesOnly = className === "expenses" ? null : { display: "none" };
  const salesOnly = className === "sales" ? null : { display: "none" };

  return (
    // Framer-motion AnimatePresence code from Soleil
    <AnimatePresence>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ y: -300, opacity: 0 }}
      >
        <div id="form-div">
          <button id="exit-form" onClick={exitForm}>
            X
          </button>
          <form onSubmit={handleSubmit}>
            <div className="input-div">
              <label htmlFor="batch">Batch</label>
              <input
                id="batch"
                type="text"
                required
                value={batch}
                onChange={(e) => setBatch(e.target.value.toUpperCase())}
              />
            </div>
            <div className="input-div {className}" style={expensesOnly}>
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
            <div className="input-div {className}" style={salesOnly}>
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
            <div className="input-div {className}" style={expensesOnly}>
              <label htmlFor="quantity">Quantity</label>
              <input
                id="quantity"
                type="text"
                autoComplete="off"
                placeholder="optional"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="input-div {className}" style={salesOnly}>
              <label htmlFor="quantitySold">Quantity</label>
              <input
                id="quantitySold"
                type="number"
                autoComplete="off"
                value={quantitySold}
                onChange={(e) => setQuantitySold(e.target.valueAsNumber)}
              />
            </div>
            <div className="input-div">
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
                <option
                  className={className}
                  style={expensesOnly}
                  value="Supplies"
                >
                  Supplies
                </option>
                <option
                  className={className}
                  style={expensesOnly}
                  value="Packaging"
                >
                  Packaging
                </option>
                <option
                  className={className}
                  style={expensesOnly}
                  value="Delivery"
                >
                  Delivery
                </option>
              </select>
            </div>
            <div className="input-div">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="number"
                required
                autoComplete="off"
                value={price}
                onChange={(e) => setPrice(e.target.valueAsNumber)}
              />
            </div>
            <div className="input-div {className}" style={salesOnly}>
              <label htmlFor="chargedDeliveryFee">Charged Delivery Fee?</label>
              <input
                id="chargedDeliveryFee"
                type="checkbox"
                value={chargedDeliveryFee}
                onChange={(e) =>
                  e.target.checked
                    ? setChargedDeliveryFee("true")
                    : setChargedDeliveryFee("false")
                }
              />
            </div>
            <div className="input-div {className}" style={salesOnly}>
              <label htmlFor="jarDiscount">Jar Discount</label>
              <input
                id="jarDiscount"
                type="number"
                autoComplete="off"
                value={jarDiscount}
                onChange={(e) => setJarDiscount(e.target.valueAsNumber)}
              />
            </div>
            <div className="input-div {className}" style={expensesOnly}>
              <label htmlFor="vendor">Vendor</label>
              <input
                id="vendor"
                type="text"
                autoComplete="off"
                placeholder="optional"
                value={vendor}
                onChange={(e) => setVendor(e.target.value)}
              />
            </div>
            <button id="submit" type="submit">
              Add Entry
            </button>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Form;
