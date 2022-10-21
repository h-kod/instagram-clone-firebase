<template>
  <div>
    <figure class="avatar">
      <img :src="src" :alt="alt" :width="size" :height="size" />
    </figure>
    <p>username</p>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      default:
        "https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png",
    },
    alt: {
      type: String,
    },
    size: {
      type: Number,
    },
  },
};
</script>

