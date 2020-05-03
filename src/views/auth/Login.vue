<template>
  <div class="view-login">
    <div class="container-register">
      <div class="container-first">
        <header>
          <div class="first">
            <img src="@/assets/images/Pacha logo.png" alt="logo pachaqtec" />
          </div>
        </header>
        <main>
          <div class="picture first">
            <img src="@/assets/images/undraw_researching_22gp (1).svg" alt="" />
          </div>
        </main>
      </div>

      <div class="container-second">
        <header>
          <div class="second">
            <h1>LOGIN</h1>
          </div>
        </header>
        <main>
          <form class="formulario">
            <Input label="Usaurio" />
            <Input type="password" label="Contraseña" />
            <Button :fullWidth="true" type="primary">Ingresar</Button>
          </form>
        </main>
      </div>
    </div>

    <form action=""></form>
  </div>
</template>

<script>
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Login',
  components: {
    Input,
    Button,
  },
};
</script>

<style lang="scss" scoped>
header img {
  padding-left: 86px;
  padding-top: 30px;
}

.picture {
  padding-left: 111px;
  margin-top: 64px;
  padding-bottom: 64px;
  padding-right: 111.69px;
}

.formulario {
  padding-left: 86px;
  background-color: #fcfcfc;
}

.formulario p {
  color: #bab8cc;
  font-size: 12px;
  padding-bottom: 8px;
}

.formulario .two {
  margin-bottom: 20px;
}

h1 {
  font-size: 20px;
  padding-top: 30px;
  text-align: center;
}

* {
  padding: 0;
  margin: 0;
}

body {
  background-color: #525252;
  padding: 5% 10%;
}

.container-register {
  max-width: 1366px;
  max-height: 660px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.container-first {
  background-color: #f8f8fa;
}

.container-first .first {
  max-width: 859px;
  background-color: #f8f8fa;
}

.container-second {
  background-color: #fcfcfc;
  padding-right: 86px;
  margin-bottom: -5px;
}
</style>
