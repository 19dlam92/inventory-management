import React from "react";

function DisplayInventory(props) {



  return (
    <>
      { 
        props.items.map ((item) => {
          return (
            <div>
              <p>Id: { item.id }</p>
              <p>Name: { item.name }</p>
              <p>Price: { item.price }</p>
              <p>Type: { item.type }</p>
              <p>Brand: { item.brand }</p>
            </div>
          )
        })
      }
    </>
  );
}



export default DisplayInventory;