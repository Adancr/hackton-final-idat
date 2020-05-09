<template>
  <aside class="view-nav">
    <div class="wrap">
      <img class="logo-pqtec" src="../assets/images/logo_pqtec.jpg" alt="" />
      <div class="wrap-items">
        <div class="box-init">
          <div class="init">Inicio</div>
        </div>
        <div class="box-message">
          <div class="message">Mensajes</div>
        </div>
        <div class="box-account">
          <div class="account">Mi cuenta</div>
        </div>
      </div>
    </div>
    <div class="box-back">
      <a class="back" href="">Cerrar sesión</a>
    </div>
  </aside>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'Nav',
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.view-nav {
  display: flex;
  flex-direction: column;
  align-items: space-around;
  align-items: center;
  color: #bab8cc;

  .wrap {
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 50px;

    &-items {
      margin-top: 40px;
    }

    .logo-pqtec {
      width: 170px;
    }

    .box-init {
      position: relative;
      display: flex;
      align-items: center;
      &::before {
        content: url('../assets/images/icon_init.svg');
        margin-right: 10px;
      }
    }
    .box-message {
      margin-top: 15px;
      position: relative;
      display: flex;
      align-items: center;
      &::before {
        content: url('../assets/images/icon_message.svg');
        margin-right: 10px;
      }
    }
    .box-account {
      margin-top: 15px;
      position: relative;
      display: flex;
      align-items: center;
      &::before {
        content: url('../assets/images/icon_account.svg');
        margin-right: 10px;
      }
    }
  }

  .box-back {
    position: absolute;
    bottom: 5%;
    display: flex;
    align-items: center;
    &::before {
      content: url('../assets/images/icon_back.svg');
      margin-right: 10px;
    }
    .back {
      font-size: 1.8rem;
      font-weight: 600;
      color: #bab8cc;
      text-decoration: none;
    }
  }
}
</style>
