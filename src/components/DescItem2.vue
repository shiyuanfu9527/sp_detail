<template >
    <div>
    <div class="desc-item"  v-for="item in content.descitem2">
        <div class="title-area" >
            <div class="desc-text-h1">
                {{item.desch1}}
            </div>
            <div class="desc-text-body des-margin-body c5">
                {{item.desch2}}
            </div>
            <div class="desc-text-body des-margin-body c5">
                {{item.desch3}}
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
    name:'descitem2',
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