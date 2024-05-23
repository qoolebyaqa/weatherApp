<template>
  <div class="currentWeather">
    <div class="currentWeather__details">
      <div class="currentWeather__main">
        <p class="currentWeather__value" v-if="weatherData">{{ weatherData.main.temp }}°</p>
        <p class="currentWeather__day">Сегодня</p>
        <div>
          <p class="curentWeather__infotime">Время: {{ currentTime }}</p>
          <p class="curentWeather__infocity">Город: {{ currentLocation.title }}</p>
        </div>
      </div>
      <div></div>
      <SVGComponent v-if="cardToday" :pic="cardToday" main="true"/>
    </div>
    <CurrentWeatherDetails />
  </div>
</template>

<script setup>
import store from '~/store';
const currentLocation = computed(() => store.state.currentLocation);
const weatherData = computed(() => store.state.weatherData);

const cardToday = computed(() => {
  if (store.state.weekData) {
    return store.state.weekData[0].weather;
  } else {
    return null;
  }
});

const currentTime = ref(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

const updateTime = () => {
  currentTime.value = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

onMounted(() => {
  const interval = setInterval(updateTime, 60000);
  updateTime(); 
  onUnmounted(() => {
    clearInterval(interval);
  });
});


</script>

<style scoped>
.currentWeather__value {
  color: #4793FF;
  font-size: 6rem;
  line-height: 105px;
}
.currentWeather {
  padding: 35px 19px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.currentWeather__details {
  padding-left: 20px;
  border-radius: 20px;
  box-shadow: 0 0 12px  #B4B4B425;
  display: flex;
  justify-content: left;
  width: 400px;
}
.currentWeather__day {
  font-size: 40px;
  margin-bottom: 31px;
}
.curentWeather__infotime,
.curentWeather__infocity {
  font-size: 25px;
  color: #939CB0;
}
.curentWeather__infotime {
  margin-bottom: 10px;
}

@media screen and (max-width: 1122px) { 
  .currentWeather__details {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 400px) { 
  .currentWeather__value {
    font-size: 4rem;
  }
  .currentWeather__day {
    font-size: 24px;
  }
  .curentWeather__infotime,
  .curentWeather__infocity {
    font-size: 18px;
   }
  .currentWeather__details{
    padding-left: 4px;
    padding-bottom: 10px;
  }
}

</style>
