<template>
  <div :class="getClass()" class="cont">
    <div class="buttons">
      <button @click="modify()" class="mark">{{message}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  data() {
    return {
      step: 1,
      one: true,
      two: false,
      three: false,
      message: "Open"
    };
  },
  methods: {
    getClass() {
      if (this.step === 1) {
        this.one = true;
        this.three = false;
        this.message = "Open";
        return "element1";
      }
      if (this.step === 2) {
        this.one = false;
        this.two = true;
        this.message = "InProgress";
        return "element2";
      } else {
        this.three = true;
        this.two = false;
        this.message = "Closed";
        return "element3";
      }
    },
    modify() {
      this.step = this.step + 1;
      if (this.step > 3) {
        this.step = 1;
      }
    }
  }
};
</script>

<style lang="css" scoped>
@import "../assets/Styles/StatusButton.css";
</style>
