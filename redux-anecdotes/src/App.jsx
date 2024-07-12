import AnecdotesList from "./components/Anecdotes";
import NewAnecdote from "./components/AnecdoteForm";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdotesList />
      <NewAnecdote />
    </div>
  );
};

export default App;
