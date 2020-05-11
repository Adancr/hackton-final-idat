<template>
  <div class="view-init">
    <div class="title">
      <h2>Cuéntanos sobre ti</h2>
      <p>esta información la podrán ver las de más personas</p>
    </div>
    <form>
      <Input label="PERFIL" placeholder="¡Hola Soy Lorem ipsum!" required />
      <div class="wrap">
        <div class="wrap__item">
          <Input
            label="PROGRAMA DE ESPECIALIZACION"
            placeholder="Escriba aqui..."
            required
          />
          <Input label="CELULAR" placeholder="Escriba aqui..." required />
        </div>
        <div class="wrap__item">
          <Input label="SEDE" placeholder="Escriba aqui..." required />
          <Input
            label="CORREO ELECTRONICO"
            placeholder="Escriba aqui..."
            required
          />
        </div>
      </div>
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

<style lang="scss" scoped>
.view-init {
  padding: 30px;
  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    padding-bottom: 20px;
  }
  p {
    font-size: 1.8rem;
    margin-bottom: 40px;
  }
  .wrap {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    &__item {
      width: 100%;
    }
  }
}
</style>
