import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzaData, onEdit}) {
  const pizzaObj = pizzaData.map((pizza)=> {
    return <Pizza pizza={pizza} key={pizza.id} onEdit={onEdit}/>
  })
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        { pizzaObj }
      </tbody>
    </table>
  );
}

export default PizzaList;
