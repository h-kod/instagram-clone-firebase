<template>
  <div class="home">
    <div class="profile-header">
      <div class="head-avatar">
        <Avatar :size="180" :src="photoURL"></Avatar>
<!--        <img-->
<!--          :src="photoURL"-->
<!--          alt="avatar"-->
<!--          width="180px"-->
<!--          height="180px"-->
<!--        />-->
      </div>
      <div class="head-profile-detail">
        <div class="detail-name">
          <div class="detail-name-username">
            <CustomText class="thin" size="xlarge">{{ displayName }}</CustomText>
          </div>
          <div class="detail-name-edit">
            <button class="action-edit" type="button">
              <router-link tag="b" size="normal" to="/profile/edit">Edit Profile</router-link>
            </button>
          </div>
          <div class="icon-options">
            <IconOptions />
          </div>
        </div>
        <div class="detail-numbers">
          <div class="number-1">
            <CustomText tag="b" size="xlarge">5 </CustomText>
            <CustomText size="xlarge">posts</CustomText>
          </div>
          <div class="number-1">
            <CustomText tag="b" size="xlarge">124 </CustomText>
            <CustomText size="xlarge">followers</CustomText>
          </div>
          <div class="number-1">
            <CustomText tag="b" size="xlarge">135 </CustomText>
            <CustomText size="xlarge">following</CustomText>
          </div>
        </div>
        <div class="detail-info">
          <CustomText tag="b" size="xlarge">userinfo</CustomText>
        </div>
      </div>
    </div>
    <div class="detail-numbers-mob">
      <div class="number-1">
        <CustomText tag="b" size="xlarge">5 </CustomText>
        <CustomText size="xlarge">posts</CustomText>
      </div>
      <div class="number-1">
        <CustomText tag="b" size="xlarge">124 </CustomText>
        <CustomText size="xlarge">followers</CustomText>
      </div>
      <div class="number-1">
        <CustomText tag="b" size="xlarge">135 </CustomText>
        <CustomText size="xlarge">following</CustomText>
      </div>
    </div>
    <div class="tabs">
      <div>
        <router-link to="/profile">
          <IconPostsFill v-if="$route.name === 'ProfilePost'" />
          <IconPosts v-else />
          <span
            :class="[
              $route.name === 'ProfilePost'
                ? 'tabs-item-active'
                : 'tabs-item-deactive',
            ]"
          >
            POSTS</span
          >
        </router-link>
      </div>
      <div>
        <router-link to="/profile/igtv">
          <IconIGTVFill v-if="$route.name === 'ProfileIGTV'" />
          <IconIGTV v-else />
          <span
            :class="[
              $route.name === 'ProfileIGTV'
                ? 'tabs-item-active'
                : 'tabs-item-deactive',
            ]"
          >
            IGTV</span
          >
        </router-link>
      </div>
      <div>
        <router-link to="/profile/save">
          <IconSavedFill v-if="$route.name === 'ProfileSave'" />
          <IconSaved v-else />
          <span
            :class="[
              $route.name === 'ProfileSave'
                ? 'tabs-item-active'
                : 'tabs-item-deactive',
            ]"
          >
            SAVED</span
          >
        </router-link>
      </div>
      <div>
        <router-link to="/profile/tag">
          <IconTaggedFill v-if="$route.name === 'ProfileTag'" />
          <IconTagged v-else />
          <span
            :class="[
              $route.name === 'ProfileTag'
                ? 'tabs-item-active'
                : 'tabs-item-deactive',
            ]"
          >
            TAGGED</span
          ></router-link>
      </div>
    </div>
    <div class="tab-view">
      <router-view />
    </div>
  </div>
</template>



<script>
// @ is an alias to /src

// import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";


import {getAuth, onAuthStateChanged} from "firebase/auth";

import CustomText from "@/components/CustomText";
import Avatar from "@/components/Avatar";
import Post from "@/components/Post";
import IconOptions from "@/icons/options.svg";
import IconPosts from "@/icons/posts.svg";
import IconIGTV from "@/icons/igtv.svg";
import IconSaved from "@/icons/saved.svg";
import IconTagged from "@/icons/tagged.svg";
import IconPostsFill from "@/icons/posts-fill.svg";
import IconIGTVFill from "@/icons/igtv-fill.svg";
import IconSavedFill from "@/icons/saved-fill.svg";
import IconTaggedFill from "@/icons/tagged-fill.svg";

const auth = getAuth();

export default {
  name: "profile",
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
    Avatar,
    Post,
    IconOptions,
    IconPosts,
    IconIGTV,
    IconSaved,
    IconTagged,
    IconPostsFill,
    IconIGTVFill,
    IconSavedFill,
    IconTaggedFill,
  },
  updated() {
    console.log("213wdwdw")
  },
  mounted() {
  this.user();


  },
  methods: {
    user(){
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

  }


};


</script>


