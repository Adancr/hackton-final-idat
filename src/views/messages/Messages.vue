<template>
  <div class="view-messages">

    <div class="area-cont">
    <div class="search">
      <input type="text" placeholder="Buscar">
    </div>
    <div class="rct-msg">
      <!--Person-->
      <div class="person1">
        <img src="@/assets/images/user.png" width="50px" height="50px" alt="">
        <div class="user">
          <h2>Mario Gonzales</h2>
          <h3>!Hola Paul</h3>
        </div>
      </div>

      <div class="person1">
        <img src="@/assets/images/user.png" width="50px" height="50px" alt="">
        <div class="user">
          <h2>Reinaldo Galindo</h2>
          <h3>!Hola Paul!</h3>
        </div>
      </div>

      <div class="person1">
        <img src="@/assets/images/user.png" width="50px" height="50px" alt="">
        <div class="user">
          <h2>Reinaldo Galindo</h2>
          <h3>!Hola Paul!</h3>
        </div>
      </div>
      </div>
    </div>


    <div class="area-msg">
      <h1>Selecciona una conversación</h1>
    </div>
    <!--<Button>Button</Button> -->
  </div>
</template>

<script>
// import Button from '../../components/Button.vue';
export default {
  name: 'Messages',
  components: {},
};
</script>

<style lang="scss" scoped>

.view-messages{
  display: flex;
  padding: 0;
  margin: 0;
}

.area-cont{
  max-width: 400px;
}

.area-msg{

padding-top: 30%;

width: 100%;


text-align: center;
font-size:  80px;
letter-spacing: 0px;
color: #BAB8CC;
opacity: 1;
}

.search{
  padding-left: 20px;
   width: 380px;
  height: 50px;
  border-radius: 18px;
  border:1px solid black;

  input{
  border: none;
  width: 100%;
  height: 50px;
  background: none;
  font-weight: bold;
  font-family: arial;
  font-size: 18px;
  color: black;
  }
}

.rct-msg{
  padding-top: 20px;
}

.person1{
  padding-top: 10px;
  padding-left: 20px;
  display: flex;
  cursor: pointer;
  &:hover{
    background: rgba(49, 49, 49, 0.199);
  }
  .user{
    padding: 10px 10px;
    h2{
      font-weight: bold;
      font-size: 16px;
    }
    h3{
      padding-top: 5px;
      font-size: 14px;
    }
  }
}
</style>
