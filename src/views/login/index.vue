<template>

<!--  <div class="home">-->
<!--    <input type="email" v-model='email' placeholder="Email">-->
<!--    <input type="password" v-model='password' placeholder="Password">-->
<!--  </div>-->
<div class="row justify-content-center ">
  <h3 class="text-center">Login</h3>
  <span v-show="errMsg" class="alert alert-warning">{{ errMsg }}</span>
  <form class="col-6">
    <!-- Email input -->

    <div class="form-outline mb-4">
      <input type="email" v-model='email' id="form2Example1" class="form-control" />
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
    <button type="button" class="btn btn-primary btn-block mb-4"  @click="signIn">Sign in</button>

    <!-- Register buttons -->
    <div class="text-center">
      <p>Not a member? <router-link to="/register" class="logo">Register</router-link></p>
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

<script setup>
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";



import VueRouter from "vue-router";
import Vue from "vue";
export default {
  data (){
    return {
      email:'',
      password:'',
      errMsg: '',
      objLogin: {
        loggedIn:false,
        uid:'',
        time:''
      },

    }
  },
  beforeCreate: function () {
    if (this.$session.exists()) {
      this.$router.push('/profile')
    }
  },
  methods:{
    signIn(){
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;

            // console.log(user.uid)
            this.objLogin.loggedIn= true
            this.objLogin.uid= user.uid;
            this.objLogin.time= user.metadata.lastSignInTime;
            // console.log(user.accessToken)


            this.$session.start()
            this.$session.set('jwt', user.accessToken)
            // Vue.http.headers.common['Authorization'] = 'Bearer ' + user.accessToken
            this.$router.push('/')

          })
          .catch(error => {
            console.log(error.code)
            switch (error.code) {
              case 'auth/invalid-email':
                this.errMsg = 'Invalid email'
                break
              case 'auth/user-not-found':
                this.errMsg = 'No account with that email was found'
                break
              case 'auth/wrong-password':
                this.errMsg = 'Incorrect password'
                break
              default:
                this.errMsg = 'Email or password was incorrect'
                break
            }
          });
    },


  },

}
</script>
