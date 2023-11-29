<script>
import { store } from './store';
import SearchApp from './components/SearchApp.vue';

export default {

  components: {
    SearchApp,
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    handleSearch() {
      console.log(this.store.curText);
    }
  }
}
</script>

<template>
  <SearchApp @searchTyped="handleSearch()" />
</template>

<style lang="scss">
@import './style/general.scss';
</style>
