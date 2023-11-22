<template>
  <PantallaCargaCamComponent v-if="isLoading"></PantallaCargaCamComponent>

  <div>
    <div class="container">
      <div class="video-container">
        <h2>Video</h2>
        <video class="video" id="video" ref="video" autoplay />
      </div>
      <div class="canvas-container">
        <h2>Canvas</h2>
        <canvas class="canvas" id="canvas" ref="canvas" width="480px" height="480px" />
      </div>
    </div>
  </div>
</template>

<script>

import { Camera } from "@mediapipe/camera_utils";
import { Pose } from "@mediapipe/pose";
import { drawConnectors, drawLandmarks, POSE_CONNECTIONS, POSE_LANDMARKS_LEFT, POSE_LANDMARKS_RIGHT, POSE_LANDMARKS_NEUTRAL } from "@mediapipe/drawing_utils";
import PantallaCargaCamComponent from '@/components/PantallaCargaCamComponent.vue'; // Importa el componente de carga

export default {
  name: "App",
  components: {
    PantallaCargaCamComponent
  },
  data() {
    return {
      video: null,
      canvas: null,
      ctx: null,
      isLoading: true,
 
    };
  },

  computed: {
    inputVideo() {
      return this.$refs.video;
    },
  },

  methods: {


    
    onResultsPose(results) {
      // Your existing onResultsPose logic here...

      // Assuming you have these variables defined somewhere
      const out5 = document.getElementsByClassName('canvas')
      this.ctx = out5.getContext('2d')
      this.ctx.save();
      this.ctx.clearRect(0, 0, out5.width, out5.height);
      this.ctx.drawImage(
        results.image,
        0,
        0,
        out5.width,
        out5.height
      );

      drawConnectors(
        this.ctx,
        results.poseLandmarks,
        POSE_CONNECTIONS,
        {
          color: (data) => {
            const x0 = out5.width * data.from.x;
            const y0 = out5.height * data.from.y;
            const x1 = out5.width * data.to.x;
            const y1 = out5.height * data.to.y;

            const z0 = this.clamp(data.from.z + 0.5, 0, 1);
            const z1 = this.clamp(data.to.z + 0.5, 0, 1);

            const gradient = this.ctx.createLinearGradient(
              x0,
              y0,
              x1,
              y1
            );
            gradient.addColorStop(
              0,
              `rgba(0, ${255 * z0}, ${255 * (1 - z0)}, 1)`
            );
            gradient.addColorStop(
              1.0,
              `rgba(0, ${255 * z1}, ${255 * (1 - z1)}, 1)`
            );
            return gradient;
          },

          
        }
      );

      drawLandmarks(
          this.ctx,
          Object.values(POSE_LANDMARKS_LEFT)
              .map(index => results.poseLandmarks[index]),
          {color: this.zColor, fillColor: '#FF0000'});
      drawLandmarks(
          this.ctx,
          Object.values(POSE_LANDMARKS_RIGHT)
              .map(index => results.poseLandmarks[index]),
          {color: this.zColor, fillColor: '#00FF00'});
      drawLandmarks(
          this.ctx,
          Object.values(POSE_LANDMARKS_NEUTRAL)
              .map(index => results.poseLandmarks[index]),
          {color: this.zColor, fillColor: '#AAAAAA'});

      this.ctx.restore();

    },
    
    async setupCamera() {
      this.video = document.getElementsByClassName('video')[0]

      const pose = new Pose({
        locateFile: (file) =>
          `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
      });

      // Initialize Camera using camera_utils
      pose.onResults(this.onResultsPose);

      const camera = new Camera(this.video, {
        onFrame: async () => {
          await pose.send({ image: this.video });
        },
        width: 480,
        height: 480,
      });
      await camera.start();

    },

   
  },

  created() {
    // Simulación de tiempo de carga (por ejemplo, 3 segundos)
    setTimeout(() => {
      this.isLoading = false; // Oculta la pantalla de carga después de 3 segundos
    }, 5000);

    
  },

  async mounted() {

    await this.setupCamera();
  },
};
</script>
<style scoped>
.container {
  display: flex;
}

.video-container,
.canvas-container {
  margin: 10px;
}

video,
canvas {
  border: 1px solid #ccc; 
  z-index:12;/* Añade un borde para mayor claridad */
}
</style>