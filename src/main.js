import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";

//components:
import Home from "./components/2content/Home";
import About from "./components/2content/About";
import Contact from "./components/2content/Contact";

//path:
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/contact", name: "contact", component: Contact },
];

//router:
const router = createRouter({
  history: createWebHistory(),
  routes,
});

//app mount
createApp(App).use(router).mount("#app");
