import { createStore } from 'vuex';
import { createSevenDays } from '~/util/helpers';

const store = createStore({
  state: {
    theme: false, //light
    currentLocation: {title: "Ташкент", lat: 41.3123363, lon: 69.2787079},
    weatherData: null,
    error: null,
    isLoading: true,
    weekData: null,
  },
  getters: {
    theme(state) {
      return state.theme ? 'light' : 'dark';
    }
  },
  mutations: {
    themeToggler(state) {
      state.theme = !state.theme;
    },
    setCurrentLocation(state, payload) {
      state.currentLocation = {
        ...state.currentLocation, title: payload.title, lat: payload.lat, lon: payload.lon
      };
    },
    changeCurrentLocationWithInput(state, payload) {
      state.currentLocation.title = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    setLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setWeatherData(state, payload) {
      state.weatherData = payload;
    },
    setWeekData(state, payload) {
      state.weekData = payload;
    },
  },
  actions: {
    themeToggler({commit}) {
      commit('themeToggler');
    },
    async fetchLonLat({commit}){
      const config = useRuntimeConfig();
      const apiKey = config.public.apiKey;
      try {
        const responseLngLat = await ((await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.state.currentLocation.title}&appid=${apiKey}`)).json());
        if(responseLngLat.length < 1) {
          commit('setError', 'Невозможно найти город, проверьте правильность ввода.');
          return;
        }
        else {
          commit('setError', null)
        }
        const LocationObj = {title: responseLngLat[0].local_names.ru, lat: responseLngLat[0].lat, lon: responseLngLat[0].lon}
        commit('setCurrentLocation', LocationObj);
      } catch(err) {
        console.log(err);
      }
    },
    async fetchWeather({commit}) {
      const config = useRuntimeConfig();
      const apiKey = config.public.apiKey;
      try {
        const responseWeather = await ((await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.currentLocation.lat}&lon=${this.state.currentLocation.lon}&lang=ru&units=metric&appid=${apiKey}`)).json());
        commit('setWeatherData', responseWeather);
      } catch(err) {
        console.log(err);
      }
    },
    async fetchWeekData({commit}) {
      try {
        const responseWeather = await ((await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${this.state.currentLocation.lat}&longitude=${this.state.currentLocation.lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code`)).json());
        const weatherSeven = createSevenDays(responseWeather);
        commit('setWeekData', weatherSeven);
      } catch(err) {
        console.log(err);
      }
    },
  }
})

export default store;