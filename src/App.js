import './App.css';
import { useState } from 'react';
import SearchInventory from './components/search-inventory';

function App() {
  const [data, setData] = useState({});

  const updateData = (searchParams) => {
    setData(searchParams);
  }

  return (
    <div className="App">
      <SearchInventory callback = { updateData }/>
      <p>Name: { "name" in data ? data["name"] : "No data to display" }</p>
      <p>Price: { "price" in data ? data["price"] : "No data to display" }</p>
      <p>Type: { "type" in data ? data["type"] : "No data to display" }</p>
      <p>Brand: { "brand" in data ? data["brand"] : "No data to display" }</p>
    </div>
  );
}






export default App;
