import { writable, derived } from "svelte/store";

export const isAuthenticated = writable(false);
export const user = writable({
  id: "",
  name: "",
  email: "",
  avatar: "",
  token: "",
});
export const popupOpen = writable(false);
export const error = writable(null);