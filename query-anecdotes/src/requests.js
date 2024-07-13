import axios from "axios";
const baseUrl = "http://localhost:3001/anecdotes";
export const getAnecdotes = () =>
  axios.get("http://localhost:3001/anecdotes").then((res) => res.data);

export const createAnecdote = (newNote) =>
  axios.post(baseUrl, newNote).then((res) => res.data);

export const updateAnecdote = (updated) =>
  axios.put(`${baseUrl}/${updated.id}`, updated).then((res) => res.data);
