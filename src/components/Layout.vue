<template>
  <div class="layout">
    <div class="nav">
      <Nav> </Nav>
    </div>
    <div class="main">
      <Main>
        <router-view></router-view>
      </Main>
    </div>
  </div>
</template>

<script>
import Nav from './Nav.vue';
import Main from './Main.vue';
import Button from './Button.vue';

export default {
  name: 'Layout',
  components: {
    Nav,
    Main,
    Button,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;
  background-color: white;
  .nav {
    width: 20%;
    background-color: #5640ff;
    padding: 30px 15px;
  }
  .main {
    width: 80%;
    padding: 30px 20px;
  }
}
</style>
