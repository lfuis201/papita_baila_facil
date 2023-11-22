<template>
  <div>
    <vue3videoPlay
      width="800px"
      title="冰河世纪"
      :src="options.src"
      :type="options.type"
      :autoPlay="false"
    />
  </div>
</template>

<script>
import "vue3-video-play/dist/style.css";
import { vue3videoPlay } from "vue3-video-play";
export default {
  components: {
    vue3videoPlay
  },
  data() {
    return {
        options :[
            {src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "m3u8"}
        ]
        
 
    };
  },
  methods: {
    
  
  }
};


</script>

<style scoped></style>