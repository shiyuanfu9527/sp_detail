<template>
  <div class="product_detail_richtext">
    <TopContainer></TopContainer>
    <DescItem></DescItem>
    <Details></Details>
    <AboutUs></AboutUs>
    <ChooseSize></ChooseSize>
  </div>
</template>

<script>
import DescItem from './components/DescItem.vue';
import Details from './components/Details.vue';
import ChooseSize from './components/ChooseSize.vue';
import TopContainer from './components/TopContainer.vue';
import AboutUs from '@/components/AboutUs'
export default {
  name: 'App',
  components: {
    DescItem,
    Details,
    ChooseSize,
    TopContainer,
    AboutUs
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
