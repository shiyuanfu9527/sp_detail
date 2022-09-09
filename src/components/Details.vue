<template >
    
        <div class="desc-item">
            <div class="title-area">
                <div class="desc-text-h1">
                    Details
                </div>
                <div class="desc-text-body des-margin-body cb5">
                    It’s the details that make the difference.
                </div>
            </div>
            <div class="detail-item" v-for="item in content.Details">
                <div>
                    <picture>
                        <source :srcset=item.pic_m
                            media="(max-width: 768px)" />
                        <img class="sp_img" alt="VIVAIA"
                            :src=item.pic_pc />
                    </picture>
                </div>
                <div class="detail-text-wrap">
                    <div class="desc-item">
                        <div class="desc-text-h2 mb10 fwb">
                            {{item.text1}}
                        </div>
                        <div class="desc-text-body2 cb5">
                            {{item.text2}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
</template>
<script>
import content from '@/content';
export default {
    name:'productdetails',
    data() {
        return {
            content
        }
    },
}
</script>
<style lang="less">
.detail-item {
    display: flex;
    background-color: rgba(245, 243, 239, 1);
    margin-bottom: 40px;
    &>div{
        width: 50%;
    }
    &:nth-child(odd){
    flex-flow: row-reverse;
    }
}
</style>