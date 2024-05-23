<template>
  <header class="header">
    <div class="header__logo">
      <SVGComponent pic="logo" />
      <h1>VUE WEATHER</h1>
    </div>
    <div class="header__control">
      <SVGComponent pic="theme" />
      <input
        type="text"
        placeholder="Выбрать город"
        v-model="currentLocationTitle"
        @keypress="handleSubmit"
        :class="{'fontWhite': currentTheme}"
      />
      <p v-if="currentErrorState" class="message">{{ currentErrorState }}</p>
    </div>
  </header>
</template>

<script setup>
import store from "~/store";

const currentLocationTitle = computed({
  get: () => store.state.currentLocation.title,
  set: (value) => store.commit("changeCurrentLocationWithInput", value),
});
const currentErrorState = computed(() => {
  return store.state.error;
});
const currentTheme = computed(() => {
  return store.state.theme;
});
async function handleSubmit(event) {
  if (event.keyCode === 13) {
    await store.dispatch("fetchLonLat");
    console.log(store.state.error)
    if (store.state.error) {
      return;
    } else {
      await store.dispatch("fetchWeather");
      await store.dispatch("fetchWeekData");
    }
    return;
  }
}
</script>

<style scoped>
h1 {
  color: #4793ff;
  font-size: 24px;
  letter-spacing: 0.9px;
}
.header {
  padding: 19px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.header__logo,
.header__control {
  display: flex;
  align-items: center;
  gap: 20px;
}
input {
  height: 37px;
  width: 194px;
  border: none;
  border-radius: 10px;
  background-color: #4793ff40;
  font-size: 16px;
  padding-left: 20px;
}
input::placeholder {
  color: black;
  font-size: 18px;
  letter-spacing: 0.2px;
  font-weight: 400;
}
.message {
  position: absolute;
  top: 80px;
  font-size: 14px;
  color: #FF12FF90;;
  width: 250px;
}
.fontWhite {
  color: white
}
@media screen and (max-width: 600px) { 
  .header {
    justify-content: center;
    gap: 20px;
  }
  .message {
    top: 150px;
  }
}
@media screen and (max-width: 380px) { 
  h1 {
    font-size: 18px;
  }
}
</style>
