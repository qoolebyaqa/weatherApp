<template>
  <li class="WeatherDetailsItem">
    <div class="svgContainer"><SVGComponent :pic="icon"/></div>    
    <p class="weatherDetailsItemTitle">{{ title }}</p>
    <p class="weatherDetailsItemInfo">{{ details }}</p>
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  
}
</script>

<style scoped>
  .svgContainer {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    box-shadow: 1px 3px 3px 3px #4793FF20;
    display: flex;
    justify-content: center;
    align-items: center
  }
  .WeatherDetailsItem {
    list-style-type: none;
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 14px;
  }
  .weatherDetailsItemTitle {
    color: #939CB0;
    width: 96px;
  }
  
  @media screen and (max-width: 565px) { 
    .WeatherDetailsItem {
      font-size: 10px;
      gap: 10px;
    }
    .weatherDetailsItemTitle {
      width: 70px;
    }
  }
  @media screen and (max-width: 400px) { 
    .WeatherDetailsItem {
      font-size: 8px;
      gap: 4px;
    }
    .weatherDetailsItemTitle {
      width: 60px;
    }
  }
</style>