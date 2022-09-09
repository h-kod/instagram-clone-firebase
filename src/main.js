import Vue from "vue";
import App from "@/App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap';
import { initializeApp } from "firebase/app";
import VueSession from 'vue-session';


Vue.use(VueSession)

Vue.prototype.appName = 'My App'

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDD-ZLG_J3aYSvWbBIoUN2UXb88Hzzui6c",
  authDomain: "instagram-clone-82c30.firebaseapp.com",
  projectId: "instagram-clone-82c30",
  storageBucket: "instagram-clone-82c30.appspot.com",
  messagingSenderId: "371981608268",
  appId: "1:371981608268:web:229705ee33e734e37c1be9",
  measurementId: "G-NB31N2WZ1Q"
};

const fire = initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

