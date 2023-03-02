import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

const pizzaAPI = "http://localhost:3001/pizzas"
function App() {
  const [pizzaData, setPizzaData] = useState([])
  const [form, setForm] = useState({
    topping: "",
    size: "Small",
    vegetarian: false
  })

  useEffect(() => {
    fetch(pizzaAPI)
    .then(res => res.json())
    .then(setPizzaData)
  }, []);

  const onEdit = (pizza) => {
    const pizzaEdit = {
    topping: pizza.topping,
    size: pizza.size,
    vegetarian: pizza.vegetarian,
    id: pizza.id
    };
    setForm(pizzaEdit)
  }

  function onFormSubmit (editedPizza) {
//updating an array in state 
    setPizzaData(pizzaData.map( pizza => pizza.id === editedPizza.id ? editedPizza : pizza))
  }

  return (
    <>
      <Header />
      <PizzaForm pizzaToEdit={form} setForm={setForm} onFormSubmit={onFormSubmit}/>
      <PizzaList pizzaData={pizzaData} onEdit={onEdit}/>
    </>
  );
}

export default App;
