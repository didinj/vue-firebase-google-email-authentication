// src/stores/auth.js
import { ref } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const currentUser = ref(null);
const isAuthReady = ref(false);

onAuthStateChanged(auth, user => {
  currentUser.value = user;
  isAuthReady.value = true;
});

export function useAuth() {
  return { currentUser, isAuthReady };
}
