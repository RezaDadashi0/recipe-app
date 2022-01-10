import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "./common/Button";
import "../Styles/absluteInput.css";

export default function AbsluteInput({ onClose, handleSave, recipe }) {
  const [name, setName] = useState(recipe.title || "");
  const [cook, setCook] = useState(recipe.time || "");
  const [serving, setServing] = useState(recipe.serve || 1);
  const [instruction, setInstruction] = useState(recipe.instruction || "");
  const options = [
    { value: "Chocolate", id: uuid() },
    { value: "Strawberry", id: uuid() },
    { value: "Vanilla", id: uuid() },
    { value: "Shirmoz", id: uuid() },
    { value: "Delester", id: uuid() },
  ];
  const [ingredients, setIngredients] = useState(
    recipe.ingredients || [
      {
        name: "",
        amount: 1,
      },
    ]
  );

  const addIngredient = (name, amount) => {
    setIngredients([...ingredients, { name, amount }]);
  };

  const handleIngredientNameChange = (e, ingredient) => {
    const copyIngeridents = [...ingredients];
    const indexOf = copyIngeridents.indexOf(ingredient);
    copyIngeridents[indexOf].name = e.target.value;
    setIngredients(copyIngeridents);
  };

  const handleIngredientAmountDecrement = ingredient => {
    const copyIngeridents = [...ingredients];
    const indexOf = copyIngeridents.indexOf(ingredient);
    copyIngeridents[indexOf].amount =
      ingredient.amount > 1 ? ingredient.amount - 1 : 1;
    setIngredients(copyIngeridents);
  };

  const handleIngredientAmountIncrement = ingredient => {
    const copyIngeridents = [...ingredients];
    const indexOf = copyIngeridents.indexOf(ingredient);
    copyIngeridents[indexOf].amount = ingredient.amount + 1;
    setIngredients(copyIngeridents);
  };

  return (
    <div className="absluteInput">
      <div className="row">
        <h3>Name :</h3>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Fried Chicken"
          autoFocus
        />
      </div>
      <div className="row">
        <h3>Cook Time :</h3>
        <input
          type="text"
          value={cook}
          onChange={e => setCook(e.target.value)}
          placeholder="2:30"
        />
      </div>
      <div className="row">
        <h3>Serving :</h3>
        <input
          type="text"
          value={serving}
          onChange={e => setServing(e.target.value)}
          placeholder="4"
        />
      </div>
      <div className="row">
        <h3>Instructions :</h3>
        <textarea
          className="absluteInput__instruction"
          value={instruction}
          onChange={e => setInstruction(e.target.value)}
          placeholder="1- Some text note"
        />
      </div>
      <div className="row">
        <h3>Ingredients :</h3>
      </div>
      {ingredients.map((ingredient, i) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div className="ingredient" key={uuid()}>
            {/* <input
                type="text"
                value={ingredient.name}
                onChange={e => handleIngredientNameChange(e, ingredient)}
                placeholder="Delester"
              /> */}
            <select
              name="noshidani"
              id="noshidani"
              onChange={e => handleIngredientNameChange(e, ingredient)}
            >
              {options.map(option => (
                <option value={option.value} key={option.id}>
                  {option.value}
                </option>
              ))}
            </select>
            {/* <input
                type="text"
                value={ingredient.amount}
                onChange={e => handleIngredientAmountChange(e, ingredient)}
                placeholder="3 cup"
              /> */}
            <div className="D-I-container">
              <Button
                title="-"
                name="decrement"
                onClick={() => handleIngredientAmountDecrement(ingredient)}
              />
              <div
                style={{
                  padding: "10px 10px",
                  width: "100px",
                  textAlign: "center",
                }}
              >
                {ingredient.amount}
              </div>
              <Button
                title="+"
                name="increment"
                onClick={() => handleIngredientAmountIncrement(ingredient)}
              />
            </div>
          </div>
          <Button
            title="x"
            name="x"
            onClick={() =>
              setIngredients(ingredients.filter(ing => ing !== ingredient))
            }
          />
          {ingredients.length - 1 === i ? (
            <Button
              title="+"
              name="ingredient__add"
              onClick={() => addIngredient(ingredient.name, ingredient.amount)}
            />
          ) : null}
        </div>
      ))}
      <div className="contolrols">
        <Button
          title="Save"
          name="save"
          onClick={() =>
            handleSave(
              {
                title: name,
                time: cook,
                serve: serving,
                instruction: instruction,
                id: `${recipe.id ? recipe.id : uuid()}`,
                ingredients,
              },
              recipe
            )
          }
        />
        <Button title="Close" name="delete" onClick={onClose} />
      </div>
    </div>
  );
}
