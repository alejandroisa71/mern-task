import React, { useState } from "react";

const NuevoProyecto = () => {
  //State para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  //Extraer Nombre de Proyecto
  const { nombre } = proyecto;

  //Lee los contenidos del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando el Usuario envia un proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //Validar el proyecto

    //agregar al State

    //Reiniciar el form
  };

  return (
    <>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>

      <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          value={nombre}
          onChange={onChangeProyecto}
        />
        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar Proyecto"
        />
      </form>
    </>
  );
};

export default NuevoProyecto;
