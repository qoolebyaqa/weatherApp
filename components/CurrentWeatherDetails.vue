<template>
  <div class="currentWeatherDetails">
    <ul>
      <WeatherDetailsItem icon="temperature" title="Температура" :details='feelsLike' />
      <WeatherDetailsItem icon="pressure" title="Давление" :details="pressure"/>
      <WeatherDetailsItem icon="precipitants" title="Осадки" :details="precipitation"/>
      <WeatherDetailsItem icon="wind" title="Ветер" :details="wind"/>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { typeOfWindDefine, windDirectionDefine } from '~/util/helpers';
const store = useStore();

const feelsLike = computed(() => {
  if (store.state.weatherData) {
    return `${store.state.weatherData.main.temp} - ощущается как ${store.state.weatherData.main.feels_like}`
  } else {
    return '';
  }
});
const pressure = computed(() => {
  if (store.state.weatherData) {
    const type = ((store.state.weatherData.main.pressure * 0.750063755419211).toFixed(2) < 770 || (store.state.weatherData.main.pressure * 0.750063755419211).toFixed(2) > 750) ? 'нормальное' :
    (store.state.weatherData.main.pressure * 0.750063755419211).toFixed(2) <= 750 ? 'пониженное' : 'повышенное';
    return `${(store.state.weatherData.main.pressure * 0.750063755419211).toFixed(2)} мм ртутного столба - ${type}`
  } else {
    return '';
  }
});
const wind = computed(() => {
  if (store.state.weatherData) {
    return `${store.state.weatherData.wind.speed} м/с ${windDirectionDefine(store.state.weatherData.wind.deg)} - ${typeOfWindDefine(store.state.weatherData.wind.speed)}`;
  } else {
    return '';
  }
});
const precipitation = computed(() => {
  if (store.state.weatherData) {
    if (store.state.weatherData.precipitation) {      
     return `${store.state.weatherData.precipitation.value} мм ${store.state.weatherData.precipitation.mode}`;
    } return 'Без осадков'
  } else {
    return '';
  }
});
  

</script>

<style scoped>
  .currentWeatherDetails {
    border-radius: 20px;
    padding: 20px 39px;
    width: 63%;
    background: url(/public//Cloud.png);
    background-repeat: no-repeat;
    background-size: 50%;
    background-position-x: right;
    box-shadow: 0 0 12px  #B4B4B425;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  @media screen and (max-width: 1122px) { 
  .currentWeatherDetails {
    width: 100%;
    padding: 20px 2px 20px 20px;
  }
  }
  @media screen and (max-width: 400px) { 
    .currentWeatherDetails {
      padding-left: 10px;
    }
  }
</style>