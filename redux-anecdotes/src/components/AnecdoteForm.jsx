import { createAnecdote } from "../reducers/anecdoteReducer";
import { newNotification } from "../reducers/notificationReducer";
import { useDispatch } from "react-redux";
import anecdotesService from "../services/anecdotes";

const NewAnecdote = () => {
  const dispatch = useDispatch();
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    const newAnecdote = await anecdotesService.createNew(content);
    dispatch(createAnecdote(newAnecdote));
    dispatch(newNotification(`you created "${content}"`));
    setTimeout(() => dispatch(newNotification(null)), 5000);
  };
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default NewAnecdote;
