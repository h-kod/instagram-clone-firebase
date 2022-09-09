<template>
  <div class="explore">
    <div class="d-flex">
      <img
          src="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png"
          alt="avatar"
          width="180px"
          height="180px"
      />


      <h2>ayarlar</h2>
      {{ email }}
      {{ displayName }}
      {{ photoURL }}
      {{ emailVerified }}
    </div>
    <div class="top">
      <div class="left-side-top">
        <div class="tabs">
          <div>
            <router-link to="/profileEdit">
              <a v-if="$route.name === 'profileEdit'" />
              <span
                  :class="[
              $route.name === 'profileEdit'
                ? 'tabs-item-active'
                : 'tabs-item-deactive',
            ]"
              >
            Hesap</span
              >
            </router-link>
          </div>

        </div>

      </div>
      <div class="right-side-top">
        <div class="tab-view">
          <router-view />
        </div>
    </div>

  </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import CustomText from "@/components/CustomText";


import { getAuth } from "firebase/auth";




export default {
  name: "index",
  data (){
    return{
      email:'',
      displayName:'',
      photoURL:'',
      emailVerified:'',
      userin:getAuth().currentUser
    }
  },
  components: {
    CustomText,
  },
  mounted () {

    const auth = getAuth();
    const user = getAuth().currentUser;
    console.log( auth.currentUser)
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      this.displayName = user.displayName;
      this.email = user.email;
      this.photoURL = user.photoURL;
      this.emailVerified = user.emailVerified;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
    }

  }
};



</script>

<style scoped>
.explore {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 930px;
}

.media-small {
  border: 1px solid white;
}

.media-big {
  border: 1px solid white;
}
.top {
  display: grid;
  grid-template-columns: 1fr;
}

.bot {
  display: grid;
  grid-template-columns: 1fr;
}

@media screen and (min-width: 980px) {
  .explore {
    display: flex;
    flex-direction: column;
    width: 930px;
  }

  .top {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 30px;
    max-width: 900px;
    max-height: 630px;
  }

  .bot {
    padding-bottom: 30px;
  }

  .right-side-top {
    display: grid;
    grid-template-rows: 1fr;
    max-height: 570px;
  }

  .left-side-top {
    display: grid;
    grid-template-rows: 1fr 2fr;
    row-gap: 30px;
  }

  .left-side-bot {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 30px;
  }

  .media-small {
    display: inherit;
    width: 290px;
    height: 290px;
    cursor: pointer;
    -webkit-filter: brightness(100%);
  }

  .media-small:hover {
    -webkit-filter: brightness(75%);
    -webkit-transition: all ease;
    -moz-transition: all ease;
    -o-transition: all ease;
    -ms-transition: all ease;
    transition: all ease;
  }

  .media-big {
    display: inherit;
    width: 610px;
    height: 600px;
    cursor: pointer;
    -webkit-filter: brightness(100%);
  }

  .media-big:hover {
    -webkit-filter: brightness(75%);
    -webkit-transition: all ease;
    -moz-transition: all ease;
    -o-transition: all ease;
    -ms-transition: all ease;
    transition: all ease;
  }
}
</style>
