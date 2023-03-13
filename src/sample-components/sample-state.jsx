// import React from "react";
// import { useState } from "react";

// function SampleState() {

//   const [title, setTitle] = useState("");
//   const [count, setCount] = useState(0);
//   const [reset, setReset] = useState(0);

//   const updateTitleClicked = () => {
//     setTitle("This is currently hard coded");
//   }

//   const updateCounterClicked = () => {
//     setCount(count + 1);
//   }

//   // const updateResetClicked = () => {
//   //   setReset(count == 0);
//   // }

//   return(
//     <div>
//       <SampleData title = { title } count = { count }/>
//       <button onClick={ updateTitleClicked }>Update Title</button>
//       <button onClick={ updateCounterClicked }>Update Count</button>
//       {/* <button onClick={ updateResetClicked }>Reset</button> */}
//     </div>
//   );
// }


// function SampleData(props) {
//   return (
//     <div>
//       <p>Ttile: { props.title }</p>
//       <p>Count: {props.count }</p>
//     </div>
//   )
// }

// export default SampleState;