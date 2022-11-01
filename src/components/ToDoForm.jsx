import React, { useState } from "react";

const ToDoForm = (props) => {
  const [inputText, setInputText] = useState("");
  const [validacion, setValidacion] = useState(true);

  const manejarFormulario = (e) => {
    setInputText(e.target.value);
  };

  //Agrega una nueva tarea

  const submit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      props.nuevaTarea(inputText);
      setInputText("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={submit}>
        <span>Añadir tarea</span>
        <input value={inputText} onChange={manejarFormulario} />
        <button>Añadir</button>
      </form>
      {!validacion && (
        <div>Añada una tarea, por favor</div>
      )}
    </div>
  );
};

export default ToDoForm;
