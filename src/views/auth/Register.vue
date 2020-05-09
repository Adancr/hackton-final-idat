<template>
  <div class="view-register">
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
            <h1>Bienvenid@</h1>
          </div>
        </header>
        <main>
          <form @submit.prevent="handleSubmit" class="formulario">
            <Input
              @input="(value) => (name = value)"
              :value="name"
              label="Nomgre y Appellido"
              placeholder="Escribe aqui..."
              required
            />
            <Input
              @input="(value) => (age = value)"
              :value="age"
              label="Edad"
              placeholder="Escribe aqui..."
              required
            />

            <Input
              @input="(value) => (phone = value)"
              :value="phone"
              label="Celular"
              placeholder="Escribe aqui..."
              required
            />
            <Input
              @input="(value) => (place = value)"
              :value="place"
              label="Sede"
              placeholder="Escribe aqui..."
            />
            <Input
              @input="(value) => (especialization = value)"
              :value="especialization"
              label="Programa de Especialización"
              placeholder="Escribe aqui..."
              required
            />
            <Button :fullWidth="true" type="primary">Registrar</Button>
          </form>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Register',
  components: {
    Input,
    Button,
  },
  data() {
    return {
      name: '',
      age: '',
      phone: '',
      place: '',
      especialization: '',
    };
  },
  methods: {
    ...mapActions({
      register: 'authStore/register',
    }),
    handleSubmit() {
      this.register({
        name: this.name,
        age: this.age,
        phone: this.phone,
        place: this.place,
        especialization: this.especialization,
        firstTime: true,
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
</style>
