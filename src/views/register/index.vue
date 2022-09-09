<template>

<!--  <div class="home">-->
<!--    <input type="email" v-model='email' placeholder="Email">-->
<!--    <input type="password" v-model='password' placeholder="Password">-->
<!--  </div>-->
<div class="row justify-content-center ">
  <h3 class="text-center">Register</h3>
  <form class="col-6" @submit.prevent="register">
    <!-- Email input -->
    <div class="form-outline mb-4">
      <input type="email" v-model='email' id="form2Example1" class="form-control" required />
      <label class="form-label" for="form2Example1">Email address</label>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-4">
      <input type="password" v-model='password' id="form2Example2" class="form-control" />
      <label class="form-label" for="form2Example2">Password</label>
    </div>

    <!-- 2 column grid layout for inline styling -->
    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
        <!-- Checkbox -->
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
          <label class="form-check-label" for="form2Example31"> Remember me </label>
        </div>
      </div>

      <div class="col">
        <!-- Simple link -->
        <a href="#!">Forgot password?</a>
      </div>
    </div>

    <!-- Submit button -->
    <button type="submit" class="btn btn-primary btn-block mb-4">Register</button>

    <!-- Register buttons -->
    <div class="text-center">
      <p>Are you already a member? <router-link to="/login" class="logo">Login</router-link></p>
      <p>or sign up with:</p>
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-facebook-f"></i>
      </button>

      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-google"></i>
      </button>

      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-twitter"></i>
      </button>

      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-github"></i>
      </button>
    </div>
  </form>
</div>




</template>

<script>
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import login from "@/views/login";
export default {
  data (){
    return {
      email:'',
      password:'',
      user:[]
    }
  },
  methods:{
    register(){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            this.user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            // ..

            alert(errorCode)
          });




    },

  }
}
</script>
