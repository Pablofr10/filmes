import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import EmptyLayout from "./layouts/EmptyLayout.vue";
import NavbarLayout from "./layouts/NavbarLayout.vue";

const app = createApp(App);
app.component("default-layout", DefaultLayout);
app.component("navbar-layout", NavbarLayout);
app.component("empty-layout", EmptyLayout);
app.use(router);
app.mount("#app");
