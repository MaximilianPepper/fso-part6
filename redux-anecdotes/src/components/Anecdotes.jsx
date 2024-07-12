import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { newNotification } from "../reducers/notificationReducer";

const AnecdotesList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter.length === 0) return state.anecdotes;
    return state.anecdotes.filter((a) =>
      a.content.toLowerCase().includes(state.filter)
    );
  });
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteAnecdote(id));
    const voted = anecdotes.find((e) => e.id === id);
    dispatch(newNotification(`you voted "${voted.content}`));
    setTimeout(() => dispatch(newNotification(null)), 5000);
  };
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);
  return (
    <>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdotesList;
