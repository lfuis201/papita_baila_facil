<!-- MyComponent.vue -->
<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="feature-img" >
             <img src="@/assets/pasos/reproducer/pic1.png" width="100%" alt="">
          </div>
        </div>

        <div class="col">
          <div class="small-img-row" >
            <div class="small-img" >
              <img src="@/assets/pasos/reproducer/pic2.png" alt="">
            </div>
            <p>
              <strong style="color: black;">Paso Basico</strong><br>
              Hector Lavoe <br>
              duracion 1:00
              
            </p>
          </div>
          <div class="small-img-row">
            <div class="small-img">
              <img src="@/assets/pasos/reproducer/pic3.png" alt="">
            </div>
            <p>
              <strong style="color: black;">Paso Basico</strong><br>
              Hector Lavoe<br>
              
            </p>
          </div>
          <div class="small-img-row">
            <div class="small-img">
              <img src="@/assets/pasos/reproducer/pic4.png" alt="">
            </div>
            <p>
              <strong style="color: black;">Paso Basico</strong><br>
              Hector Lavoe<br>
              
            </p>
          </div>
        </div>
      </div>

       
    </div>
  
  
   

  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },

   methods: {
    stopVideo() {
      // Set display property to none to hide the video player
      
      // Optionally, you can set showVideo to false if you need to track the visibility state
      // this.showVideo = false;
    },
  },
}
</script>

<style scoped>
/* Agrega tus estilos CSS aquí */
* {
  margin: 0;
  padding: 0;
}


.container {
  width: 80%;
  margin: 80px auto;
}

.row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.col {
  flex-basis: 50%;
  min-width: 250px;
}

.feature-img {
  width: 83%;
  margin: auto;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
}

.small-img-row {
  display: flex;
  background: #efefef;
  margin: 20px 0;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;
  width: 85%;
}

.small-img {
  position: relative;
}

.small-img img {
  width: 150px;
}

.small-img-row p {
  margin-left: 20px;
  color: #707070;
  line-height: 22px;
  font-size: 15px;
}

.song-info {
  margin-left: 20px;
  color: #707070;
  line-height: 22px;
  font-size: 15px;
}

.video-player{
  width: 70%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  z-index:17;
}

video:focus{
  outline: none;
}

.close-btn{
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  cursor: pointer;
}
</style>
