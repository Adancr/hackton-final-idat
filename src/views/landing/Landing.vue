<template>
  <div class="view-landing">
    <div class="container">
      <img class="logo" src="@/assets/images/logoPachaQTecMobile.webp" alt="logo pachaqtec" />
      <h1 class="h1">
        ¡Explota todo tu
        <br />potencial tecnológico!
      </h1>
      <p class="parrafo">Con nuestros programas de especialización</p>
      <div class="lp-image">
        <img src="@/assets/images/laptop-2.png" alt="laptop imagen">
      </div>
      <button>Regítrate</button>
      <button>Ingresar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing"
};
</script>

<style lang="scss">
.view-landing {
  background-image: url("../../assets/images/bg-degradado-pc.png");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 10px;
}

.logo {
  margin-top: 30px;
  width: 250px;
}

.h1 {
  font-size: 6rem;
  font-weight: 800;
  color: white;
  margin-top: 130px;
  line-height: 1.3;
  letter-spacing: 2px;
}

.parrafo {
  font-size: 2.2rem;
margin: 40px 0;
color: white;
letter-spacing: 1px;
}

.lp-image {
  position: absolute;
  right: 0;
  top: 25%;
  img {
    width: 700px;
  }
}
// RWD 
@media (max-width: 1024px) {
  .logo {
    width: 230px;
  }
  .h1 {
    font-size: 4.5rem;
  }

  .parrafo {
    font-size: 1.8rem;
  }

  .lp-image {
    top: 28%;
    img {
      width: 520px;
    }
  }
}
@media (max-width: 576px) {
  .view-landing {
  background-image: url("../../assets/images/bg-degradado-mobil.png");
  }
  .logo {
    width: 190px;
    margin-top: 20px;
    padding-left: 15px;
  }
  .h1 {
    font-size: 2.6rem;
    font-weight: 500;
    text-align: center;
    margin-top: 60px;
  }

  .parrafo {
    font-size: 1.6rem;
    text-align: center;
    margin-top: 25px;
  }

  .lp-image {
    top: 50%;
    left: 10px;
    img {
      width: 440px;
    }
  }
}


</style>