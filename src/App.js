import './App.css';
import { useState } from 'react';
import SearchInventory from './components/search-inventory';
import AddInventory from './components/add-inventory';
import DisplayInventory from './components/display-inventory';

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items : [] })

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  }

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items : items});
  }



  return (
    <div className="App">
      <SearchInventory updateSearchParams = { updateFilters }/>
      <DisplayInventory items = { data["items"] }/>
      <AddInventory addItemToData = { addItemToData }/>
    </div>
  );
}






export default App;
