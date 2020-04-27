<template>
  <div class="layout">
    <Nav>
      <h2>hola Nav</h2>
    </Nav>
    <Main>
      <router-view></router-view>
    </Main>
  </div>
</template>

<script>
  import Nav from "./Nav.vue";
  import Main from "./Main.vue";


export default {
  name: 'Layout',
  components: {
    Nav,
    Main,
  }
}
</script>

<style>

</style>