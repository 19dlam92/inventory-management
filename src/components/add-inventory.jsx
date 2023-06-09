import React from "react";
import { useState } from "react";

function AddInventory(props) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");


  const addItemClicked = () => {

    props.addItem({
      name : name,
      price : price,
      type : type,
      brand : brand
    });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");

  }


    return (
        <div>
          <h2>Adding an Item</h2>
          <form>
            <label htmlFor="name-field">Name: </label>
            <input 
              id="name-field" type="text" value={ name } 
              onChange = {(e) => setName(e.target.value)}
            />
            <label htmlFor="price-field">Price: </label>
            <input 
              id="price-field" type="number" value={ price } 
              onChange = {(e) => setPrice(e.target.value)}
            />
            <label htmlFor="type-field">Type: </label>
            <input 
              id="type-field" type="text" value={ type } 
              onChange = {(e) => setType(e.target.value)}
            />
            <label htmlFor="brand-field">Brand: </label>
            <input 
              id="brand-field" type="text" value={ brand } 
              onChange = {(e) => setBrand(e.target.value)}
            />
            <button type="submit" onClick={ addItemClicked }>Search</button>
          </form>
        </div>
    );
}



export default AddInventory;