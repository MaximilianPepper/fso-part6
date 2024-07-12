import AnecdotesList from "./components/Anecdotes";
import NewAnecdote from "./components/AnecdoteForm";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdotesList />
      <NewAnecdote />
    </div>
  );
};

export default App;
