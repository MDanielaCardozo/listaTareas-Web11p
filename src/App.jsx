import FormularioTarea from "./components/FormularioTarea";

function App() {

  

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-300 py-6 min-h-dvh font-mono">
      <header className="text-center ">
        <h1 className="text-xl font-bold">Lista de tareas</h1>
      </header>
      <main className="container ">
        <FormularioTarea></FormularioTarea>
      </main>
      <footer className="bg-black text-center py-7 absolute bottom-0 w-full">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
