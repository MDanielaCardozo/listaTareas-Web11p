import { useState } from "react";
import ListaTareas from "./ListaTareas";
import { useEffect } from "react";

const FormularioTarea = () => {
  const tareasLocalStorage =
    JSON.parse(localStorage.getItem("tareasKey")) || [];
  const [tareas, setTareas] = useState(tareasLocalStorage);
  const [tarea, setTarea] = useState("");

  useEffect(() => {
    localStorage.setItem("tareasKey", JSON.stringify(tareas));
  }, [tareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tareaExistente = tareas.find(
      (item) => item.toLowerCase().trim() === tarea.toLowerCase().trim(),
    );
    if (tareaExistente) {
      return alert("No puedes cargar una tarea duplicada");
    }
    setTareas([...tareas, tarea]);
    //limpiar el formulario
    setTarea("");
  };

  return (
    <section>
      <form className="p-9" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="tarea" className="form-label">
            Ingresa una tarea
          </label>
          <input
            type="text"
            placeholder="Ej: Leer un libro"
            className="w-full px-4 py-5 my-5 border border-gray-300 rounded-lg"
            id="tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
        </div>
        <button
          type="submit"
          className="p-3 border rounded-lg bg-indigo-500 hover:bg-fuchsia-500"
        >
          Enviar
        </button>
      </form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
