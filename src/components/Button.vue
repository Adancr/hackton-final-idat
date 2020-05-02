<template>
  <button v-bind:class="classValue" class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Buton',
  props: {
    type: String
  },
  computed: {
    classValue() {
      return this.type == 'primary' ? 'button-primary' : 'button-ghost';
      // if (this.type == "primary") return "button-primary";
      // if (this.type == "secondary") return "button-secondary";
      // if (this.type == "ghost") return "ghost";
    },
  },
};
</script>

<style lang='scss'>
.button {
  width: 200px;
  height: 50px;
  border-radius: 25px;
  border: none;
  background: none;
  font-weight: bold;
  font-family: "Roboto";
  &-primary {
    width: 335px;
  height: 50px;
  border-radius: 25px;
  border: none;
  background-color: red;
  font-weight: bold;
  font-family: arial;
  }
  &-ghost {
    background-color: white;
  }
}


</style>