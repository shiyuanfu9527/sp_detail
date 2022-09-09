<template >
  <div class="four-picture-flex">
  <div class="desc-item"  v-for="item in content.fourpictureitem">
      <div class="title-area" >
          <div class="desc-text-h1">
              {{item.desch1}}
          </div>
      </div>
      <picture>
          <source :srcset=item.pic_m
          media="(max-width: 768px)">
          <img class="sp_img" :src=item.pic_pc  alt="VIVAIA"
          >
      </picture>
  </div>
</div>
</template>
<script>
import content from '@/content';
export default {
  name:'fourpictureitem',
  data() {
      return {
          content,
      }
  }
}
</script>
<style lang="less">
    .cb5 {
  color: #000;
  opacity: 0.5;
}
</style>