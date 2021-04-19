import React from "react";
import Barra from "../layouts/Barra";
import Sidebar from "../layouts/Sidebar";

const Proyectos = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Barra />
        <main>
          <div className="contenedor-tareas"></div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
