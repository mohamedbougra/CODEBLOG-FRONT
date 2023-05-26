import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";
import Dropdown from "primevue/dropdown";
import MultiSelect from "primevue/multiselect";
import Tag from "primevue/tag";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";

import FileUpload from "primevue/fileupload";
import Button from "primevue/button";
import ProgressBar from "primevue/progressbar";
import Badge from "primevue/badge";
import Toast from "primevue/toast";
import InputMask from "primevue/inputmask";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(PrimeVue)
  .component("InputText", InputText)
  .component("Checkbox", Checkbox)
  .component("Dropdown", Dropdown)
  .component("MultiSelect", MultiSelect)
  .component("Tag", Tag)
  .component("Toast", Toast)
  .component("FileUpload", FileUpload)
  .component("Button", Button)
  .component("ProgressBar", ProgressBar)
  .component("Badge", Badge)
  .component("InputMask", InputMask)
  .mount("#app");
