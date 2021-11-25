import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
// import { initializeApp } from "firebase/app";
  // only throws a compactibility issue on firebase v9.0.2 and above
  // for stability use v8.8.1 and below 


// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyCRfEatTzBFlZcmpu1faLpsSkqx7U4OkuY",
  authDomain: "user-management-40a01.firebaseapp.com",
  projectId: "user-management-40a01",
  storageBucket: "user-management-40a01.appspot.com",
  messagingSenderId: "620896018309",
  appId: "1:620896018309:web:7171b4172b0ff7007c2eec",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
