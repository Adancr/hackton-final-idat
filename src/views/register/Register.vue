<template>
  <div class="view-register">
    <div class="container-register">
        <div class="container-first">
        <header>
            <div class="first" >  <img src="@/assets/images/Pacha logo.png" height="30px" alt="">  </div> 
        </header>
        <main>
            <div class="picture first ">
                <img  src="@/assets/images/undraw_researching_22gp (1).svg" alt="">
            </div>
        </main>
     </div>

        <div class="container-second">
            <header >
                <div class="second"> 
                    <h1>Bienvenid@</h1>
                </div>
            </header>
            <main>
                <section class="formulario">   
                        <p>NOMBRE Y APELLIDO</p>
                        <div class="input two">
                        <input type="text" name="" id="" placeholder="Escribe aqui..."> 
                        </div> 
                        <P>EDAD</P>
                        <div class="input two">
                        <input type="text" name="" id="" placeholder="Escribe aqui..."> 
                        </div> 
                        <P>CELULAR</P>
                        <div class="input two">
                        <input type="text" name="" id="" placeholder="Escribe aqui..."> 
                        </div> 
                        <P>SEDE</P>  
                        <div class="input two">
                        <input type="text" name="" id="" placeholder="Escribe aqui..."> 
                        </div> 
                        <P>PROGRAMA DE ESPECIALIZACION</P>  
                        <div class="input two">
                        <input type="text" name="" id="" placeholder="Escribe aqui..."> 

                        </div> 

                        <button class="btn2 state3 "> Ingresar </button>
                </section>
            </main>

        </div>

</div>
  </div>
</template>

<script>
export default {
  name: 'Register',
}
</script>

<style>
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
  color: #BAB8CC;
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

/* body {
  background-color: #525252;
  padding: 5% 10%;
} */

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