<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    emits: ['searchTyped']
}
</script>

<template>
    <header>
        <nav>
            <input type="search" id="search" v-model.trim="store.searchText">
            <label for="search">Find a film or tvShow</label>
            <button @click="$emit('searchTyped')">Search</button>
        </nav>
    </header>
</template>

<style lang="scss" scoped>

</style>
