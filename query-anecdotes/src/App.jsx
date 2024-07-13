import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAnecdotes, updateAnecdote } from "./requests";
import NotificationContext from "./NotificationContext";
import { useContext } from "react";

const App = () => {
  // context
  const [notification, dispatch] = useContext(NotificationContext);
  const queryClient = useQueryClient();
  const mutateVote = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
    },
  });
  const handleVote = (anecdote) => {
    mutateVote.mutate({ ...anecdote, votes: anecdote.votes + 1 });
    dispatch({ type: "SET", payload: `you voted ${anecdote.content}` });
    setTimeout(() => dispatch({ type: "RESET" }), 4000);
  };

  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes,
    retry: 1,
  });
  //console.log(JSON.parse(JSON.stringify(result)));
  if (result.isError) {
    return (
      <div>
        anecdote service will not be avaiable due to problem with the server
      </div>
    );
  }
  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  const anecdotes = result.data;
  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
