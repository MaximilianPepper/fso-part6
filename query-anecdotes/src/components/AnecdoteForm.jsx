import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnecdote } from "../requests";
import NotificationContext from "../NotificationContext";
import { useContext } from "react";

const AnecdoteForm = () => {
  // context
  const [notification, dispatch] = useContext(NotificationContext);
  const queryClient = useQueryClient();
  const anecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
    },
  });
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    anecdoteMutation.mutate({ content, votes: 0 });
    dispatch({ type: "SET", payload: `you added: ${content}` });
    setTimeout(() => dispatch({ type: "RESET" }), 4000);
  };
  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
