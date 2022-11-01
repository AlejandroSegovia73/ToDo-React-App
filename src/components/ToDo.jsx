import React, { useState } from "react";

const ToDo = (props) => {
  const [modoEdit, setModoEdit] = useState(false);
  const [editText, setEditText] = useState("");

  //Editar texto
  const editar = () => {
    setModoEdit(true);
  };

  const manejarEditar = (e) => {
    setEditText(e.target.value);
  };

  const submitEdit = (e) => {
    e.preventDefault();
    props.editar(props.id, editText);
    setEditText("");
    setModoEdit(false);
  };

  
  //Eliminar una tarea
  const borrarTarea = () => {
    props.borrar(props.id);
  };
  
  return (
    <div>
      {!modoEdit ? (
        <div className="tarea">
          <span className="tarea_title">{props.tarea}</span>
          <span className="editar" onClick={editar}>
            Editar
          </span>
          <span className="borrar" onClick={borrarTarea}>
            Borrar
          </span>
        </div>
      ) : (
        <form onSubmit={submitEdit}>
          <input value={editText} onChange={manejarEditar} />{" "}
          <button>Guardar</button>
        </form>
      )}
    </div>
  );
};

export default ToDo;
