<template >
    <div>
    <div v-for="item in content.Gif">
    <div class="desc-item"  >
        <div class="title-area" >
            <div class="desc-text-h1">
                {{item.gifh1}}
            </div>
            <div class="desc-text-body des-margin-body c5">
                {{item.gifh2}}
            </div>
            <div class="desc-text-body des-margin-body c5">
                {{item.gifh3}}
            </div>
        </div>
        <div class="gif_wrapper">
        <picture>
            <source :srcset=item.gif_m
            media="(max-width: 768px)">
            <img class="gif_img gif_img1" :src=item.gif_pc
              alt="VIVAIA"
            >
        </picture>
    </div>
    </div>
    <div class="desc-item"  >
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
</div>
</template>
<script>
import content from '@/content'
export default {
    name:'gif',
    data() {
        return {
            content
        }
    },
}
</script>
<style lang="">
    
</style>