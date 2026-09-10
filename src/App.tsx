import MovieCarousel from "./components/MovieCarousel";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center overflow-x-hidden bg-zinc-200">
      <h2 className="text-3xl font-bold">Filmes de Ação</h2>
      <MovieCarousel />
    </div>
  );
}

export default App;
