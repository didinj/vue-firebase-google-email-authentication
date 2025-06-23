// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";
import DashboardView from "./views/DashboardView.vue";
import { useAuth } from "./stores/auth";

const requireAuth = (to, from, next) => {
  const { currentUser, isAuthReady } = useAuth();

  const waitForAuth = () => {
    if (isAuthReady.value) {
      currentUser.value ? next() : next("/login");
    } else {
      setTimeout(waitForAuth, 50);
    }
  };

  waitForAuth();
};

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: LoginView },
  { path: "/register", component: RegisterView },
  {
    path: "/dashboard",
    component: DashboardView,
    beforeEnter: requireAuth
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
