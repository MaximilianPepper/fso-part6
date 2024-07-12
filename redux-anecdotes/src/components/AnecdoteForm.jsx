import { createAnecdote } from "../reducers/anecdoteReducer";
import { newNotification } from "../reducers/notificationReducer";
import { useDispatch } from "react-redux";
const NewAnecdote = () => {
  const dispatch = useDispatch();
  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(createAnecdote(content));
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
