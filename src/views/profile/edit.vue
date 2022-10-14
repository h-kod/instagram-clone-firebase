<template>
  <div>
    <h2>ASDASDASD</h2>
    <img src="/icons/options.svg" alt="">wd
    <CustomText size="xlarge">sadas</CustomText>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";

import IconOptions from "@/icons/options.svg";

export default {
  name: "igtv",
  components: {
    CustomText,
    IconOptions,
  },
};
</script>

<style scoped>
.igtv {
  display: grid;
  grid-template-rows: 100px 1fr 1fr;
  justify-content: center;
  align-items: center;
}

.igtv-icon {
  width: 85px;
  height: 85px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-left: 110px;
}

.igtv-text {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.igtv-upload {
  width: 100px;
  height: 30px;
  padding-left: 105px;
  padding-top: 20px;
}

.action-edit {
  background-color: dodgerblue;
  padding: 0.5rem;
  border-radius: 3px;
  color: white;
  width: 100px;
  height: 30px;
}

.thin {
  font-weight: 100;
  font-size: 25px;
}
</style>
