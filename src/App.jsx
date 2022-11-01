import { useState } from "react";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  //Añadir una tarea
  const nuevaTarea = (tarea) => {
    setListaTareas([tarea, ...listaTareas]);
  };

  //Borrar
  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id);
    setListaTareas(listaFiltrada);
  };

  //Agregar el nuevo texto en la tarea en modo edit
  const modificarTarea = (id, tarea) => {
    const listaActualizada = listaTareas.map((e, index) => {
      if (index === id) {
        e = tarea;
      }

      return e;
    });

    setListaTareas(listaActualizada);
  };

  return (
    <div className="App">
      <ToDoForm nuevaTarea={nuevaTarea} />

      <div className="lista">
        {listaTareas.map((e, index) => (
          <ToDo 
            tarea={e} 
            borrar={borrar} 
            id={index} 
            editar={modificarTarea} />
        ))}
      </div>
    </div>
  );
}

export default App;
