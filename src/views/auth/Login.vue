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
import { mapActions, mapState } from 'vuex';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Login',
  components: {
    Input,
    Button,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  watch: {
    isLogin(value) {
      if (value) {
        /* eslint-disable */
        alert('Bienvenido pase usted');
        this.$router.replace('/');
      } else {
        /* eslint-disable */
        alert('Usuario no encontrado!!');
      }
    },
  },
  computed: {
    ...mapState({
      isLogin: (state) => state.authStore.isLogin,
    }),
  },
  methods: {
    ...mapActions({
      login: 'authStore/login',
    }),
    handleSubmit() {
      this.login({
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
header img {
  padding-left: 86px;
  padding-top: 30px;
}

.picture {
  padding-left: 250px;
  margin-top: 200px;
  padding-bottom: 180px;
  padding-right: 111.69px;
}

.formulario {
  padding-left: 20px;
  background-color: #fcfcfc;
  width: 400px;
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

.second {
  padding-bottom: 15px;
}

.container-register {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.container-first {
  background-color: #f8f8fa;
  padding-right: 25%;
}

.container-first .first {
  background-color: #f8f8fa;
}

.container-second {
  background-color: #fcfcfc;
  padding-top: 120px;
}

/* Responsive */
@media (max-width:1024px  ) {

  header img {
  padding-left: 40%;
  padding-top: 30px;
  height: 100px;
}

.container-register {

display: inline;
align-content: center;
}

.formulario {

  background-color: #fcfcfc;
   width: 100%;
  padding:  0 20%;
}
.container-second {
  background-color: #fcfcfc;
  padding-top: 50px;
}
 .picture {
  display: none;
}
}
@media (max-width: 768px) {

 header img {
  padding-left: 30%;
  padding-top: 30px;
  height: 100px;
}

.container-register {
display: block;

}

.formulario {

  background-color: #fcfcfc;
  width: 100%;
  padding:  0 20%;

}

.container-second {
  background-color: #fcfcfc;
  padding-top: 50px;
}
 .picture {
  display: none;
}
}
@media (max-width: 576px) {
header img {
  padding-left: 25%;
  padding-top: 30px;
  height: 100px;
}

.container-register {
display: block;

}

.formulario {

  background-color: #fcfcfc;
  width: 100%;
  padding:  0 20%;

}
.container-second {
  background-color: #fcfcfc;
  padding-top: 50px;
}

 .picture {
  display: none;
}
}
</style>
