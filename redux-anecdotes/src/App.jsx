import AnecdotesList from "./components/Anecdotes";
import NewAnecdote from "./components/AnecdoteForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdotesList />
      <NewAnecdote />
    </div>
  );
};

export default App;
