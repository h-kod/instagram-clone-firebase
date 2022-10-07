<template>
  <div class="explore">

    <div class="">
    <h5>Ayarlar</h5>
    <div class="">

      <input type="text" v-model="this.displayName" :placeholder="this.displayName">

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
      </div>


      <button @click="profileEdit" class="btn btn-primary btn-sm">Güncelle</button>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import CustomText from "@/components/CustomText";


import {getAuth, updateProfile} from "firebase/auth";
const auth = getAuth();
export default {
  name: "edit",
  data() {
    return {
      email: '',
      displayName: '',
      photoURL: '',
      emailVerified: '',
    }
  },
  components: {
    CustomText,
  },
  methods: {
    profileEdit() {

      updateProfile(auth.currentUser, {

        displayName: this.displayName,
        email: this.email,
        photoURL: this.photoURL,
        emailVerified: this.emailVerified,

      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
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
