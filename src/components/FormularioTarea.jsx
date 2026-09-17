

const FormularioTarea = () => {

    

  return (
    <section className="m-7">
      <form>
        <div className="mb-3">
            <label htmlFor="tarea" className="form-label">Ingresa una tarea</label>
            <input type="text" placeholder="Ej: Leer un libro" className="w-full px-4 py-5 my-5 border border-gray-300 rounded-lg" id="tarea"/>
        </div>
        <button type="submit" className="p-1 border rounded-lg bg-purple-500">Enviar</button>
      </form>
    </section>
  )
}

export default FormularioTarea
