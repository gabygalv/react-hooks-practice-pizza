import React from "react";

function Pizza({pizza, onEdit}) {
  const {size, topping, vegetarian} = pizza

  function handleEditClick () {
    onEdit(pizza)
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{(vegetarian ? 'Yes' : 'No')}</td>
      <td>
        <button onClick={handleEditClick} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
