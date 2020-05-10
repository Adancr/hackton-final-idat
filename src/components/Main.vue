<template>
  <div class="view-main">
    <div class="title">
      <h1>Cuéntanos sobre ti</h1>
      <p>esta información la podrán ver las demás personas</p>
    </div>
    <main class="form">
      <form action="">
        <Input label="PERFIL" placeholder="¡Hola Soy Lorem ipsum!" required />
        <Input
          label="PROGRAMA DE ESPECIALIZACION"
          placeholder="Escriba aqui..."
          required
        />
        <Input label="CELULAR" placeholder="Escriba aqui..." required />
        <Input label="SEDE" placeholder="Escriba aqui..." required />
        <Input
          label="CORREO ELECTRONICO"
          placeholder="Escriba aqui..."
          required
        />
      </form>
      <Button>Continuar</Button>
    </main>
  </div>
</template>

<script>
import Input from './Input.vue';
import Button from './Button.vue';

export default {
  name: 'Main',
  components: {
    Input,
    Button,
  },
};
</script>

<style></style>
