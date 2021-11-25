<script>
import firebase from "firebase/app";
import "firebase/auth";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import "animate.css";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const reuter = useRouter();
    const errMsg = ref();

    const forgotPass = () => {
      alert(`Relax and think, you'll recall it soon \nfeature not ready!`);
    };

    const showLogin = () => {
      document.getElementById("section1").classList.toggle("mainHidden");
    };

    const login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => {
          alert("SignIn success!");
          reuter.push("/dashboard");
        })
        .catch((err) => {
          switch (err) {
            case "auth/invalid-email":
              errMsg.value = "Invalid email";
              break;
            case "auth/user-not-found":
              errMsg.value = "No account with that email exists";
              break;
            case "auth/wrong-password":
              errMsg.value = "Incorrect password";
              break;
            default:
              errMsg.value = "Incorrect Email or Password";
              break;
          }
        });
    };

    return {
      email,
      password,
      errMsg,
      forgotPass,
      showLogin,
      login,
    };
  },
};
</script>

<template>
  <div id="body">
    <section id="section1" class="section1">
      <h1>ping <img src="../assets/connect.png" alt="" id="myImage" /></h1>
      <p
        class="animate__animated animate__bounce animate__infinite animate__fast"
        id="reuter"
        @click="showLogin"
      >
        Click here to login
      </p>
    </section>
    <div id="main">
      <section id="section2">
        <h1>ping <img src="../assets/connect.png" alt="" id="myImage" /></h1>
        <img src="../assets/pingg.jpg" alt="" id="dashImage" />
        <p id="details">
          Get Real Time Notification! Its simple, fast and easy..
        </p>
      </section>

      <keep-alive>
        <form @submit.prevent="login">
          <input
            type="email"
            placeholder="Enter your email"
            v-model="email"
            required
            class="input"
          />
          <input
            type="password"
            placeholder="Enter your password"
            v-model="password"
            required
            class="input"
          />
          <a id="forgot" @click="forgotPass">forgot password?😂</a>
          <button type="submit" id="btn">Login</button>
          <p id="para">
            Don't have an account?
            <router-link to="/register">sign up</router-link>
          </p>
          <p id="errMsg" v-if="errMsg">{{ errMsg }}</p>
        </form>
      </keep-alive>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/FormFields.scss";
</style>
