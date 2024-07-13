import { newAnecdote } from "../reducers/anecdoteReducer";
import { newNotification } from "../reducers/notificationReducer";
import { useDispatch } from "react-redux";

const NewAnecdote = () => {
  const dispatch = useDispatch();
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(newAnecdote(content));
    console.log(content);
    dispatch(newNotification(`you created "${content}"`, 5));
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
