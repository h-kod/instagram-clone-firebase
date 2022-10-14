<template>
  <div class="explore">
    <div class="d-flex top">
      <img
          :src="photoURL"
          alt="avatar"
          width="180px"
          height="180px"
      />

      <div class="d-flex flex-column">
        <h3>{{ displayName }}</h3>
        <p><span class="h6">Email:</span> {{ email }}</p>
        <p><span class="h6">İsim:</span></p>
        <p><span class="h6" :class="emailVerified ? 'text-success' : 'text-danger'">E-posta adresiniz {{
            emailVerified ? 'Doğrulandı' : 'Doğrulanmadı!'
          }}</span>
          <span class="ps-2"><a class="text-info" href="">Doğrula</a></span>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-auto">
        <div class="tabs">
          <div class="d-flex flex-column">
            <router-link to="/profileEdit">
              <a v-if="$route.name === 'profileEdit'"/>
              <span> Hesap</span>
            </router-link>

            <router-link to="/profileEdit/edit">
              <a v-if="$route.name === 'Edit'"/>
              <span>Profilimi Düzenle</span>
            </router-link>

          </div>

        </div>

      </div>
      <div class="col-4">
        <div class="tab-view">
          <router-view/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import CustomText from "@/components/CustomText";


import {getAuth, onAuthStateChanged} from "firebase/auth";

const auth = getAuth();

export default {
  name: "index",
  data() {
    return {
      email: '',
      displayName: '',
      photoURL: '',
      emailVerified: '',
      userin: getAuth().currentUser
    }
  },
  components: {
    CustomText,
  },
  methods: {
    userFetch(){
      console.log("userFetch")
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;

          this.displayName = user.displayName;
          this.email = user.email;
          this.photoURL = user.photoURL;
          this.emailVerified = user.emailVerified;

          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    }
  },
  mounted() {
    this.userFetch();
  },
  updated() {
    this.userFetch();
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
