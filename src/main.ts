import { createApp } from "vue";
import App from "./App.vue";
import ClickOutside from "./composables/ClickOutsideDirective";
import "./index.css";

const app = createApp(App);
app.directive("click-outside", ClickOutside).mount("#app");
