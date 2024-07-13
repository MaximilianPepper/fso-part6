import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "../services/anecdotes";
// const getId = () => (100000 * Math.random()).toFixed(0);

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload.id;
      const anecdoteToChange = state.find((n) => n.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    },
    /*createAnecdote(state, action) {
      const newAnecdote = action.payload;
      state.push(newAnecdote);
    }, */
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
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};
export const newAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};
export const increaseVote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdotesService.increaseVote(anecdote);
    dispatch(voteAnecdote(updatedAnecdote));
  };
};
export default anecdotesSlice.reducer;
