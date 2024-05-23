<template>
  <div v-if="!isLoading" class="loadingscreen"><SVGComponent pic="logo"/></div>
  <div :class="$store.getters.theme" v-if="isLoading">
    <HeaderComponent/>
    <main>
      <section>
        <CurrentWeather/>
      </section>
      <CardsContiner />
    </main>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const isLoading = computed(() => {
  return store.state.isLoading;
})

onMounted(async() => {
  store.commit('setLoading');
  await store.dispatch('fetchLonLat');
  await store.dispatch('fetchWeather');
  await store.dispatch('fetchWeekData');
  store.commit('setLoading');
})


</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Montserrat", sans-serif;
}
#__nuxt {
  max-width: 1240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
.loadingscreen {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #4793ff40;
  display: flex;
  justify-content: center;
  align-items: center;
}
.light {
  background: linear-gradient(RGB(27, 27, 27), RGB(20, 20, 20));
  color: white;
  transition: all 0.3s ease-in;
}
.dark {
  background: white;
  color: black;
  transition: all 0.3s ease-in;
}
</style>
