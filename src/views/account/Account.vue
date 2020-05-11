<template>
  <div class="view-account">
    <div class="actualizacion">
    <h1>Cambia tu foto de perfil</h1>

  <div class="foto">
    <img src="../../assets/images/user.png" height="100px"  width="100px" alt="">
    <div class="cambio">
    <img src="@/assets/images/img-cambio.svg" alt="">
    <h2>cambiar foto</h2>
    </div>

  </div>

  <div class="inf-personal">
    <h1>Informacion personal</h1>
    <div class="info">

      <div class="inputs">
        <form action="">
         <Input
              @input="(value) => (place = value)"
              :value="place"
              label="Nombre"
              placeholder="Escribe aqui..."
            />

          <Input
              @input="(value) => (place = value)"
              :value="place"
              label="apellidos"
              placeholder="Escribe aqui..."
            />

            </form>

    </div>
      </div>
</div>

<div class="inf-personal">
    <h1>Configuracion de cuenta</h1>
    <div class="info">

      <div class="inputs">
        <form action="">
          <Input
              @input="(value) => (place = value)"
              :value="place"
              label="Codigo de Alumno"
              placeholder="Escribe aqui..."
            />
          <Input
              @input="(value) => (place = value)"
              :value="place"
              label="Contraseña"
              placeholder="Escribe aqui..."
            />
            <Input
              @input="(value) => (place = value)"
              :value="place"
              label="Nueva contraseña"
              placeholder="Escribe aqui..."
            />

            <Input
              @input="(value) => (place = value)"
              :value="place"
              label="Confirmacion de contraseña"
              placeholder="Escribe aqui..."
            />

            </form>

    </div>
      </div>
</div>
  </div>

  </div>

</template>

<script>
import { mapActions } from 'vuex';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Account',
  components: {
    Input,
    Button,
  },

};
</script>

<style lang="scss" scoped>

.actualizacion{
  h1{
    font-weight: bold;
  }
}
.foto{
  padding-top: 50px;
  display: flex;


}
 .cambio{
   padding-left: 50px;
    display: flex;
    cursor: pointer;
    h2{
      padding-top: 35px;
      padding-left: 10px;
      font-weight: bold;
    }
  }

.inf-personal{
  padding-top: 20px;
  width: 100%;
  h1{
    font-family: Arial;
    font-weight: bold;
  }
  h3{
    padding-top: 20px;
  }
  .inputs{
    padding-top: 20px;

  }
}

</style>
