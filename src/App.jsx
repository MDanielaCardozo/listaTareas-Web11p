import FormularioTarea from "./components/FormularioTarea"

function App() {
  

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-300 py-6">
     <header className="text-center ">
      <h1>Lista de tareas</h1>
     </header>
     <main className="container ">
      <FormularioTarea></FormularioTarea>
     </main>
     <footer className="bg-black text-center">

     </footer>
    </div>
  )
}

export default App
