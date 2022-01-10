import React from "react";
import Button from "./common/Button";
import { v4 as uuid } from "uuid";
import "../Styles/recipe.css";
import "../Styles/button.css";

export default function Recipe({ recipe, onEdit, onDelete }) {
  return (
    <div className="recipe">
      <h1>{recipe.title}</h1>
      <h4>
        Cook Time: <span className="text-gray">{recipe.time}</span>
      </h4>
      <h4>
        Serving: <span className="text-gray">{recipe.serve}</span>
      </h4>
      <div>
        <h4>Instructions:</h4>
        <h4 className=" text-indent">
          <span className="text-gray">{recipe.instruction}</span>
        </h4>
      </div>
      <div>
        <h4>Ingredients:</h4>
        {recipe.ingredients.map(ingredient => (
          <h4 key={uuid()} className=" text-indent">
            <span className="text-gray text-indent">{ingredient.name} : </span>
            <span className="text-gray text-indent">{ingredient.amount}</span>
          </h4>
        ))}
      </div>
      <div className="contolrols">
        <Button onClick={onEdit} title="Edit" name="edit" />
        <Button
          onClick={() => onDelete(recipe.id)}
          title="Delete"
          name="delete"
        />
      </div>
    </div>
  );
}
