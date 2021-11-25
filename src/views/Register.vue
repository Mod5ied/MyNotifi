<script>
import firebase from "firebase/app";
import "firebase/auth";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    // const password2 = ref("");
    const reuter = useRouter();

    const registerUser = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((data) => {
          alert("Success!");
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
      registerUser,
    };
  },
};
</script>

<template>
  <main id="body">
    <div id="main">
      <section id="section2">
        <h1>ping <img src="../assets/connect.png" alt="" id="myImage" /></h1>
        <img src="../assets/pingg.jpg" alt="" id="dashImage" loading="lazy" />
        <p id="details">
          Get Real Time Notification! Its simple, fast and easy..
        </p>
      </section>

      <keep-alive>
        <form @submit.prevent="registerUser">
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
          <input
            type="password"
            placeholder="Confirm password"
            required
            class="input"
          />
          <button type="submit" id="btn">Register</button>
          <p id="para">
            Already a ping user?
            <router-link to="/">sign in</router-link>
          </p>
          <p id="errMsg" v-if="errMsg">{{ errMsg }}</p>
        </form>
      </keep-alive>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "/src/scss/FormFields.scss";
</style>
