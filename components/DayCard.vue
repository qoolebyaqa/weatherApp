<template>
  <div class="card">
    <p class="card__day">{{ Number(props.date.slice(0, 2)) === new Date(Date.now()).getDate() ? 'Сегодня' : Number(props.date.slice(0, 2)) === new Date(Date.now()).getDate() + 1 ? 'Завтра' : `${props.date}`}}</p>
    <p class="card__date">{{ props.day }}</p>
    <SVGComponent :pic="props.type" />
    <p class="card__tempmax">{{ props.tempmax }}°</p>
    <p class="card__tempmin">{{ props.tempmin }}°</p>
    <p class="card__type">{{ props.type }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  date: String,
  tempmax: Number,
  tempmin: Number,
  type: String,
  day: String
});
</script>

<style scoped>
.card {
  padding: 11px;
}
.card__day, 
.card__tempmax {
  font-size: 20px;
  font-weight: 500;
}
.card__date,
.card__tempmin,
.card__type {
  color: #939CB0;
}
</style>
