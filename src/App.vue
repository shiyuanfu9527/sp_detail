<template>
  <div class="product_detail_richtext">
    <TopContainer></TopContainer>
    <DescItem></DescItem>
    <Fourpicture></Fourpicture>
    <DescItem2></DescItem2>
    <Details></Details>
    <GifPicture></GifPicture>
    <AboutUs></AboutUs>
    <ChooseSize></ChooseSize>
  </div>
</template>

<script>
import AboutUs from '@/components/AboutUs';
import ChooseSize from './components/ChooseSize.vue';
import DescItem from './components/DescItem.vue';
import DescItem2 from './components/DescItem2.vue';
import Details from './components/Details.vue';
import Fourpicture from './components/Fourpicture.vue';
import GifPicture from './components/GifPicture.vue';
import TopContainer from './components/TopContainer.vue';
export default {
  name: 'App',
  components: {
    DescItem,
    DescItem2,
    Details,
    ChooseSize,
    TopContainer,
    AboutUs,
    GifPicture,
    Fourpicture,
    Fourpicture
},
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

@font-face {
  font-family: "PlayfairDisplay-Regular";
  src: url("https://staticdn.vivaia.com/oneapi/fonts/PlayfairDisplay-Regular.ttf");
}

@font-face {
  font-family: "Lato-Regular";
  src: url("https://staticdn.vivaia.com/oneapi/fonts/Lato-Regular.ttf");
}
@font-face{
  font-family: "Lato-Bold";
  src: url("https://staticdn.vivaia.com/oneapi/fonts/Lato-Bold.ttf");
}
</style>
