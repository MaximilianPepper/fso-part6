import { createSlice } from "@reduxjs/toolkit";

const getId = () => (100000 * Math.random()).toFixed(0);

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload; // .id?
      const anecdoteToChange = state.find((n) => n.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    },

    createAnecdote(state, action) {
      const anecdote = action.payload;
      const newAnecdote = {
        content: anecdote,
        id: getId(),
        votes: 0,
      };
      state.push(newAnecdote);
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { voteAnecdote, createAnecdote, appendAnecdote, setAnecdotes } =
  anecdotesSlice.actions;
export default anecdotesSlice.reducer;
