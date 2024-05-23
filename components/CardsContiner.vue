<template>
  <div class="cardsContainer">
    <div class="cardsContainerControl">
      <p class="cardsContainerInfo">На неделю</p>
      <button>Отменить</button>
    </div>
    <ul>
      <li v-for="card in cards" :key="card.time">
        <DayCard
          :date="
            Number(card.time.slice(8, 10)).toString() +
            ' ' +
            MONTHS[Number(card.time.slice(5, 7))]
          "
          :tempmax="card.tempmax"
          :tempmin="card.tempmin"
          :type="card.weather"
          :day="toDefineWeekDay(card.time)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { MONTHS, toDefineWeekDay } from "~/util/helpers";
const store = useStore();

const cards = computed(() => {
  if (store.state.weekData) {
    return store.state.weekData;
  } else {
    return null;
  }
});
</script>

<style scoped>
.cardsContainer {
  margin-top: 28px;
  padding: 40px 20px;
}
.cardsContainerControl {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 7px;
}
.cardsContainerInfo {
  background: #4793ff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 35px;
  border-radius: 5px;
}
button {
  width: 134px;
  height: 35px;
  font-size: 21px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 12px #b4b4b425;
}
ul {
  padding: 20px;
  box-shadow: 0 0 12px #b4b4b425;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}
li {
  list-style-type: none;
  background-color: #4793ff40;
  width: 145px;
  border-radius: 10px;
}
@media screen and (max-width: 1222px) { 
  li {
    width: 12%;
  }
}
@media screen and (max-width: 900px) { 
  ul {
    justify-content: left;
  }
  li {
    width: 30%;
  }
}
@media screen and (max-width: 495px) { 
  ul {
    justify-content: center
  }
  li {
    width: 45%;
  }
}
</style>
