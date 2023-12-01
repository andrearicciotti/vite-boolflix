<script>
import { store } from './store';
import SearchApp from './components/SearchApp.vue';
import MainApp from './components/MainApp.vue';
import axios from 'axios';

export default {

  components: {
    SearchApp,
    MainApp,
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    handleSearch() {
      console.log(this.store.searchText);
      this.store.loading = true
      this.store.params.query = this.store.searchText

      axios
        .get(this.store.baseUrl + this.store.filmPath, {
          params: this.store.params,
        })
        .then((resp) => {
          // console.log(resp);
          this.store.films = resp.data.results;
          console.log(this.store.films);
        })
        .finally(() => {
          this.store.loading = false;
        })

      axios
        .get(this.store.baseUrl + this.store.tvSeriesPath, {
          params: this.store.params,
        })
        .then((resp) => {
          // console.log(resp);
          this.store.tvSeries = resp.data.results;
          console.log(this.store.tvSeries);
        })
        .finally(() => {
          this.store.loading = false;
        })
    },
    stopPreview() {
      this.store.cardFocus = false;
    }
  }
}
</script>

<template>
  <div class="wrapper" :class="[store.cardFocus ? 'bg-opacity' : '']" @click.stop="stopPreview">

    <SearchApp @searchTyped="handleSearch()" />
    <MainApp />

  </div>
</template>

<style lang="scss">
@use './style/partials/mixins' as *;
@use './style/partials/variables' as *;
@import './style/general.scss';
@import '@fortawesome/fontawesome-free/css/all.css';

.wrapper {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.bg-opacity {
  background-color: rgba($color: #000000, $alpha: 0.8);
}
</style>
