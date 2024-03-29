import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import router from "./router";
import { createPinia } from "pinia";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(createPinia()).use(router).use(vuetify).mount("#app");
