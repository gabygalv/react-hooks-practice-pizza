import React from "react";

function PizzaForm({ pizzaToEdit, setForm, onFormSubmit}) {
  const { id } = pizzaToEdit;

function handleChange (e) {
  const {name, value, type} = e.target
  setForm({
    ...pizzaToEdit,
    [name]: (type === 'radio') ? (value === 'Vegetarian') : value,
  })
}

function handleSubmit (e) {
e.preventDefault();
// onFormSubmit(pizzaToEdit)
const updatedPizza = pizzaToEdit;
fetch(`http://localhost:3001/pizzas/${id}`, {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(updatedPizza)
})
.then(res => res.json())
.then(onFormSubmit(pizzaToEdit))
}

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={pizzaToEdit.topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" 
          value={pizzaToEdit.size}
          onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={pizzaToEdit.vegetarian}
              onChange={handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!pizzaToEdit.vegetarian}
              onChange={handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
