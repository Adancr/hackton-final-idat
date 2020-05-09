<template>
  <div class="view-init">
    <Layout>
      <Nav></Nav>
      <Main> </Main>
    </Layout>
    <Button>boton</Button>
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

<style></style>
