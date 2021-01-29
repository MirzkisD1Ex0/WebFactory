<template>
  <div class="music-list">
    <div class="test">
      <audio :src="tempUrl" controls autoplay>
        您的浏览器不支持 audio 标签。
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tempUrl: require("../assets/TheFatRat-Jackpot.mp3"),
    };
  },
};
</script>

<style scoped>
.music-list {
}

.music-list audio {
  font-size: 24px;
  width: 300px;
  height: 40px;
}

#test {
  border: orange 1px solid;
}
</style>