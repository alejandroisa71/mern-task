import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  //Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //Obtener la funcion del context de tarea
  const tareasContext = useContext(tareaContext);
  const { agregarTarea } = tareasContext;

  //state del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  //extraer el nombre del proyecto
  const { nombre } = tarea;

  //leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  //Si no hay proyecto selleccionado
  if (!proyecto) return null;

  //Array destructuring para obtner el proyecto actual
  const [proyectoActual] = proyecto;

  const onSubmit = (e) => {
    e.preventDefault();

    //validar

    //pasar la validacion

    //agregar la nueva tarea al state de tareas
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTarea(tarea);

    //reiniciar el form
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contendor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contendor-input">
          <input
            type="submit"
            className=" btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
