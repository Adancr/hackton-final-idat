<template>
  <div class="view-init">
    <div class="title">
      <h2>Cuéntanos sobre ti</h2>
      <p>esta información la podrán ver las de más personas</p>
    </div>
    <form>
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
    <Button type="primary">Continuar</Button>
  </div>
</template>

<script>
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Init',
  components: {
    Input,
    Button,
  },
};
</script>

<style lang="scss" scoped></style>
