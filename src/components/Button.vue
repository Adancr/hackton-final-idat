<template>
  <button @click="onClick" :class="classValue" class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: String,
    fullWidth: {
      type: Boolean,
    },
  },
  computed: {
    classValue() {
      return {
        'button-primary': this.type === 'primary',
        'button-secondary': this.type === 'secondary',
        'button-ghost': this.type === 'ghost',
        'button-full': this.fullWidth === true,
      };
    },
  },
  methods: {
    onClick() {
      this.$emit('onclick');
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 15px 60px;
  border-radius: 25px;
  background: grey;
  color: #fff;
  border: none;
  font-weight: bold;
  &-primary {
    background: #5640ff;
  }
  &-secondary {
    background: #ff1558;
  }
  &-ghost {
    background-color: transparent;
    border: 1px solid #fff;
  }

  &-full {
    width: 100%;
    display: block;
  }
}
</style>
