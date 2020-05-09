<template>
  <div class="view-init">
    <h1>soy Inicio</h1>
    <Main> </Main>
    <Button>Button</Button>
  </div>
</template>

<script>
import Layout from '@/components/Layout.vue';
import Button from '@/components/Button.vue';
export default {
  name: 'Init',
  components: {
    Main,
    Layout,
    Button,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
