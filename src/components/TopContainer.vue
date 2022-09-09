<template >
    <div class="desc-item">
            <div class="title-area" style="text-align: center;">
                <div class=" desc-text-h1">
                    {{content.Topitem.Toph1}}
                </div>
                <div class="desc-text-body des-margin-body cb5">
                    {{content.Topitem.Toptext}}
                </div>
            </div>
            <picture v-for="item in content.Topitem.pic">
                <source :srcset=item.pic_m
                    media="(max-width: 768px)" />
                <img class="sp_img" alt="VIVAIA"
                    :src=item.pic_pc />
            </picture>
    </div>
</template>
<script>
import content from '../content.json';
export default {
    name:'topcontainer',
    data() {
        return {
            content
        }
    },
}
</script>
<style lang="less">
        // .top_img{
        //     margin-bottom: 80px;
        // }
        // @media screen and (min-width:1025px) and (max-width:1440px) {
        //     .top_img{
        //         margin-bottom: 60px;
        //     }
        // }
        // @media screen and (max-width:1024px) {
        //     .top_img{
        //         margin-bottom: 20px;
        //     }
        // }
</style>